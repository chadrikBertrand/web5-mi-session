import PropTypes from "prop-types";
import FicheMenu from "./FicheMenu";
import TitreSection from "./TitreSection";
const SectionMenu = ({ section }) => {
  const liste = section.items.map((item, i) => {
    return <FicheMenu key={i} item={item} />;
  });
  return (
    <section className="w-11/12 m-auto mt-9">
      <TitreSection nomCat={section.nomCategorie} />
      {liste}
    </section>
  );
};
SectionMenu.propTypes = {
  section: PropTypes.object.isRequired,
};

export default SectionMenu;
