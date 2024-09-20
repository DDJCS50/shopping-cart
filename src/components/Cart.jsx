import styled from "styled-components";
import { NavBar } from "./Homepage";
import PropTypes from "prop-types";
import { useOutletContext } from "react-router-dom";
import { useState } from "react";
import plusUrl from "../assets/plus.svg";
import minusUrl from "../assets/minus.svg";

const CartMain = styled.div`
  color: darkgreen;
  width: 100%;
`;

const Cart = () => {
  const [cartItems, setCartItems, itemArray, setItemArray] = useOutletContext();
  return (
    <CartMain>
      <NavBar cartItems={cartItems}></NavBar>
      <h1>The cart page!</h1>
      <CartBox cartItems={cartItems} setCartItems={setCartItems} itemArray={itemArray} setItemArray={setItemArray}></CartBox>
    </CartMain>
  );
};

const CartBox = ({ cartItems, setCartItems, itemArray, setItemArray }) => {
  return (
    <div className="cartBox">
      <CartCard item={itemArray[0]} cartItems={cartItems} setCartItems={setCartItems} itemArray={itemArray} setItemArray={setItemArray}></CartCard>
      <CartCard item={itemArray[1]} cartItems={cartItems} setCartItems={setCartItems} itemArray={itemArray} setItemArray={setItemArray}></CartCard>
      <CartCard item={itemArray[2]} cartItems={cartItems} setCartItems={setCartItems} itemArray={itemArray} setItemArray={setItemArray}></CartCard>
      <CartCard item={itemArray[3]} cartItems={cartItems} setCartItems={setCartItems} itemArray={itemArray} setItemArray={setItemArray}></CartCard>
      <CartCard item={itemArray[4]} cartItems={cartItems} setCartItems={setCartItems} itemArray={itemArray} setItemArray={setItemArray}></CartCard>
      <CartCard item={itemArray[5]} cartItems={cartItems} setCartItems={setCartItems} itemArray={itemArray} setItemArray={setItemArray}></CartCard>
    </div>
  );
};

const CartCard = ({ item, cartItems, setCartItems, itemArray, setItemArray }) => {
  const [value, setValue] = useState(1);

  return item ? (
    <div className="cartCard">
      <img src={item.image} alt={item.description} />
      <div className="itemHolder">
        <h2>{item.title}</h2>
        <p>
          Rating: {item.rating.rate}/5 Reviews: {item.rating.count}
        </p>
        <p>${item.price.toFixed(2)}</p>
        <div className="addItemBox">
          {/* <AddCartButton value={value} setValue={setValue} cartItems={cartItems} setCartItems={setCartItems} item={item} itemArray={itemArray} setItemArray={setItemArray}></AddCartButton> */}
          <ImgBlock source={minusUrl} mathType={"subtract"} value={value} setValue={setValue} item={item} itemArray={itemArray} setItemArray={setItemArray} cartItems={cartItems} setCartItems={setCartItems}></ImgBlock>
          <CartNumberInput value={value} setValue={setValue} item={item} itemArray={itemArray} setItemArray={setItemArray}></CartNumberInput>
          <ImgBlock source={plusUrl} mathType={"add"} value={value} setValue={setValue} item={item} itemArray={itemArray} setItemArray={setItemArray} cartItems={cartItems} setCartItems={setCartItems}></ImgBlock>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

function CartNumberInput({ value, setValue, item, itemArray, setItemArray }) {
  let render = 1;
  for (let i = 0; i < itemArray.length; i++) {
    if (item.id == itemArray[i].id) {
      render = itemArray[i].amount;
    }
  }
  return <p>{render}</p>;
}

const ImgBlock = ({ source, mathType, value, setValue, item, itemArray, setItemArray, cartItems, setCartItems }) => {
  function handleClick() {
    let newItem = item;
    for (let i = 0; i < itemArray.length; i++) {
      if (itemArray[i].id == newItem.id) {
        let newArray = [...itemArray];
        console.log(newArray);
        if (mathType == "subtract") {
          newItem.amount = newItem.amount - 1;
          setCartItems(cartItems - 1);
        } else if (mathType == "add") {
          newItem.amount = newItem.amount + 1;
          setCartItems(cartItems + 1);
        }
        console.log(newArray);
        newArray.splice(i, 1);
        console.log(newArray);
        newArray.splice(i, 0, newItem);
        console.log(newArray);
        setItemArray(newArray);
      }
    }
  }

  return <img onClick={handleClick} src={source} alt="minus" />;
};

export default Cart;
