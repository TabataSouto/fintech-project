import React from "react";
import { IVenda } from "../../context/dataContext";
import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface ISaleDay {
  data: string;
  pago: number;
  processando: number;
  falha: number;
}

type Status = "pago" | "processando" | "falha";

const transformData = (data: IVenda[]): ISaleDay[] => {
  const days = data.reduce((acc: { [key: string]: ISaleDay }, item) => {
    const day = item.data.split(" ")[0];
    console.log(acc[day]);
    if (!acc[day]) {
      acc[day] = {
        data: day,
        pago: 0,
        falha: 0,
        processando: 0,
      };
    }

    acc[day][item.status] += +item.preco;
    return acc;
  }, {});

  return Object.values(days).map((day) => ({
    ...day,
    data: day.data.substring(5),
  }));
};

function Graphic({ data }: { data: IVenda[] }) {
  const transformedData = transformData(data);

  return (
    <section>
      <ResponsiveContainer height={400} width={"99%"}>
        <LineChart data={transformedData}>
          <XAxis dataKey="data" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="pago"
            stroke="#a36af9"
            strokeWidth={3}
          />
          <Line
            type="monotone"
            dataKey="processando"
            stroke="#fbcb21"
            strokeWidth={3}
          />
          <Line
            type="monotone"
            dataKey="falha"
            stroke="#000000"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </section>
  );
}

export default Graphic;
