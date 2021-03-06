import { Routes, Route } from "react-router-dom";
import { Header } from "./Components/Header";
import { Home } from "./Home";
import Compounder from "./Exercises/Compounder";
import { Reducer } from "./Exercises/Reducer";
import { StarRating } from "./Exercises/StarRating";
import Budget from "./Exercises/Budget";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/star-rating" element={<StarRating totalStars={10} />} />
        <Route path="/compounder" element={<Compounder />} />
        <Route path="/reducer" element={<Reducer />} />
        <Route path="/budget" element={<Budget />} />
      </Routes>
    </>
  );
};

export default App;
