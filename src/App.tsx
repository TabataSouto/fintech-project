import { BrowserRouter } from "react-router-dom";
import Header from "./components/header";
import SideNav from "./components/sidenav";
import { DataContextProvider } from "./context/dataContext";
import Sales from "./pages/sales";
import Summary from "./pages/summary";
import RoutesApp from "./routes";

function App() {
  return (
    <BrowserRouter>
      <DataContextProvider>
        <section className="container">
          <SideNav />
          <main>
            <Header />
            <RoutesApp />
          </main>
        </section>
      </DataContextProvider>
    </BrowserRouter>
  );
}

export default App;
