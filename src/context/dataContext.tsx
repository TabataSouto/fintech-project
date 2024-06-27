import { PropsWithChildren, createContext, useContext } from "react";
import useFetch from "../hooks/useFetch";

interface IVenda {
  id: string;
  nome: string;
  preco: string;
  status: "pago" | "processando" | "falha";
  pagamento: "boleto" | "pix" | "cartao";
  data: string;
  parcelas: number | null;
}

interface IDataContext {
  data: IVenda[] | null;
  loading: boolean;
  error: string | null;
}

const DataContext = createContext<IDataContext | null>(null);

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) throw new Error("useData precisa estar em DataContextProvider");
  return context;
};

export const DataContextProvider = ({ children }: PropsWithChildren) => {
  const { data, error, loading } = useFetch<IVenda[]>(
    "https://data.origamid.dev/vendas"
  );
  const values = { data, error, loading };
  return <DataContext.Provider value={values}>{children}</DataContext.Provider>;
};
