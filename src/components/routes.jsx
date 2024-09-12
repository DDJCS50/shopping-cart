import App from "../App";
import ErrorPage from "./ErrorPage";
import Cart from "./Cart";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "cart/",
    element: <Cart />,
  },
];

export default routes;
