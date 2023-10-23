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
    <div
      className="fiche-menu flex flex-col relative m-auto mt-6 items-center justify-center rounded-3xl shadow-2xl"
      style={{ width: "90%" }}
    >
      <div
        className="image relative flex items-start"
        style={{ width: "100%" }}
      >
        <img
          src={DBmenu.entree.items[0].img}
          alt={DBmenu.entree.items[0].nom}
          style={{ height: "20em" }}
          className="relative object-cover object-center justify-start items-center flex w-full h-full rounded-t-3xl"
        />
        <AiFillPlusCircle className="ajout absolute right-8 bottom-4 text-5xl" />
      </div>
      <div className="info-item relative flex flex-row h-16 items-center w-full place-content-between p-5">
        <p className="nom-item justify-start">{DBmenu.entree.items[0].nom}</p>
        <p className="prix justify-end">{DBmenu.entree.items[0].prix}</p>
      </div>
    </div>
  );
};
export default FicheMenu;
