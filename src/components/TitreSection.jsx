import { AiOutlineCaretDown } from "react-icons/ai";
import { useState } from "react";
import "./titre-section.css";
const TitreSection = ({ nomcat, sendValueToParent, fond }) => {
  const [open, setOpen] = useState(true);

  const toggleButton = () => {
    {
      setOpen(!open);
      sendValueToParent(open);
      console.log(open);
    }
  };
  console.log("bg-" + fond);
  return (
    <div
      className={`titre-section flex flex-row ${"bg-"+fond} bg-cover bg-right m-auto place-content-between items-center`}
      style={{ height: "100px" }}
    >
      <h2 className="titre h-16 flex justify-center items-center text-2xl text-rouge-pale ml-4 text-4xl">
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
// ${"bg-"+fond}
