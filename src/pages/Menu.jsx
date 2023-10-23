import SectionMenu from "../components/Section-menu";
import Header from "../components/Header";
import "./Menu.css";
import DBmenu from "../../DBMenu.js";

const Menu = () => {
  const liste = Object.keys(DBmenu).map((section, i) => {
    return <SectionMenu key={i} section={DBmenu[section]} />;
  });

  return (
    <section className="flex flex-col">
      <Header />
      <h1 className="Titre-page">Mon Menu</h1>
      {liste}
    </section>
  );
};

export default Menu;
