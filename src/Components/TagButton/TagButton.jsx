import React from "react";
import "./TagButton.scss";

function TagButton(props) {

  const {tag,state} = props;

  let colorTag = {
    color: tag.color,
    border: "2px solid " + tag.color,
  };
  return (
    <input
      label={tag.name}
      onClick={() => state(tag.name)}
      type="radio"
      name="name"
      style={colorTag}
      className={"tagButton " + tag.color}
      value={tag.name}
    />
  );
}

export default TagButton;
