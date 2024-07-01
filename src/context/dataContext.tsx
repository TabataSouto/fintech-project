import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import useFetch from "../hooks/useFetch";

export interface IVenda {
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
  start: string;
  final: string;
  title: string;
  setStart: Dispatch<SetStateAction<string>>;
  setFinal: Dispatch<SetStateAction<string>>;
  setTitle: Dispatch<SetStateAction<string>>;
}

const DataContext = createContext<IDataContext | null>(null);

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) throw new Error("useData precisa estar em DataContextProvider");
  return context;
};

// função que pega os dados de 30 dias atrás
const getDate = (n: number) => {
  const date = new Date();
  date.setDate(date.getDate() - n);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${year}-${month}-${day}`;
};

export const DataContextProvider = ({ children }: PropsWithChildren) => {
  const [start, setStart] = useState(getDate(30));
  const [final, setFinal] = useState(getDate(0));
  const [title, setTitle] = useState("Resumo");

  const { data, error, loading } = useFetch<IVenda[]>(
    `https://data.origamid.dev/vendas/?inicio=${start}&final=${final}`
  );

  const values = {
    data,
    error,
    loading,
    start,
    setStart,
    final,
    setFinal,
    title,
    setTitle,
  };

  return <DataContext.Provider value={values}>{children}</DataContext.Provider>;
};
