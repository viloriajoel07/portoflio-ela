import Home from "./components/sections/Home.component";
import Header from "./components/header.component";
import Gallery from "./components/sections/Gallery.component";

function App() {
  return (
    <main className="min-h-screen flex flex-col justify-center bg-black">
      <Header />
      <Home />
      {/* <Gallery /> */}
    </main>
  );
}

export default App;
