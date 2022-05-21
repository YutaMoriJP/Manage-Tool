import { useState } from "react";

import Head from "next/head";
//Components
import Select from "../../components/Select";
//data
import { months } from "../../data/date";

const monthItems = months.map((month) => ({ value: month, text: month }));
const yearItems = [{ value: "2021", text: "2021" }];
const currentMonth = months[new Date().getMonth()];
const currentYear = new Date().getFullYear();

export default function () {
  const [{ Month, Year }, setDate] = useState(() => ({ Month: currentMonth + "", Year: currentYear + "" }));

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const key = event.target.name;
    const value = event.target.value;
    setDate((prevDate) => ({ ...prevDate, [key]: value }));
  };

  return (
    <>
      <Head>
        <title>Fitness - Management</title>
      </Head>
      <Select label="Year" items={yearItems} value={Year} onChange={handleChange} />
      <Select label="Month" items={monthItems} value={Month} onChange={handleChange} />
    </>
  );
}
