import App from "../App";
import ErrorPage from "./ErrorPage";
import { Cart } from "./Cart";
import { Homepage } from "./Homepage";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "cart/", element: <Cart /> },
    ],
  },
];

export default routes;
