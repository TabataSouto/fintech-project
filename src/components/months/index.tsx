import MonthButton from "../monthButton";

function Months() {
  return (
    <section className="flex">
      <MonthButton n={-2} />
      <MonthButton n={-1} />
      <MonthButton n={0} />
    </section>
  );
}

export default Months;
