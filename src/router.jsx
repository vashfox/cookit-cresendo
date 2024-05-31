import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Recipes from "./components/Recipes";
import Contact from "./components/Contact";
import About from "./components/About";
import Recipe from "./components/Recipe";

function Router() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Recipes />} />
      <Route path="/recipe/:id" element={<Recipe />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default Router;
