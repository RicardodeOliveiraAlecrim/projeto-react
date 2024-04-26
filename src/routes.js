import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from "./containers/Home";
import Users from "./containers/Users"


function Routes(){

 return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/users" exact component={Users} />
      </Switch>
    </Router>
 
 )
  
}

export default Routes