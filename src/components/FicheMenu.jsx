import { BsPlus } from "react-icons/bs";
import "./fiche-menu.css";

const FicheMenu = ({ item }) => {
  const { nom, img, prix, desc } = item;
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
          src={img}
          alt={nom}
          style={{ height: "20em" }}
          className="relative object-cover object-center justify-start items-center flex w-full h-full rounded-t-3xl"
        />
        <BsPlus className="ajout absolute right-8 bottom-4 text-5xl rounded-full bg-cyan-300" />
      </div>
      <div className="info-item relative flex flex-row h-16 items-center w-full place-content-between p-5">
        <p className="nom-item justify-start">{nom}</p>
        <p className="prix justify-end">{prix}</p>
      </div>
    </div>
  );
};
export default FicheMenu;
