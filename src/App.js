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
    const updatedList = cart.map((item) => {

        if (item.id === product.id) {
          return {...item, quantity: item.quantity += 1}
        }
        return item

      })

      setCart(updatedList)
  };

  const decrementQuantity = (product) => {
    const updatedList = cart.map((item) => {

        if (item.id === product.id) {
          return {...item, quantity: item.quantity -= 1}
        }
        return item

      })

      setCart(updatedList)
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
