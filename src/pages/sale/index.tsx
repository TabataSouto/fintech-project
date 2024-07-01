import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { IVenda } from "../../context/dataContext";
import Loading from "../../components/loading";

interface ISaleWithoutID extends Omit<IVenda, "data"> {}

function Sale() {
  const { id } = useParams();
  const { data, loading } = useFetch<ISaleWithoutID>(
    `https://data.origamid.dev/vendas/${id}`
  );

  if (loading) return <Loading />
  if (!data) return null;
  return (
    <section>
      <div className="box mb">ID: {data.id}</div>
      <div className="box mb">Nome: {data.nome}</div>
      <div className="box mb">
        Preço:{" "}
        {parseFloat(data.preco).toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </div>
      <div className="box mb">Status: {data.status}</div>
      <div className="box mb">Pagamento: {data.pagamento}</div>
    </section>
  );
}

export default Sale;
