import { useState } from "react";
import DateInput from "../dateInput";

function DateRange() {
  const [start, setStart] = useState("");
  const [final, setFinal] = useState("");

  return (
    <form className="box flex" onSubmit={(e) => e.preventDefault()}>
      <DateInput
        label="Início"
        value={start}
        onChange={({ target }) => setStart(target.value)}
      />
      <DateInput
        label="Final"
        value={final}
        onChange={({ target }) => setFinal(target.value)}
      />
    </form>
  );
}

export default DateRange;
