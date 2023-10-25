import { AiOutlineCaretDown } from "react-icons/ai";
import { useState } from "react";
const TitreSection = ({ nomcat, sendValueToParent }) => {
  const [open, setOpen] = useState(true);

  const toggleButton = () => {
    {
      setOpen(!open);
      sendValueToParent(open);
      console.log(open);
    }
  };
  return (
    <div
      className="titre-section flex flex-row bg-fond-breuvage bg-cover bg-right m-auto place-content-between items-center"
      style={{ height: "100px" }}
    >
      <h2 className="h-16 flex justify-center items-center text-2xl font-cool text-rouge-pale ml-4 text-4xl">
        {nomcat}
      </h2>

      <AiOutlineCaretDown
        className={
          open
            ? "text-rouge-pale text-5xl rotate-270 mr-8"
            : "text-rouge-pale text-5xl mr-8"
        }
        onClick={toggleButton}
      />
    </div>
  );
};
export default TitreSection;