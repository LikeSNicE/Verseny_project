import React from "react";
import ConcursDetails from "./ConcursDetails";

const ConcursDetailsContainer = () => {
  return (
    <ConcursDetails
      posterMain="https://pbs.twimg.com/media/FWw6puNWQAEhQ29?format=jpg&name=large"
      titleMain="Конкурс открытки «Герои сказок А. С. Пушкина поздравляют с Новым годом и Рождеством»"
      tabText="Гумманитарные науки"
      dataStartNumber="2"
      dataStartMonth="Фефраля"
      dataStartYear="2022"
      dataEndMonth=" Февраля"
      dataEndNumber="22"
      dataEndYear="2022"
      countUser={20}
      authorPhoto="https://avatars.githubusercontent.com/u/85344443?s=64&v=4"
      authorName="Ubisoft"
      authorCountOfSubscribers={100}
      descriptionText="Объявлен Всероссийский конкурс по истории «Диалог времен». Интеллектуальное соревнование будет проходить в три этапа в онлайн-формате. 
          Талантливые старшеклассники могут заработать          своим умом от 100 до 250 тысяч рублей. 
          До 26 декабря идет регистрация на Всероссийский           конкурс по истории «Диалог времен» для учеников           8-11 классов. 
          Проект посвящен 350-летию со дня рождения           императора Петра I, поэтому задания связаны с           периодом его правления. Участие в конкурсе          бесплатное!"
    />
  );
};

export default ConcursDetailsContainer;