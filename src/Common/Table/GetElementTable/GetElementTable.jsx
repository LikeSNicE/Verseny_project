import React from "react";

import AvatarUI from '../Avatar/Avatar';
import AboutFile from '../AboutFile/AboutFile';
import File from "../File/File";
import SelectComboBox from "../SelectComboBox/SelectComboBox";

function GetElementOfObject(dataElement) {
  const elementMap = new Map([
    ["Avatar", <AvatarUI data={dataElement.Avatar} />],
    ["AboutFile", <AboutFile data={dataElement.AboutFile} />],
    ["File", <File data={dataElement.File} />],
    ["SelectComboBox", <SelectComboBox data={dataElement.SelectComboBox}/>]
  ]);
  return elementMap.get(Object.keys(dataElement)[0]);
}

export default function GetElementTable({ dataElement }) {
  return typeof dataElement === "string" ? (
    <h3>{dataElement}</h3>
  ) : (
    GetElementOfObject(dataElement)
  );
}
