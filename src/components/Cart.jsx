import { Link } from "react-router-dom";
import styled from "styled-components";

const CartMain = styled.div`
  color: black;
  background-color: gray;
`;

const Cart = () => {
  return (
    <CartMain>
      <h1>The cart page!</h1>
      <br />
      <Link to="/">Home</Link>
    </CartMain>
  );
};

export default Cart;
