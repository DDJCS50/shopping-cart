import { Link } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";
import { useState } from "react";
import "../styles/style.scss";
import cartUrl from "../assets/cart-outline.svg";
import plusUrl from "../assets/plus.svg";
import minusUrl from "../assets/minus.svg";

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

  a {
    text-decoration: none;
    color: black;
  }

  img {
    width: 35px;
    height: 35px;
  }

  p {
    transform: translate(-22px, -20px);
    font-weight: bold;
    color: orange;
  }
`;

const NavBar = () => {
  const [cartItems, setCartItems] = useState(40);

  return (
    <NavMain>
      <Link to="/">
        <h1>Odin&apos;s Shop</h1>
      </Link>
      <div className="cartHolder">
        <Link to="/cart">
          <img src={cartUrl} alt="shopping cart" />
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
  const [value, setValue] = useState(1);

  return (
    <div className="card">
      <img src={itemArray[index].url} alt={itemArray[index]} />
      <div className="itemHolder">
        <h2>Item name and brief description</h2>
        <p>Rating: 5/5</p>
        <p>$599</p>
        <div className="addItemBox">
          <button>Add to cart</button>
          <ImgBlock source={minusUrl} mathType={"subtract"} value={value} setValue={setValue}></ImgBlock>
          <NumberInput value={value} setValue={setValue}></NumberInput>
          <ImgBlock source={plusUrl} mathType={"add"} value={value} setValue={setValue}></ImgBlock>
        </div>
      </div>
    </div>
  );
};

const ImgBlock = ({ source, mathType, value, setValue }) => {
  function handleClick() {
    let holder = value;

    if (mathType == "subtract") {
      holder--;
      if (holder > 0) {
        setValue(holder);
      }
    } else if (mathType == "add") {
      holder++;
      if (holder < 11) {
        setValue(holder);
      }
    }
  }

  return <img onClick={handleClick} src={source} alt="minus" />;
};

function NumberInput({ value, setValue }) {
  return (
    <input
      type="text"
      value={value}
      onChange={(event) => {
        if (event.target.value > 0 && event.target.value < 11) {
          setValue(event.target.value);
        } else setValue(1);
      }}
    />
  );
}

Card.propTypes = {
  itemArray: PropTypes.array,
  setItemArray: PropTypes.func,
  index: PropTypes.number,
};

NumberInput.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  setValue: PropTypes.func,
};

ImgBlock.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  setValue: PropTypes.func,
  source: PropTypes.string,
  mathType: PropTypes.string,
};

export { Homepage, NavBar };
