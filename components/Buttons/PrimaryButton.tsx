import { Button } from "native-base";
import React from "react";
interface IPrimaryButton {
  children: any;
  onPress?: () => void;
}

export default function PrimaryButton(props: IPrimaryButton) {
  return (
    <Button _pressed={{ bg: "#ff385f" }} bg="#ff385f" {...props}>
      {props.children}
    </Button>
  );
}
