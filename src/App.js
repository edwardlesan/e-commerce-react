import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Catalogue from "./components/Catalogue";
import Cart from "./components/Cart";
import Product from "./components/Product";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/:id" element={<Product />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
