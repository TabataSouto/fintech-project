import React from "react";
import DateRange from "../dateRange";
import Months from "../months";
import { useData } from "../../context/dataContext";

function Header() {
  const { title } = useData();

  return (
    <header className="mb">
      <div className="daterange mb">
        <DateRange />
        <h1 className="box bg-3">{title}</h1>
      </div>
      <Months />
    </header>
  );
}

export default Header;
