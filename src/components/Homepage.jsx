import { Link } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";
import { useState } from "react";
import "../styles/style.scss";

const HomeMain = styled.div`
  width: 100%;
  height: 150vh;
  display: flex;
  flex-direction: column;
`;

const Homepage = () => {
  return (
    <HomeMain>
      <NavBar></NavBar>
      <h1>Hello from the home page!</h1>
      <p>So, how are you?</p>
      <hr />
      <h2>The link to the shopping cart page is here:</h2>
      <br />
      <Link to="cart">Cart</Link>
    </HomeMain>
  );
};

const NavMain = styled.div`
  color: black;
  background-color: gray;
  width: 100%;
  height: 6vh;
  position: static;
  top: 0;
  display: flex;
  h1 {
    margin-left: 12px;
  }
`;

const NavBar = () => {
  const [cartItems, setCartItems] = useState(4);

  return (
    <NavMain>
      <h1>Odinzon</h1>
      <div className="cartHolder">
        <img src="#" alt="shopping cart" />
        <p>{cartItems}</p>
      </div>
    </NavMain>
  );
};

// NavBar.propTypes = {
//   cartItems: PropTypes.number,
// };

export { Homepage, NavBar };
