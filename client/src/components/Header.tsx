import style from "./Header.module.css"

export const Header = () => {
  return (
      <nav className={style.navbar}>
        <a href={"/"} className={style.title}>cDis<span className={style.accentColor}>PLON</span></a>
      </nav>
  );
};