import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Homepage from "./page/home";
import { Outlet, Route, Router, Routes, useLocation } from "react-router-dom";
import About from "./page/about";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import ContactPage from "./page/contact";
import LoginPage from "./page/login";
import Registerpage from "./page/Register";
import Dashboard from "./page/Dashboard";
import Product from "./page/Product";
import Orders from "./page/Orders";
import ProductBody from "./page/products";
import ProductDetail from "./page/productdetail";
import CartPage from "./components/add_to_cart";

function App() {
  const { pathname } = useLocation();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [pathname]);

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
      <Route
        path="/"
        element={<MainLayout cartCount={cartCount} addToCart={addToCart} />}
      >
        <Route index element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/about" element={<About />} />
<<<<<<< HEAD
        <Route path="/produsts" element={<ProductBody />} />
=======
        <Route path="/products" element={<ProductBody />} />
        <Route path="/shop" element={<ProductBody />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route
          path="/cart"
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
>>>>>>> 78b0e726dc4a66b8270a67ad81f99e9fd5afcb4d
        <Route path="/contact" element={<ContactPage />} />
      </Route>

      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<Registerpage />} />
      <Route path="/dashboard" element={<Dashboard />} />
<<<<<<< HEAD
      <Route path="/product" element={<Product />} />
=======
      <Route path="/admin/products" element={<Product />} />
      <Route path="/admin/orders" element={<Orders />} />
>>>>>>> 78b0e726dc4a66b8270a67ad81f99e9fd5afcb4d
      <Route path="/orders" element={<Orders />} />
    </Routes>
  );
}

export default App;

function MainLayout({ cartCount, addToCart }) {
  return (
    <>
      <Navbar cartCount={cartCount} />
      <Outlet context={{ addToCart }} />
      <Footer />
    </>
  );
}
