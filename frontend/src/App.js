import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./Pages/HomeScreen";
import ProductScreen from "./Pages/ProductScreen";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/product/:id" element={<ProductScreen />}></Route>
          <Route path="/" element={<HomeScreen />} exact></Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
