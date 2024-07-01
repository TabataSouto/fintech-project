import { NavLink } from "react-router-dom";
import { IVenda } from "../../context/dataContext";

function SaleItem({ venda }: { venda: IVenda }) {
  return (
    <div className="sale box">
      <NavLink to={`/vendas/${venda.id}`} style={{ fontFamily: "monospace" }}>
        {venda.id}
      </NavLink>
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
