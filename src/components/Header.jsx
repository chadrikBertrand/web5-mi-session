import "./Header.css";
import MenuBurger from "./MenuBurger";
import logo from "/src/assets/logo.svg";
const Header = () => {
  return (
    <header className="h-full flex flex-row items-center place-content-between">
      <div className="logo">
        <img src={logo} alt="logo" className="m-auto w-full h-44 p-8" />
      </div>

      <MenuBurger />
    </header>
  );
};
export default Header;
