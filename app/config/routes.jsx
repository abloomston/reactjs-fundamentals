var React = require('react');
var ReactRouter = require('react-router');

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

var Main = require('../components/Main.jsx');
var Home = require('../components/Home.jsx');

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <Route path='/home' component={Home}/>
    </Route>
  </Router>
);

module.exports = routes;
