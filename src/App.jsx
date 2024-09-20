import { Outlet } from "react-router-dom";
import { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState(0);
  const [itemArray, setItemArray] = useState([]);
  return <Outlet context={[cartItems, setCartItems, itemArray, setItemArray]}></Outlet>;
}

export default App;
