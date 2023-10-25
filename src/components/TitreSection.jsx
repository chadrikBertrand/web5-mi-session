import { AiOutlineCaretDown } from "react-icons/ai";
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
    <div className="titre-section flex flex-row bg-fond-breuvage m-auto place-content-between items-center" style={{height:"100px"}}>
      <h2 className="h-16 flex justify-center items-center text-2xl font-cool text-rouge-pale ml-4 text-4xl">
        {nomcat}
      </h2>

      <AiOutlineCaretDown
        className={
          open ? "text-rouge-pale text-5xl rotate-270 mr-4" : "text-rouge-pale text-5xl mr-4"
        }
        onClick={toggleButton}
      />
    </div>
  );
};
export default TitreSection;
