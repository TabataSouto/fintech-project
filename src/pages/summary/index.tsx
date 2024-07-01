import React from "react";
import { useData } from "../../context/dataContext";
import Graphic from "../../components/graphic";

function Summary() {
  const { data } = useData();

  if (!data) return null;
  return (
    <section>
      <div className="summary flex mb">
        <div className="box">
          <h2>Vendas</h2>
          <span>
            {data
              ?.filter(({ status }) => status !== "falha")
              .reduce((acc, item) => acc + +item.preco, 0)
              .toLocaleString("pt-br", { style: "currency", currency: "BRL" })}
          </span>
        </div>
        <div className="box">
          <h2>Recebido</h2>
          <span>
            {data
              ?.filter(({ status }) => status === "pago")
              .reduce((acc, item) => acc + +item.preco, 0)
              .toLocaleString("pt-br", { style: "currency", currency: "BRL" })}
          </span>
        </div>
        <div className="box">
          <h2>Processando</h2>
          <span>
            {data
              ?.filter(({ status }) => status === "processando")
              .reduce((acc, item) => acc + +item.preco, 0)
              .toLocaleString("pt-br", { style: "currency", currency: "BRL" })}
          </span>
        </div>
      </div>
      <div className="box mb">
        <Graphic data={data} />
      </div>
    </section>
  );
}

export default Summary;
