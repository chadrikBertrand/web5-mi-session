import { Link } from "react-router-dom";
import "./Header.css";
import MenuBurger from "./MenuBurger";
import logo from "/src/assets/logo.svg";
import { useState } from "react";
const Header = () => {
  const [open, setOpen] = useState(false);
  const receiveChildValue = (value) => {
    setOpen(value);
    console.log(value);
  };

  return (
    <header className="h-full flex flex-row items-center place-content-between">
      <div className="logo">
        <img src={logo} alt="logo" className="m-auto w-full h-44 p-8" />
      </div>

      <MenuBurger sendValueToParent={receiveChildValue} />
      <div
        className="slider-menu absolute top-0 left-0 h-screen w-full z-50
      bg-white flex flex-col items-center justify-center text-4xl text-rouge-pale"
      >
        <Link to="/authentification" className="">
          Profile
        </Link>
        <Link to="/menu" className="">
          Menu
        </Link>
      </div>
    </header>
  );
};
export default Header;
