var React = require('react');
var ReactRouter = require('react-router');

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var history = ReactRouter.hashHistory;

var Main = require('../components/Main.jsx');
var Home = require('../components/Home.jsx');
var PromptContainer = require('../containers/PromptContainer.jsx');
var ConfirmBattleContainer = require('../containers/ConfirmBattleContainer.jsx');

var Routes = React.createClass({

  handleUsername: function (routeParams, username) {
    // /battle => /battle/:playerOne => /battle/:playerOne/:playerTwo
    if (!routeParams.playerOne) {
      history.push(`/battle/${username}`);
    } else {
      history.push(`/battle/${routeParams.playerOne}/${username}`);
    }
  },

  render: function () {
    return (
      <Router history={history}>
        <Route path='/' component={Main}>
          <IndexRoute startPath='battle' component={Home}/>
          <Route path='battle' header="Player One" setUsername={this.handleUsername} component={PromptContainer}/>
          <Route path='battle/:playerOne' header="Player Two" setUsername={this.handleUsername} component={PromptContainer}/>
          <Route path='battle/:playerOne/:playerTwo' component={ConfirmBattleContainer}/>
        </Route>
      </Router>
    );
  }

});

module.exports = <Routes/>;
