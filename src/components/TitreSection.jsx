import { AiOutlineCaretDown, AiOutlineCaretRight } from "react-icons/ai";
import { useState } from "react";
const TitreSection = ({ nomcat }) => {
  const [open, setOpen] = useState(false);
  const toggleButton = () => {
    {
      console.log(open);
      setOpen(!open);
    }
  };
  return (
    <div className="titre-section flex flex-row bg-fond-breuvage justify-center items-center m-auto">
      <h2 className="h-16 flex justify-center items-center text-white text-2xl">
        {nomcat}
      </h2>

      <AiOutlineCaretDown
        className={
          open ? "text-white text-5xl rotate-270" : "text-white text-5xl"
        }
        onClick={toggleButton}
      />
    </div>
  );
};
export default TitreSection;
