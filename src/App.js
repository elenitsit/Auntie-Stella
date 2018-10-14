import React, { Component } from 'react';
import './App.css';
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { Route, Switch, withRouter } from "react-router";
import MoreInfo from "./components/MoreInfo.js";
import Home from "./components/Home.js";
import Individual from "./components/Individual.js";
import Cards from "./components/Cards.js"
import { connect } from "react-redux";
import Themes from "./components/Themes.js"
import Grow from "./components/Grow.js"
import Rel from "./components/Rel.js"
import HIV from "./components/HIV.js"
class App extends Component {
  render() {
    return (


      <Switch>
       <Route exact path="/" render={() => <Home {...this.props} />} />
            <Route path="/more" render={props => <MoreInfo {...this.props} />} />
            <Route path= "/individual" render={() => <Individual {...this.props} />} />
            <Route path = "/nocode" render={() => <Cards {...this.props} />} />
            <Route path = "/themes" render = {() => <Themes {...this.props} />} />
            <Route path= "/grow" render={() => <Grow {...this.props} />} />
            <Route path = "/rel" render={() => <Rel {...this.props} />} />
            <Route path = "/hiv" render = {() => <HIV {...this.props} />} />
      </Switch>

    );
  }
}

export default withRouter(connect(state => state)(App));
