import React, { useEffect } from "react";
import DateRange from "../dateRange";
import Months from "../months";
import { useData } from "../../context/dataContext";
import { useLocation } from "react-router-dom";

function Header() {
  const { title, setTitle } = useData();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/") {
      setTitle("Resumo");
      document.title = "Fintech | Resumo";
    } else if (pathname === "/vendas") {
      document.title = "Fintech | Vendas";
      setTitle("Vendas");
    }
  });

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
