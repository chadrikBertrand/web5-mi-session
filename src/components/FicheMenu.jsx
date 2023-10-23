import { AiFillPlusCircle } from "react-icons/ai";
import DBmenu from "../../DBMenu.js";
import "./fiche-menu.css";

const FicheMenu = () => {
  console.log(DBmenu.entree.items[0]);
  {
    /*
    const menu = Object.keys(data.menu).map(({nom,img,prix,desc}, i)=>{
        return FicheMenu key={i}

        .find te retourne suelement un élément 

        .filter te retroune un tableau d'element
    })
    */
  }
  return (
    <div className="fiche-menu flex flex-col justify-center relative">
      <div className="image relative">
        <img
          src={DBmenu.entree.items[0].img}
          alt={DBmenu.entree.items[0].nom}
          className="absolute object-fill"
          style={{ width: "21em" }}
        />
        <AiFillPlusCircle className="ajout absolute right-8 bottom-0 scale-150" />
      </div>
      <div className="info-item">
        <p className="nom-item">{DBmenu.entree.items[0].nom}</p>
        <p className="prix">{DBmenu.entree.items[0].prix}</p>
      </div>
    </div>
  );
};
export default FicheMenu;
