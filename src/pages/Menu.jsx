import SectionMenu from "../components/Section-menu";
import Header from "../components/Header";
import "./Menu.css";
import DBmenu from "../../DBMenu.js";

const Menu = () => {
  const liste = Object.keys(DBmenu).map((section, i) => {
    return <SectionMenu key={i} section={DBmenu[section]} />;
  });

  return (
    <section className="flex flex-col justify-center items-center">
      <Header />
      <h1 className="Titre-page mt-6 text-4xl">Mon Menu</h1>
      {liste}
    </section>
  );
};

export default Menu;
