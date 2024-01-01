import Footer from "./Footer";
import "./Styles.css";

function Home() {
  return (
    <div className="home contenedorHome">
      <img
        src="https://images.unsplash.com/photo-1608541737042-87a12275d313?q=80&w=2061&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      ></img>
      <Footer />
      <div className="texto-encima">
        <h1>
          123 Calle Ficticia, Ciudad Imaginaria, Provincia de la Imaginación,
          Código Postal: 12345, País Argentina.
        </h1>
      </div>
      <div className="centrado">Nike.Shop</div>
    </div>
  );
}

export default Home;
