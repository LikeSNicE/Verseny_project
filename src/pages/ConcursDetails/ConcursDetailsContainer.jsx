import React from "react";
import ConcursDetails from "./ConcursDetails";
import { useState } from "react";

const ConcursDetailsContainer = () => {
  const [data, setData] = useState({
    concurs: {
      id: 1,
      img: "https://pbs.twimg.com/media/FWw6puNWQAEhQ29?format=jpg&name=large",
      name: "Конкурс открытки «Герои сказок А. С. Пушкина поздравляют с Новым годом и Рождеством»",
      category: {
        color: "red",
        name: "Программирование",
        value: "",
      },
      start_contest: "22 Февраля 2022",
      end_contest: "01 марта 2023",
      participant: 0,
      description:
        "Объявлен Всероссийский конкурс по истории «Диалог времен». Интеллектуальное соревнование будет проходить в три этапа в онлайн-формате. Талантливые старшеклассники могут заработать          своим умом от 100 до 250 тысяч рублей. До 26 декабря идет регистрация на Всероссийский           конкурс по истории «Диалог времен» для учеников 8-11 классов. Проект посвящен 350-летию со дня рождения           императора Петра I, поэтому задания связаны с           периодом его правления. Участие в конкурсе          бесплатное!",
      type: {
        value: "",
        label: "",
        icon: "",
      },
      folder_contest: "",
      conditionals: "",
      json_winners: "",
      isParticipation: "",
    },
    author: {
      avatar: "",
      nickname: "",
    },
  });

  return <ConcursDetails preview {...data}/>;
};

export default ConcursDetailsContainer;
