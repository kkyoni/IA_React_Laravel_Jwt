import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Signin from "./Pages/Auth/Signin";
import Signup from "./Pages/Auth/Signup";
import ForgotPassword from "./Pages/Auth/ForgotPassword";
import PageNotFound from "./Pages/Error/PageNotFound";
import Home from "./Pages/Home/Home";
const ProjectRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Signin} />
        <Route path='/signup' component={Signup} />
        <Route path='/forgotPassword' component={ForgotPassword} />
        <Route path='/home' component={Home} />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
};
export default ProjectRoutes;
