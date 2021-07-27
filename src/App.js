import React from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./components/homepage/homepage.component";
import Shop from "./components/shop/shop.component";
import "./App.css";
import Header from "./components/common/header/header.component";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
