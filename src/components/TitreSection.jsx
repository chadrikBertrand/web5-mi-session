import { AiOutlineCaretDown } from "react-icons/ai";
const TitreSection = ({ nomcat }) => {
  return (
    <div className="titre-section flex flex-row bg-fond-breuvage justify-center items-center m-auto">
      <h2 className="h-16 flex justify-center items-center text-white text-2xl">
        {nomcat}
      </h2>
      <AiOutlineCaretDown className="text-white" />
    </div>
  );
};
export default TitreSection;
