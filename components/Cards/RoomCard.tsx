import React from "react";
import { View, Text, Image, FlatList, Button } from "native-base";
import { Dimensions } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedGestureHandler,
  useAnimatedStyle,
} from "react-native-reanimated";
import { PanGestureHandler } from "react-native-gesture-handler";
const URLs = [
  "https://a0.muscache.com/im/pictures/miso/Hosting-48837541/original/67b1be92-42e3-47d7-bfc8-cbfeb59428da.jpeg?im_w=720",

  "https://a0.muscache.com/im/pictures/4d36d57d-6b49-46f4-92d9-4ca8892c9390.jpg?im_w=720",

  "https://a0.muscache.com/im/pictures/miso/Hosting-42619024/original/d7ddb979-03f8-4966-aa9e-cae18e47428c.jpeg?im_w=720",
];

export default function RoomCard() {
  const { width, height } = Dimensions.get("window");
  const [state, setState] = React.useState(0);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const onGestureEvent = useAnimatedGestureHandler({
    onStart: (event, ctx: any) => {
      ctx.offsetX = translateX.value;
      ctx.offsetY = translateY.value;
    },
    onActive: (event, ctx) => {
      translateX.value = ctx.offsetX + event.translationX;
      translateY.value = ctx.offsetY + event.translationY;
    },
  });
  const style = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
      ],
    };
  });
  return (
    <View>
      <PanGestureHandler {...{ onGestureEvent }}>
        <Animated.View {...{ style }}>
          <Image
            source={{ uri: URLs[0] }}
            width={width}
            height={width}
            alt="hello"
          />
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
}
