import { Outlet, Link } from "react-router-dom";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
function Layout() {
  return (
    <div className="layout">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="productos">Productos</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
        </ul>
        <div className="logitos">
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="" alt="React logo" />
          </a>
        </div>
      </nav>

      <Outlet />
    </div>
  );
}

export default Layout;
