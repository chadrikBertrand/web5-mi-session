import SectionMenu from "../components/Section-menu";
import Header from "../components/Header";
import "./Menu.css";
import DBmenu from "../../DBMenu.js";
import IconPanier from "../components/iconPanier";

const Menu = () => {
  const liste = Object.keys(DBmenu).map((section, i) => {
    return <SectionMenu key={i} section={DBmenu[section]} />;
  });

  return (
    <section className="flex flex-col justify-center items-center">
      <Header />
      <h1 className="Titre-page mt-10 text-6xl font-cool text-orange-reg">Notre Menu</h1>
      {liste}
      <IconPanier />
    </section>
  );
};

export default Menu;
