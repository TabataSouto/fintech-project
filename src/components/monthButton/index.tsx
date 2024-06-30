import React, { CSSProperties } from "react";
import { useData } from "../../context/dataContext";

const monthName = (n: number) => {
  const date = new Date();

  // define o mês desejado de acordo com a variável passada.
  date.setMonth(date.getMonth() + n);
  // Intl = objeto de internalização que serve para pegar nomes, valores
  // de acordo com alguma linguagem, algum local

  /* Primeiro argumento informamos qual a lingua e o segundo um obejto
  com diversas propriedades que forem necessárias. long: informamos que
  não queremos o nome do mes abreviado*/
  return new Intl.DateTimeFormat("pt-BR", { month: "long" }).format(date);
};

const formatDate = (date: Date) => {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${year}-${month}-${day}`;
};

const style: CSSProperties = {
  padding: "var(--gap) var(--gap-s)",
  backgroundColor: "var(--color-3)",
  border: "none",
  borderRadius: "var(--gap)",
  color: "var(--color-2)",
  fontWeight: "600",
  textTransform: "capitalize",
};

function MonthButton({ n }: { n: number }) {
  const { setStart, setFinal } = useData();

  const setMonth = (n: number) => {
    const date = new Date();
    date.setMonth(date.getMonth() + n);
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    setStart(formatDate(firstDay));
    setFinal(formatDate(lastDay));
  };

  return (
    <button onClick={() => setMonth(n)} style={style}>
      {monthName(n)}
    </button>
  );
}

export default MonthButton;
