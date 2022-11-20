import "./styles.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Main } from "./Main";
import { Review } from "./Review";
import { Mate } from "./Mate";
import { AboutComp } from "./AboutComp";
import { News } from "./News";
import { Contacts } from "./Contacts";
import { Calc } from "./Calc";
export function App() {
  return (
    <div className="App">
      <React.StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} exact />
            <Route path="/cart" element={<Review />} exact />
            <Route path="/mate" element={<Mate />} exact />
            <Route path="/about" element={<AboutComp />} exact />
            <Route path="/news" element={<News />} exact />
            <Route path="/contacts" element={<Contacts />} exact />
            <Route path="/calc" element={<Calc />} exact />
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
    </div>
  );
}

export default App;
