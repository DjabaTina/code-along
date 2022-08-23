// import React from "react";
// import Header from "./components/Header";
// import Button from "./components/Button";
// import { Image } from "./components/image";
import Navbar from "./components/Navbar";
// import Practice from "./components/Practice";
// import Form from "./components/Form";
// import Spinner from "./components/Spinner
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import Contact from "./components/Pages/Contact";
import TaskManager from "./components/TaskManager";
import ProductList from "./components/ProductList";
import About from "./components/Pages/About";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
