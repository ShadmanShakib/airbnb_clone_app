import React from "react";
import { View, Text, Image, FlatList, Button } from "native-base";
import { PanGestureHandler, State } from "react-native-gesture-handler";

import Animated, {
  add,
  clockRunning,
  cond,
  debug,
  divide,
  eq,
  floor,
  not,
  set,
  useCode,
} from "react-native-reanimated";
const URLs = [
  "https://a0.muscache.com/im/pictures/miso/Hosting-48837541/original/67b1be92-42e3-47d7-bfc8-cbfeb59428da.jpeg?im_w=720",

  "https://a0.muscache.com/im/pictures/4d36d57d-6b49-46f4-92d9-4ca8892c9390.jpg?im_w=720",

  "https://a0.muscache.com/im/pictures/miso/Hosting-42619024/original/d7ddb979-03f8-4966-aa9e-cae18e47428c.jpeg?im_w=720",
];

export default function RoomCard() {
  const [state, setState] = React.useState(0);
  const handlePress = () => {
    if (state === 0 || state < 2) setState(state + 1);
    else {
      setState(0);
    }
  };
  return (
    <View>
      <View
        onMoveShouldSetResponder={() => true}
        onResponderGrant={handlePress}
      >
        <Image
          alt="2hfhd"
          height="366px"
          width="366px"
          source={{ uri: URLs[state] }}
        />
      </View>

      <Button onPress={handlePress}>Next</Button>
    </View>
  );
}
