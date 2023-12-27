import style from "../components/Navbar.module.css";
function Navbar() {
  return (
    <div className={style.body}>
      <nav>
        <a>Logo</a>

        <li>
          <a>About</a>
        </li>
        <li>
          <a>Services</a>
        </li>
        <li>
          <a>Contact</a>
        </li>
      </nav>
    </div>
  );
}

export default Navbar;
