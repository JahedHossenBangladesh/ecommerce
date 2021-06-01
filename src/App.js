import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Items from './Components/Items';
import Footer from './Components/Footer';
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import AddItem from './Components/AddItem';
import Cart from './Components/Cart';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Items />
          </Route>
          <Route path="addItem" component={AddItem} exact />
          <Route path="addCart" component={Cart} exact />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
