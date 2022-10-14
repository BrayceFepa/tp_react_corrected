import { useState } from "react";
import products from "./products";
import "./App.css";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import CountDown from "./Components/CountDown";
import Footer from "./Components/Footer";
import Main from "./Components/Main";

// on traintp branch
function App() {
  //useState for the cart
  const [cart, setCart] = useState([]);

  //useState for the products
  const [data, setData] = useState(products);

  //useState for the btn-className
  const [isSelected, setIsSelected] = useState(0);

  //function to add a product into the cart
  const addToCart = (product) => {
    const prod = cart.filter((item) => {
      return item.id === product.id;
    })[0];
    if (!prod) {
      product["quantity"] = 1;
      setCart([...cart, product]);
    } else {
      const updatedList = cart.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: (item.quantity += 1) };
        }
        return item;
      });
      setCart([...updatedList]);
    }
  };
  // on traintp branch
  

  //function to modufy products quantities
  //it takes as parameters the products on which we clicked and a number (1 or -1)
  const handleQuantity = (product, nbr) => { 
    const updatedList = cart
      .map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: (item.quantity += nbr) };
        }
        return item;
      }).filter((item) => item.quantity !== 0); //here I want to return only all the products with quantity different from 0
    
    setCart([...updatedList]); //then I update the products cart
  };



  //function to filter data according to their category
  const productsFilter = (id, category) => {
    if (category !== "All") { //I check first if the category os different from "All"

      //Then I create a new array which contains filtered products
      const filteredProducts = products.filter((item) => item.category === category);

      //And finally i update useState data with the filtered products
      setData([...filteredProducts]);

      //here is just to change buttons classname according to their id when we click on them
      setIsSelected(id);
    } else {
      setIsSelected(id);
      setData([...products]);
    }
  };

  return (
    <div className="App">
      <Header cart={cart} handleQuantity={handleQuantity} />
      <Hero />
      <Main
        data={data}
        productsFilter={productsFilter}
        addToCart={addToCart}
        isSelected={isSelected}
      />
      <CountDown />
      <Footer />
    </div>
  );
}

export default App;
