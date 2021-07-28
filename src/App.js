import React from "react";
import { Switch, Route } from "react-router-dom";
import { auth } from "./firebase/firebase.utils";
import Homepage from "./components/homepage/homepage.component";
import Shop from "./components/shop/shop.component";
import Header from "./components/common/header/header.component";
import SignInAndSignUpPage from "./components/sign-in-and-sign-up/sign-in-and-sign-up.component";

import "./App.css";

class App extends React.Component {
  state = {
    currentUser: null,
  };

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={Shop} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
