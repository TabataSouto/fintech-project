import { IVenda } from "../../context/dataContext";

function SaleItem({ venda }: { venda: IVenda }) {
  return (
    <div className="sale box">
      <a href="" style={{ fontFamily: "monospace" }}>
        {venda.id}
      </a>
      <div>{venda.nome}</div>
      <div>
        {parseFloat(venda.preco).toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </div>
    </div>
  );
}

export default SaleItem;
