import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Homepage from './page/home'
import { Outlet, Route, Router, Routes } from 'react-router-dom'
import About from './page/about'
import Navbar from './components/navbar'
import Footer from './components/footer'
import ContactPage from './page/contact'
import LoginPage from './page/login'
import ProductBody from './page/products'
import ProductDetail from './page/productdetail'
import CartPage from './components/add_to_cart'

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((currentCart) => {
      const existingItem = currentCart.find((item) => item.id === product.id);

      if (existingItem) {
        return currentCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...currentCart, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) {
      removeFromCart(productId);
      return;
    }

    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const removeFromCart = (productId) => {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== productId)
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (

    <Routes>
      {/* //mainlayout */}
    <Route path='/' element ={<MainLayout cartCount={cartCount} addToCart={addToCart}/>} >
      <Route index element={<Homepage/>}/>
      <Route path='/home' element={<Homepage/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/products' element={<ProductBody/>}/>
      <Route path='/shop' element={<ProductBody/>}/>
      <Route path='/products/:id' element={<ProductDetail/>}/>
      <Route
        path='/cart'
        element={
          <CartPage
            cart={cart}
            cartCount={cartCount}
            updateQuantity={updateQuantity}
            removeFromCart={removeFromCart}
            clearCart={clearCart}
          />
        }
      />
      <Route path='/contact' element={<ContactPage/>}/>
    </Route>

    {/* login */}
    <Route path='/login' element={<LoginPage/>} />

    </Routes>

  );
}

export default App;

function MainLayout({ cartCount, addToCart }){
  return(
    <>
    <Navbar cartCount={cartCount}/>
    <Outlet context={{ addToCart }}/>
    <Footer/>
    </>
  )
}
