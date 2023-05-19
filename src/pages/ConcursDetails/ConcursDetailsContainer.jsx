import React from "react";
import ConcursDetails from "./ConcursDetails";
import { useState } from "react";

const ConcursDetailsContainer = () => {
  const [data, setData] = useState([
    {
      img:
        "https://pbs.twimg.com/media/FWw6puNWQAEhQ29?format=jpg&name=large",
      titleMain:
        "Конкурс открытки «Герои сказок А. С. Пушкина поздравляют с Новым годом и Рождеством»",
      tabText: "dsadasdasdasdaddasdasdas",
      dataStartNumber: "22 Февраля 2022",
      dataEndNumber: "01 марта 2023",
      countUser: 20,
      descriptionText:
        "Объявлен Всероссийский конкурс по истории «Диалог времен». Интеллектуальное соревнование будет проходить в три этапа в онлайн-формате. Талантливые старшеклассники могут заработать          своим умом от 100 до 250 тысяч рублей. До 26 декабря идет регистрация на Всероссийский           конкурс по истории «Диалог времен» для учеников 8-11 классов. Проект посвящен 350-летию со дня рождения           императора Петра I, поэтому задания связаны с           периодом его правления. Участие в конкурсе          бесплатное!",
    },
  ]);

  return data.map((item, index) => <ConcursDetails key={index} {...item} />);
};

export default ConcursDetailsContainer;
