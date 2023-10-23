import "./Header.css";
import MenuBurger from "./MenuBurger";
import logo from "/src/assets/alogo-4.svg";
const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <MenuBurger />
    </header>
  );
};
export default Header;
