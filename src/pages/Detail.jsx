import { useLocation } from "react-router";

const Detail = () => {
  const location = useLocation();
  const { item } = location.state;
  //   console.log(item);
  return <h1>allo</h1>;
};
export default Detail;
