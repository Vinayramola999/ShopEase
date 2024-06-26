import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./customer/pages/HomePage/HomePage";
import Product from "./customer/components/Product/Product";
import ProductDetails from "./customer/components/ProductDetails/ProductDetails";
import Cart from "./customer/components/Cart/Cart";
import Checkout from "./customer/components/Checkout/Checkout";
import Order from "./customer/components/Order/Order";
import OrderDetails from "./customer/components/Order/OrderDetails";
import Footer from "./customer/components/Footer/Footer";
import Navigation from "./customer/components/Navigation/Navigation";

function App() {
  
  return (
    <div className="">
      <div>
      <Navigation/>
          <div className="app-container">
            <div className="main-container">
              <Routes>
                <Route path="/" element={<HomePage></HomePage>}></Route>
                <Route path="/Product" element={<Product></Product>}></Route>
                <Route
                  path="/ProductDetails"
                  element={<ProductDetails />}
                ></Route>
                 <Route path="/login" element={<HomePage/>}></Route>
                 <Route path="/register" element={<HomePage />}></Route>
                <Route path="/Cart" element={<Cart />}></Route>
                <Route path="/Checkout" element={<Checkout />} />
                <Route path="/Order" element={<Order />} />
                <Route path="/OrderDetails" element={<OrderDetails />}></Route>
              </Routes>
            </div>
          </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
