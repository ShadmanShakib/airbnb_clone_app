import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

function SettingIcon(props: SvgProps) {
  return (
    <Svg
      viewBox="0 0 16 16"
      aria-hidden="true"
      style={{
        height: 16,
        width: 16,
      }}
      fill="#222"
      {...props}
    >
      <Path d="M5 8c1.306 0 2.418.835 2.83 2H14v2H7.829A3.001 3.001 0 115 8zm0 2a1 1 0 100 2 1 1 0 000-2zm6-8a3 3 0 11-2.829 4H2V4h6.17A3.001 3.001 0 0111 2zm0 2a1 1 0 100 2 1 1 0 000-2z" />
    </Svg>
  );
}

export default SettingIcon;
