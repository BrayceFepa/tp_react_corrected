import './App.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import CountDown from './Components/CountDown';
import Footer from './Components/Footer';
import Main from './Components/Main';
import { useState } from 'react';

function App() {
  const [cartCount, setCartCount] = useState(0);
  return (
    <div className="App">
      <Header cartCount={cartCount} />
      <Hero />
      <Main cartCount={cartCount} setCartCount={setCartCount} />
      <CountDown />
      <Footer/>
    </div>
  );
}

export default App;
