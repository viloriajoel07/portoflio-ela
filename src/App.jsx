import Home from "./components/sections/Home.component";
import Header from "./components/header.component";

function App() {
  return (
    <main className="min-h-screen flex flex-col justify-center bg-black">
      <Header />
      <Home />
    </main>
  );
}

export default App;
