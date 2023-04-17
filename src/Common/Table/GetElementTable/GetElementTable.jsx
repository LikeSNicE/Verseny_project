import React from "react";

import AvatarUI from "../Avatar/Avatar";
import AboutFile from "../AboutFile/AboutFile";
import File from "../File/File";
import SelectComboBox from "../SelectComboBox/SelectComboBox";
import FormCheckBox from "../FormCheckBox/FormCheckBox";
import PlaceIcon from "../../../Components/PlaceIconCustom/PlaceIconCustom";
import AutocompleteComponent from "../AutoComplete/AutoComplete";
import ModalConcursShare from "../../../pages/ModalConcursShareWinner/ModalConcursShare";

function GetElementOfObject(dataElement, control) {
  const elementMap = new Map([
    ["Avatar", <AvatarUI data={dataElement.Avatar} />],
    ["AboutFile", <AboutFile data={dataElement.AboutFile} />],
    ["File", <File data={dataElement.File} />],
    ["SelectComboBox", <SelectComboBox data={dataElement.SelectComboBox} />],
    [
      "CheckBox",
      <FormCheckBox
        valueCheckBox={dataElement.CheckBox}
        idCheckBox={dataElement.CheckBoxId}
        control={control}
      />,
    ],
    ["PlaceIcon",<PlaceIcon place={dataElement.PlaceIcon}/>],
    ["AutoComplete", <AutocompleteComponent data={dataElement.data}/>],
    ["Modal", <ModalConcursShare/>]
  ]);
  return elementMap.get(Object.keys(dataElement)[0]);
}

export default function GetElementTable({ dataElement, control }) {
  return typeof dataElement === "string" ? (
    <h3>{dataElement}</h3>
  ) : (
    GetElementOfObject(dataElement, control)
  );
}
