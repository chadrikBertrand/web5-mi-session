import { MdOutlineShoppingCart } from "react-icons/md";
import { useNavigate } from "react-router-dom";
const IconPanier = () => {
  const naviagte = useNavigate();

  const onClickHandler = () => {
    naviagte("/panier");
  };
  return (
    <div
      className="fixed flex justify-center items-center right-5 bottom-6 text-white bg-jaune-fonce rounded-full p-2 w-20 h-20 z-50"
      onClick={onClickHandler}
    >
      <MdOutlineShoppingCart className="text-4xl" />
    </div>
  );
};
export default IconPanier;
