import productos from "../productos";
import Footer from "./Footer";
import "./Styles.css";

const Productos = () => {
  return (
    <div className="contenedorProductos">
      {productos.map((prod) => {
        return (
          <div key={prod.id} className="card">
            <img src={prod.image} alt={prod.title} />
            <h4>{prod.categoria}</h4>
            <h4>{prod.description}</h4>
            <h4>Precio: {prod.price}</h4>
            <button>Agregar</button>
          </div>
        );
      })}
      <div className="Productos-Footer">
        <Footer />
      </div>
    </div>
  );
};

export default Productos;
