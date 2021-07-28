import React from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./components/homepage/homepage.component";
import Shop from "./components/shop/shop.component";
import Header from "./components/common/header/header.component";
import SignInAndSignUpPage from "./components/sign-in-and-sign-up/sign-in-and-sign-up.component";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={Shop} />
        <Route path="/signin" component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
