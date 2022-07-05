import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Product from "./components/Product";
import data from "./data";
import HomeScreen from "./Pages/HomeScreen";
import ProductScreen from "./Pages/ProductScreen";

function App() {
  return (

      <div className="grid-container">
        <header className="row">
          <div>
            <a className="brand" href="/"></a>
          </div>
          <div>
            <a href="/home">Home</a>
            <a href="/about">About</a>
            <a href="/services">Services</a>
            <a href="/shop">Shop</a>
            <a className="booknow" href="/booknow">
              Book now
            </a>
          </div>
        </header>
        <main>
        <BrowserRouter>
          <Route path="/product/:id" element={ProductScreen}></Route>
          <Route path="/" element={HomeScreen} exact></Route>

          <div className="container">
            <img className="large" src="./images/p.png" alt="product" />
            <div className="topleft">
              Always make room for beauty in your life
            </div>
            <div className="topleft1">
              At Prauge we are passionate about making people feel good while
              looking their best. Attending advanced education allows us to keep
              up with the latest trends and provide each guest with a unique &
              customizable result. For your convenience, Schedule your
              reservation today!e
            </div>
          </div>

          <br></br>
          <br></br>
          <div>
            <div className="topleft2">Services</div>
          </div>
          <br></br>
          <br></br>
          <div>
            <div className="row center">
              {data.product.map((product) => (
                <Product key={product._id} product={product}></Product>
              ))}
            </div>
          </div>
          </BrowserRouter>
        </main>
        <div>
        <footer className="row center">About Us</footer>
        </div>
      </div>

  );
}

export default App;
