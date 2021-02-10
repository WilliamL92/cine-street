import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";

import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter } from "react-router-dom";
import Register from './register';
import Login from './login';
import ForgetPassword from './forgetPassword';
import SingleFilmPage from './singleFilmPage';
import Account from './account';
import Map from './map';
import ListMode from './listMode';
import ViewAllFilms from './viewAllFilms';


function Routes() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/viewAllFilms">
            <ViewAllFilms/>
          </Route>
          <Route path="/listMode">
            <ListMode/>
          </Route>
          <Route path="/map">
            <Map/>
          </Route>
          <Route path="/account">
            <Account/>
          </Route>
          <Route path="/singleFilmPage">
            <SingleFilmPage/>
          </Route>
          <Route path="/forgetPassword">
            <ForgetPassword/>
          </Route>
          <Route path="/register">
            <Register/>
          </Route>
          <Route path="/">
            <Login/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Routes;
