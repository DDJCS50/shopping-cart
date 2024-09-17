import { Link } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
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
  const [cartItems, setCartItems] = useState(0);
  return (
    <HomeMain>
      <NavBar cartItems={cartItems}></NavBar>
      <div className="mainContent">
        <div className="results">
          <p>Current Items For Sale</p>
        </div>
        <CardBox cartItems={cartItems} setCartItems={setCartItems}></CardBox>
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

const NavBar = ({ cartItems }) => {
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

const CardBox = ({ cartItems, setCartItems }) => {
  const [item1, error1] = useMyFetch("https://fakestoreapi.com/products/1");
  const [item2, error2] = useMyFetch("https://fakestoreapi.com/products/2");
  const [item3, error3] = useMyFetch("https://fakestoreapi.com/products/3");
  const [item4, error4] = useMyFetch("https://fakestoreapi.com/products/4");
  const [item5, error5] = useMyFetch("https://fakestoreapi.com/products/5");
  const [item6, error6] = useMyFetch("https://fakestoreapi.com/products/6");

  let itemArray = [item1, item2, item3, item4, item5, item6];

  return (
    <div className="cardBox">
      <Card item={itemArray[0]} cartItems={cartItems} setCartItems={setCartItems} error={error1}></Card>
      <Card item={itemArray[1]} cartItems={cartItems} setCartItems={setCartItems} error={error2}></Card>
      <Card item={itemArray[2]} cartItems={cartItems} setCartItems={setCartItems} error={error3}></Card>
      <Card item={itemArray[3]} cartItems={cartItems} setCartItems={setCartItems} error={error4}></Card>
      <Card item={itemArray[4]} cartItems={cartItems} setCartItems={setCartItems} error={error5}></Card>
      <Card item={itemArray[5]} cartItems={cartItems} setCartItems={setCartItems} error={error6}></Card>
    </div>
  );
};

const useMyFetch = (productUrl) => {
  const [item, setItem] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(productUrl)
      .then((res) => {
        if (res.status >= 400) {
          throw new Error("server error");
        }
        return res.json();
      })
      .then((json) => {
        setItem(json);
        setError(null);
        console.log(json);
      })
      .catch((error) => setError(error));
  }, [productUrl]);

  return [item, error];
};

const Card = ({ item, cartItems, setCartItems, error }) => {
  const [value, setValue] = useState(1);

  if (!item) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;

  return (
    <div className="card">
      <img src={item.image} alt={item.description} />
      <div className="itemHolder">
        <h2>{item.title}</h2>
        <p>
          Rating: {item.rating.rate}/5 Reviews: {item.rating.count}
        </p>
        <p>${item.price.toFixed(2)}</p>
        <div className="addItemBox">
          <AddCartButton value={value} setValue={setValue} cartItems={cartItems} setCartItems={setCartItems}></AddCartButton>
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
          let eventHolder = parseInt(event.target.value);
          setValue(eventHolder);
        } else setValue(1);
      }}
    />
  );
}

const AddCartButton = ({ cartItems, setCartItems, value, setValue }) => {
  function handleCart() {
    setCartItems(cartItems + value);
    setValue(1);
  }
  return <button onClick={handleCart}>Add to cart</button>;
};

Card.propTypes = {
  itemArray: PropTypes.array,
  index: PropTypes.number,
  cartItems: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  setCartItems: PropTypes.func,
  item: PropTypes.object,
  error: PropTypes.string,
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

NavBar.propTypes = {
  cartItems: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  setCartItems: PropTypes.func,
};

CardBox.propTypes = {
  cartItems: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  setCartItems: PropTypes.func,
};

AddCartButton.propTypes = {
  cartItems: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  setCartItems: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  setValue: PropTypes.func,
};

export { Homepage, NavBar };
