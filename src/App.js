import { Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
import Footer from "./components/Footer";

import Book from "./Page/Book";
import About from "./Page/About";
import Menu from "./components/Menu";
import Pizza from "./Menus/Pizza";
import Burger from "./Menus/Burger";
import Chicken from "./Menus/Chicken";
import Egg from "./Menus/Egg";
import Noodles from "./Menus/Noodles";
import Icecream from "./Menus/Icecream";
import Sandwich from "./Menus/Sandwich";
import Pork from "./Menus/Pork";
import Menupage from "./Page/Menupage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} exact />

        <Route path="/book" element={<Book />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menupage />} />

        {/* Menu Routes */}
        <Route path="/pizza" element={<Pizza />} />
        <Route path="/burger" element={<Burger />} />
        <Route path="/chicken" element={<Chicken />} />
        <Route path="/egg" element={<Egg />} />
        <Route path="/noodles" element={<Noodles />} />
        <Route path="/icecream" element={<Icecream />} />
        <Route path="/sandwich" element={<Sandwich />} />
        <Route path="/pork" element={<Pork />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
