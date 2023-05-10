import React from "react";

type ButtonCustomProps = {
  fullWidth?: boolean;
  button: "primary" | "secondary";
  size: "sm" | "md";
};

export type ButtonProps = React.ComponentProps<"button"> & ButtonCustomProps;
