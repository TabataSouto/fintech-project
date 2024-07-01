import { useData } from "../../context/dataContext";
import SaleItem from "../../components/saleItem";

function Sales() {
  const { data } = useData();

  if (!data) return null;
  return (
    <ul>
      {data.map((venda) => (
        <li key={venda.id}>
          <SaleItem venda={venda} />
        </li>
      ))}
    </ul>
  );
}

export default Sales;
