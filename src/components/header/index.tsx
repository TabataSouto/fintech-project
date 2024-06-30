import React from "react";
import DateRange from "../dateRange";
import Months from "../months";

function Header() {
  return (
    <header className="mb">
      <div className="mb">
        <DateRange />
      </div>
      <Months />
    </header>
  );
}

export default Header;
