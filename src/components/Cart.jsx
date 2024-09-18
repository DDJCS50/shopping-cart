import styled from "styled-components";
import { NavBar } from "./Homepage";
import PropTypes from "prop-types";
import { useOutletContext } from "react-router-dom";

const CartMain = styled.div`
  color: darkgreen;
  width: 100%;
`;

const Cart = () => {
  const [cartItems, setCartItems] = useOutletContext();
  return (
    <CartMain>
      <NavBar cartItems={cartItems}></NavBar>
      <h1>The cart page!</h1>
    </CartMain>
  );
};

export default Cart;
