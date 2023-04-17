import React,{useState} from "react";
import styles from "./FilterBlock.module.scss";
import SelectUI from "../Select/Select";
import TagButton from "../TagButton/TagButton";

const FilterBlockCustom = () => {
  // select
  const arrayOption = [
    { id: 1, name: "По дате" },
    { id: 2, name: "По количеству" },
  ];
  const [date, setDate] = useState("");

  // tag button

  const arrayTagButton = [
    { id: 1, name: "Точные науки", color: "red" },
    { id: 2, name: "Програмирования", color: "blue" },
    { id: 3, name: "Рисования", color: "gray" },
    { id: 4, name: "Гуманитарные науки", color: "orange" },
    { id: 5, name: "3D Модели", color: "purple" },
    { id: 6, name: "Эссе", color: "black" },
    { id: 7, name: "Сценарий", color: "green" },
  ];

  return (
    <div className={styles.sectionFilter}>
      <div className={styles.sectionFilterSelect}>
        <SelectUI
          option={arrayOption}
          state={setDate}
          label={"Показать"}
          name={"myconcurs"}
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
