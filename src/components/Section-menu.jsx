import PropTypes from "prop-types";
import FicheMenu from "./FicheMenu";
const SectionMenu = ({ section }) => {
  const liste = section.items.map((item, i) => {
    return <FicheMenu key={i} item={item} />;
  });
  return (
    <section className="w-11/12 m-auto ">
      <h2 className="h-16 flex justify-center items-center">
        {section.nomCategorie}
      </h2>
      {liste}
    </section>
  );
};
SectionMenu.propTypes = {
  section: PropTypes.object.isRequired,
};

export default SectionMenu;
