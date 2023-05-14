import React, { useState } from "react";
import styles from "./FilterBlock.module.scss";
import SelectUI from "../Select/Select";
import TagButton from "../TagButton/TagButton";
import SliderCustom from "../SliderCustom/SliderCustom";

const FilterBlockCustom = () => {
  // select
  const arraySelectOption = [
    { label: "По дате", value: "1" },
    { label: "По количеству", value: "2" },
  ];
  const [date, setDate] = useState("");

  // tag button

    const arrayTagButton = [
      { id: 1, name: "Все", color: "red" },
      { id: 2, name: "Точные науки", color: "red" },
      { id: 3, name: "Програмирования", color: "blue" },
      { id: 4, name: "Рисования", color: "gray" },
      { id: 5, name: "Гуманитарные науки", color: "orange" },
      { id: 6, name: "3D Модели", color: "purple" },
      { id: 7, name: "Эссе", color: "black" },
      { id: 8, name: "Сценарий", color: "green" },
    ];

  return (
    <div className={styles.sectionFilter}>
      <div className={styles.sectionFilterSelect}>
        <SelectUI
          option={arraySelectOption}
          state={setDate}
          label={"Сортировать"}
        />
      </div>

      <div className={styles.sectionFilterTagsBtn}>
        {arrayTagButton.map((item, index) => (
          <TagButton key={index} tag={item} />
        ))}
      </div>
    </div>
  );
};

export default FilterBlockCustom;
