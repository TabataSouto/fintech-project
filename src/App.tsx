import Header from "./components/header";
import SideNav from "./components/sidenav";
import { DataContextProvider } from "./context/dataContext";
import Summary from "./pages/summary";

function App() {
  return (
    <DataContextProvider>
      <section>
        <SideNav />
        <main>
          <Header />
        </main>
        <Summary />
      </section>
    </DataContextProvider>
  );
}

export default App;
