import React from "react";

// styled
import { Wrapper } from "./Button.Style";

const Button = ({ text, callback }) => (
  <Wrapper type="button" onClick={callback}>
    {text}
  </Wrapper>
);

export default Button;
