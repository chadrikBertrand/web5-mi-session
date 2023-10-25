import "./menu-burger.css";
import { useState } from "react";
const MenuBurger = () => {
  const [open, setOpen] = useState(false);
  const toggleButton = () => {
    setOpen(!open);
    console.log(open);
  };
  return (
    <label className={"burger"} htmlFor="burger">
      <input type="checkbox" id="burger" />
      <span></span>
      <span></span>
      <span></span>
    </label>
  );
};
export default MenuBurger;
