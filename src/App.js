// import React from "react";
// import Header from "./components/Header";
// import Button from "./components/Button";
// import { Image } from "./components/Image";
// import Practice from "./components/Practice";
// import Form from "./components/Form";
// import Spinner from "./components/Spinner
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import TaskManager from "./pages/TaskManager";
import ProductList from "./pages/ProductList";
import About from "./pages/About";
import ProductDetail from "./pages/ProductDetail";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/task-manager" element={<TaskManager />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
