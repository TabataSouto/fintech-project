import Header from "./components/header";
import SideNav from "./components/sidenav";
import Summary from "./pages/summary";

function App() {
  return (
    <section>
      <SideNav />
      <main>
        <Header />
      </main>
      <Summary />
    </section>
  );
}

export default App;
