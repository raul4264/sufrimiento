import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer";

import Footer from "./components/Footer";
import Categorias from "./components/Categorias";

import Layout from "./components/Layout";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div>
      <Navbar />

      <Layout>
        <Hero />
        <Categorias />
      </Layout>

      <div className="app">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react mylogo" alt="React logo" />
        </a>
      </div>

      <div className="contenedor">
        {/* CardProductos */}
        <ItemListContainer />
      </div>
      <div className="ocho">
        <h2>The best quality</h2>
        <img className="ocho" src="./imagenes2/banner8.jpg" alt="algo" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
