import { CgClose } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import AjoutPanier from "./AjoutPanier";

const Panier = () => {
  const navigation = useNavigate();
  const retour = () => {
    navigation("/menu");
  };
  return (
    <div className="fiche-detail flex flex-col items-center bg-white h-screen font-cool">
      <div className="entete bg-gris-fonce w-screen flex justify-center">
        <h2 className="text-4xl my-8 uppercase text-white tracking-wider">
          Panier
        </h2>
        <CgClose
          onClick={retour}
          className="absolute text-white text-6xl top-6 right-6"
        />
      </div>
      <div className="items-panier">
        <div className="item-panier flex flex-row w-screen my-6 items-center place-content-around">
          <p className="nom text-2xl w-1/3">
            Entrée de chips maison aux épices Boréales
          </p>
          <AjoutPanier />
          <p className="prix text-4xl">5,00$</p>
        </div>
      </div>
    </div>
  );
};
export default Panier;
