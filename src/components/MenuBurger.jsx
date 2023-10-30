import "./menu-burger.css";
import { useState } from "react";
const MenuBurger = ({ sendValueToParent }) => {
  const [open, setOpen] = useState(false);
  const toggleButton = (e) => {
    e.preventDefault();
    setOpen(!open);
    sendValueToParent(open);
    // console.log(open);
    const burger = document.querySelector(".burger");
    burger.classList.toggle("animate");
  };

  return (
    <label
      className={`burger ${open ? "animate" : ""} z-50`}
      htmlFor="burger"
      onClick={toggleButton}
    >
      <input type="checkbox" id="burger" />
      <span></span>
      <span></span>
      <span></span>
    </label>
  );
};
export default MenuBurger;
