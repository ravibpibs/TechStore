import "./App.css";
import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { initialSetup, initializeCart, initializeSingleProduct } from './actions/ProductActions'
import { useDispatch } from 'react-redux'


// components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import SideCart from './components/SideCart'

// pages
import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Error from "./pages/ErrorPage";
import Products from "./pages/ProductsPage";
import SingleProduct from "./pages/SingleProductPage";
import Contact from "./pages/ContactPage";
import Cart from "./pages/CartPage";

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initialSetup())
    dispatch(initializeCart())
    dispatch(initializeSingleProduct())
  }, [dispatch])

  return (
    <div>
      <Router>
        <Navbar />
        <Sidebar />
        <SideCart />
        <Switch>
          <Route exact path="/" ><Home /></Route>
          <Route exact path="/about" ><About /></Route>
          <Route exact path="/contact" ><Contact /></Route>
          <Route exact path="/products" ><Products /></Route>
          <Route exact path="/products/:id" ><SingleProduct /></Route>
          <Route exact path="/cart" ><Cart /></Route>
          <Route><Error /></Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
