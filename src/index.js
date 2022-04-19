import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./main.css";
import App from "./App";
import { Header } from "./Components/Header";
import { StarRating } from "./Exercises/StarRating";
import { Compounder } from "./Exercises/Compounder";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route to="/" element={<App />} />
        <Route to="/star-rating" element={<StarRating totalStars={10} />} />
        <Route to="/compounder" element={<Compounder />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

