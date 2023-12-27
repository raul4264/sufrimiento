import style from "../components/Hero.module.css";
import Home from "../components/Home";
function Hero() {
  return (
    <div className={style.body}>
      <Home />

      <h1 className={style}></h1>
    </div>
  );
}

export default Hero;
