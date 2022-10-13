import "./App.css";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import CountDown from "./Components/CountDown";
import Footer from "./Components/Footer";
import Main from "./Components/Main";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {

    const prod = cart.filter((item) => {
      return (item.id === product.id);
    })[0];

    if (!prod) {
      product["quantity"] = 1;
      setCart([...cart, product]);
    } else {

      const updatedList = cart.map((item) => {

        if (item.id === product.id) {
          return {...item, quantity: item.quantity += 1}
        }
        return item

      })

      setCart(updatedList)
    }
      

    
    
  };

  // const [quantity, setQuantiy] = useState(2);
  const incrementQuantity = (product) => {
    const index = cart.indexOf(product);
    const cart2 = cart;
    cart2[index].quantity += 1;
    // console.log("cart2 no spread", cart2);
    // console.log("with spread", [...cart2]);
    setCart([...cart2]);
  };

  const decrementQuantity = (product) => {
    const index = cart.indexOf(product);
    const cart3 = cart;
    cart3[index].quantity -= 1;

    if (cart3[index].quantity === 0) {
      cart3[index].quantity = 1;
    }

    setCart([...cart3]);
  };

  return (
    <div className="App">
      <Header
        length={cart.length}
        cart={cart}
        incrementQuantity={incrementQuantity}
        decrementQuantity={decrementQuantity}
      />
      <Hero />
      <Main addToCart={addToCart} />
      <CountDown />
      <Footer />
    </div>
  );
}

export default App;
