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
      <div className="mainContent">
        <h1>Cart</h1>
        <CartBox cartItems={cartItems} setCartItems={setCartItems} itemArray={itemArray} setItemArray={setItemArray}></CartBox>
        <CheckoutButton cartItems={cartItems} setCartItems={setCartItems} itemArray={itemArray} setItemArray={setItemArray}></CheckoutButton>
      </div>
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
          <RemoveCartButton value={value} setValue={setValue} cartItems={cartItems} setCartItems={setCartItems} item={item} itemArray={itemArray} setItemArray={setItemArray}></RemoveCartButton>
          <CartImgBlock source={minusUrl} mathType={"subtract"} value={value} setValue={setValue} item={item} itemArray={itemArray} setItemArray={setItemArray} cartItems={cartItems} setCartItems={setCartItems}></CartImgBlock>
          <CartNumberInput value={value} setValue={setValue} item={item} itemArray={itemArray} setItemArray={setItemArray}></CartNumberInput>
          <CartImgBlock source={plusUrl} mathType={"add"} value={value} setValue={setValue} item={item} itemArray={itemArray} setItemArray={setItemArray} cartItems={cartItems} setCartItems={setCartItems}></CartImgBlock>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

const CheckoutButton = ({ setCartItems, setItemArray }) => {
  function handleCheckout() {
    setCartItems(0);
    setItemArray([]);
  }
  return (
    <div className="checkout">
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
};

const RemoveCartButton = ({ cartItems, setCartItems, item, itemArray, setItemArray }) => {
  function handleCart() {
    let modifiedItem = { ...item };
    for (let i = 0; i < itemArray.length; i++) {
      if (modifiedItem.id == itemArray[i].id) {
        let tempArray = [...itemArray];
        tempArray.splice(i, 1);
        setCartItems(cartItems - modifiedItem.amount);
        setItemArray(tempArray);
      }
    }
  }
  return <button onClick={handleCart}>Remove</button>;
};

const CartNumberInput = ({ item, itemArray }) => {
  let render = 1;
  for (let i = 0; i < itemArray.length; i++) {
    if (item.id == itemArray[i].id) {
      render = itemArray[i].amount;
    }
  }
  return <p>{render}</p>;
};

const CartImgBlock = ({ source, mathType, item, itemArray, setItemArray, cartItems, setCartItems }) => {
  function handleClick() {
    let newItem = item;
    for (let i = 0; i < itemArray.length; i++) {
      if (itemArray[i].id == newItem.id) {
        let newArray = [...itemArray];

        if (mathType == "subtract") {
          newItem.amount = newItem.amount - 1;
          setCartItems(cartItems - 1);
        } else if (mathType == "add") {
          newItem.amount = newItem.amount + 1;
          setCartItems(cartItems + 1);
        }

        newArray.splice(i, 1);
        if (newItem.amount != 0) {
          newArray.splice(i, 0, newItem);
        }

        setItemArray(newArray);
      }
    }
  }

  return <img onClick={handleClick} src={source} alt={mathType + " " + "button"} />;
};

CartCard.propTypes = {
  itemArray: PropTypes.array,
  setItemArray: PropTypes.func,
  cartItems: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  setCartItems: PropTypes.func,
  item: PropTypes.object,
};

CartBox.propTypes = {
  itemArray: PropTypes.array,
  setItemArray: PropTypes.func,
  cartItems: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  setCartItems: PropTypes.func,
};

CheckoutButton.propTypes = {
  setItemArray: PropTypes.func,
  setCartItems: PropTypes.func,
};

RemoveCartButton.propTypes = {
  itemArray: PropTypes.array,
  setItemArray: PropTypes.func,
  cartItems: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  setCartItems: PropTypes.func,
  item: PropTypes.object,
};

CartNumberInput.propTypes = {
  itemArray: PropTypes.array,
  item: PropTypes.object,
};

CartImgBlock.propTypes = {
  itemArray: PropTypes.array,
  setItemArray: PropTypes.func,
  item: PropTypes.object,
  source: PropTypes.string,
  mathType: PropTypes.string,
  cartItems: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  setCartItems: PropTypes.func,
};

export { Cart, CartCard, RemoveCartButton };
