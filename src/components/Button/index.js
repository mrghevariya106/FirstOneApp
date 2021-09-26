import React from "react";
import PropTypes from "prop-types";

// styled
import { Wrapper } from "./Button.Style";

const Button = ({ text, callback }) => (
  <Wrapper type="button" onClick={callback}>
    {text}
  </Wrapper>
);

Button.propTypes = {
  text: PropTypes.string,
  callback: PropTypes.func,
};

export default Button;
