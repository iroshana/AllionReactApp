import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import Navigation from "./common/Navigation";
import { Container } from "react-bootstrap";
import PageNotFound from "./PageNotFound";
import Footer from "./common/Footer";
import Order from "./order/OrderItemList";
import Login from "./login/Login";
import TodayOrders from "./order/TodayOrders";

class App extends Component {
  render() {
    return (
      <>
        <Navigation />
        <Container>
          <Switch>
            <Route exact path="/" component={HomePage}></Route>
            <Route exact path="/order" component={Order}></Route>
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/todayorder" component={TodayOrders}></Route>
            <Route component={PageNotFound} />
          </Switch>
        </Container>
        <Footer />
      </>
    );
  }
}

export default App;
