import { Button, IButtonProps } from "native-base";
import React from "react";

export default function PrimaryButton(props: IButtonProps) {
  return (
    <Button _pressed={{ bg: "#ff385f" }} bg="#ff385f" {...props}>
      {props.children}
    </Button>
  );
}
