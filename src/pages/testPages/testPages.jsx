import React, { useState } from "react";
import TabsCustom from "../../Components/TabsCustom/TabsCustom";

const TestPages = () => {

  const data = [
    {name: 'Конкурсы',to: '/'},
    {name: 'Привет',to: '/в'}
  ]



  return (
    <div>
      <TabsCustom data={data}/>
    </div>
  );
};

export default TestPages;
