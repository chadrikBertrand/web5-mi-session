import "./menu-burger.css";
const MenuBurger = () => {
  return (
    <svg viewBox="0 0 150 100" width="50" height="50" className="menu-burger absolute ">
      <rect width="150" height="20" rx="10"></rect>
      <rect y="50" width="150" height="20" rx="10"></rect>
      <rect y="100" width="150" height="20" rx="10"></rect>
    </svg>
  );
};
export default MenuBurger;
