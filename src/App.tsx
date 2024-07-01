import Header from "./components/header";
import SideNav from "./components/sidenav";
import { DataContextProvider } from "./context/dataContext";
import Sales from "./pages/sales";
import Summary from "./pages/summary";

function App() {
  return (
    <DataContextProvider>
      <section className="container">
        <SideNav />
        <main>
          <Header />
          <Summary />
          <Sales />
        </main>
      </section>
    </DataContextProvider>
  );
}

export default App;
