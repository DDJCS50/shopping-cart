import styled from "styled-components";
import { NavBar } from "./Homepage";

const CartMain = styled.div`
  color: darkgreen;
  width: 100%;
`;

const Cart = () => {
  return (
    <CartMain>
      <NavBar></NavBar>
      <h1>The cart page!</h1>
    </CartMain>
  );
};

export default Cart;
