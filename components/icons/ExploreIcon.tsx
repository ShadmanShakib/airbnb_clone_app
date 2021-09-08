import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

function ExploreIcon(props: SvgProps) {
  return (
    <Svg
      viewBox="0 0 32 32"
      aria-hidden="true"
      style={{
        height: 24,
        width: 24,
      }}
      fill="none"
      stroke="currentcolor"
      strokeWidth={4}
      {...props}
    >
      <Path d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2 2 6.925 2 13s4.925 11 11 11zm8-3l9 9" />
    </Svg>
  );
}

export default ExploreIcon;
