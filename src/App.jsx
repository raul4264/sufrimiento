import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./paginas/Home";
import About from "./paginas/About";
import NoPage from "./paginas/NoPage";
import Productos from "./paginas/Productos";
import Layout from "./paginas/Layout";
import Snickers from "./paginas/Snickers";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="productos" element={<Productos />} />
          <Route path="about" element={<About />} />
          <Route path="snickers" element={<Snickers />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

/**
 * 
 *      <div className="ocho">
        <h2>The best quality</h2>
        <img
          className="ocho"
          src="https://images.pexels.com/photos/8176112/pexels-photo-8176112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="algo"
        />
        <br />
        <a href="/home">ir a Home</a>
      </div>
 * 
 * 

 * 
 * 
 * 

 * 
 */
