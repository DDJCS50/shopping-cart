import { Link } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";
import { useState } from "react";
import "../styles/style.scss";

const HomeMain = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
`;

const Homepage = () => {
  return (
    <HomeMain>
      <NavBar></NavBar>
      <div className="mainContent">
        <div className="results">
          <p>Current Items For Sale</p>
        </div>
        <CardBox></CardBox>
      </div>
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
    padding-left: 12px;
  }
`;

const NavBar = () => {
  const [cartItems, setCartItems] = useState(4);

  return (
    <NavMain>
      <h1>Odinzon</h1>
      <div className="cartHolder">
        <Link to="/cart">
          <img src="#" alt="shopping cart" />
        </Link>
        <p>{cartItems}</p>
      </div>
    </NavMain>
  );
};

const CardBox = () => {
  const [itemArray, setItemArray] = useState(["item default here", "item", "item", "item", "item", "item"]);

  return (
    <div className="cardBox">
      <Card itemArray={itemArray} setItemArray={setItemArray} index={0}></Card>
      <Card itemArray={itemArray} setItemArray={setItemArray} index={1}></Card>
      <Card itemArray={itemArray} setItemArray={setItemArray} index={2}></Card>
      <Card itemArray={itemArray} setItemArray={setItemArray} index={3}></Card>
      <Card itemArray={itemArray} setItemArray={setItemArray} index={4}></Card>
      <Card itemArray={itemArray} setItemArray={setItemArray} index={5}></Card>
    </div>
  );
};

const Card = ({ itemArray, setItemArray, index }) => {
  return (
    <div className="card">
      <img src={itemArray[index].url} alt={itemArray[index]} />
      <div className="itemHolder">
        <h2>Item name and brief description</h2>
        <p>Rating: 5/5</p>
        <p>$599</p>
        <button>Add to cart</button>
      </div>
    </div>
  );
};

Card.propTypes = {
  itemArray: PropTypes.array,
  setItemArray: PropTypes.func,
  index: PropTypes.number,
};

export { Homepage, NavBar };
