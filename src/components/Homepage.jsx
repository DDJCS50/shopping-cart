import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div>
      <h1>Hello from the home page!</h1>
      <p>So, how are you?</p>
      <hr />
      <h2>The link to the shopping cart page is here:</h2>
      <br />
      <Link to="cart">Cart</Link>
    </div>
  );
};

export default Homepage;
