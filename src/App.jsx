import Authentification from "./pages/Authentification";
import Layout from "./components/Layout";
import Panier from "./components/Panier";
import Facture from "./pages/Facture";
import Menu from "./pages/Menu";
import NumDeCommande from "./pages/NumDeCommande";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

const App = () => {
  const routes = [
    {
      index: true,
      element: <Navigate to="menu" replace />,
    },
    {
      path: "",
      element: <Layout />,
      children: [
        {
          path: "menu",
          index: true,
          element: <Menu />,
        },
        {
          path: "facture",
          element: <Facture />,
        },
        {
          path: "panier",
          element: <Panier />,
        },
        {
          path: "authentification",
          element: <Authentification />,
        },
        {
          path: "num-de-commande",
          element: <NumDeCommande />,
        },
      ],
    },
  ];
  return <RouterProvider router={createBrowserRouter(routes)} />;
};

export default App;
