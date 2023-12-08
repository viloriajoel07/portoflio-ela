import Home from "./components/sections/Home.component";
import Header from "./components/header.component";
import Gallery from "./components/sections/Gallery.component";
import Footer from "./components/sections/Footer.component";

function App() {
  return (
    <main className="min-h-screen flex flex-col justify-center bg-black">
      <Header />
      <Home />
      <Gallery />
      <Footer />
    </main>
  );
}

export default App;
