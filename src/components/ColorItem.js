import React from "react";

const ColorItem = (props) => {
    console.log(props)
  return <li style={{ color: props.color }}>{props.color}</li>;
};

export default ColorItem;
