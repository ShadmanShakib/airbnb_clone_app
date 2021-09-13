import React from "react";
import { View, Text, Image, FlatList, Button } from "native-base";
import { Dimensions, Animated } from "react-native";

const URLs = [
  "https://a0.muscache.com/im/pictures/miso/Hosting-48837541/original/67b1be92-42e3-47d7-bfc8-cbfeb59428da.jpeg?im_w=720",

  "https://a0.muscache.com/im/pictures/4d36d57d-6b49-46f4-92d9-4ca8892c9390.jpg?im_w=720",

  "https://a0.muscache.com/im/pictures/miso/Hosting-42619024/original/d7ddb979-03f8-4966-aa9e-cae18e47428c.jpeg?im_w=720",
];

export default function RoomCard() {
  const { width, height } = Dimensions.get("window");
  const [state, setState] = React.useState(0);

  const handleRightSwipe = () => {
    if (state === 0 || state < 2) setState(state + 1);
    else {
      setState(0);
    }
  };
  const handleLeftSwipe = () => {
    if (state === 2 || state > 0) setState(state - 1);
    else setState(2);
  };

  const fadeIn = React.useRef(new Animated.Value(0));
  return (
    <View>
      <View
        mx="6"
        onMoveShouldSetResponder={() => true}
        onResponderGrant={(e: any) => {
          if (e.nativeEvent.locationX > width / 2) handleRightSwipe();
          else {
            handleLeftSwipe();
          }
        }}
      >
        <Image
          alt="2hfhd"
          height="366px"
          width="100%"
          source={{ uri: URLs[state] }}
        />
      </View>
    </View>
  );
}
