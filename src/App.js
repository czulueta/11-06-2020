import React from "react"
import {Link, Switch, Route} from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Products from "./Products"
import ProductDetail from "./ProductDetail"


function App() {
  return (
    <div>
      <nav className="nav-bar">  
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
      </nav>  
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route exact path="/products">
          <Products />
        </Route>
        <Route path="/products/:productId">
          <ProductDetail />
        </Route>
      </Switch>
    </div>

  );
}

export default App;
