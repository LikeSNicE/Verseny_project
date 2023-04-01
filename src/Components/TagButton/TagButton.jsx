import React from "react";
import "./TagButton.scss";

function TagButton(props) {
  let colorTag = {
    color: props.tag.color,
    border: "2px solid " + props.tag.color,
  };
  return (
    <input
      label={props.tag.name}
      onClick={() => props.state(props.tag.name)}
      type="radio"
      name="name"
      style={colorTag}
      className={"tagButton " + props.tag.color}
      value={props.tag.name}
    />
  );
}

export default TagButton;
