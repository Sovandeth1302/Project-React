import { createContext, useState } from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Blog from './components/Pages/Blog';
import Shop from './components/Pages/Shop';
import Cart from './components/Pages/Cart';
import About from './components/Pages/About';
import Checkout from './components/Pages/Checkout';
import Contact from './components/Pages/Contact';
import Service from './components/Pages/Service';
import Home from './components/Pages/Home';
import Login from './components/Pages/Login';
import { UserProvider } from './components/Pages/UserContext';
export const CartContext = createContext();

function App() {
  const [cartItems, setCartItems] = useState([]);

  // Add product to cart
  const addToCart = (product) => {
    setCartItems((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  return (
    <UserProvider> 
    <CartContext.Provider value={{ cartItems, addToCart, setCartItems }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/services" element={<Service />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </CartContext.Provider>
    </UserProvider>
  );
}

export default App;
