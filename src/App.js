import { Routes, Route } from "react-router-dom";
import { Header } from "./Components/Header";
import { Home } from "./Home";
import { StarRating } from "./Exercises/StarRating";
import { Compounder } from "./Exercises/Compounder";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/star-rating" element={<StarRating totalStars={10} />} />
        <Route path="/compounder" element={<Compounder />} />
      </Routes>
    </>
  );
};

export default App;
