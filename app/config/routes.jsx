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
var BattleResultsContainer = require('../containers/BattleResultsContainer.jsx');

var Routes = React.createClass({

  handleUsername: function (routeParams, username) {
    // /battle => /battle/:playerOne => /battle/:playerOne/:playerTwo/confirm
    if (!routeParams.playerOne) {
      history.push(`/battle/${username}`);
    } else {
      history.push(`/battle/${routeParams.playerOne}/${username}/confirm`);
    }
  },

  handleBattle: function (routeParams, playersInfo) {
    history.push({
      pathname: `/battle/${routeParams.playerOne}/${routeParams.playerTwo}/results`,
      state: {
        playersInfo: playersInfo
      }
    });
  },

  render: function () {
    return (
      <Router history={history}>
        <Route path='/' component={Main}>
          <IndexRoute startPath='battle' component={Home}/>
          <Route path='battle' header="Player One" setUsername={this.handleUsername} component={PromptContainer}/>
          <Route path='battle/:playerOne' header="Player Two" setUsername={this.handleUsername} component={PromptContainer}/>
          <Route path='battle/:playerOne/:playerTwo/confirm' confirmBattle={this.handleBattle} component={ConfirmBattleContainer}/>
          <Route path='battle/:playerOne/:playerTwo/results' startPath='battle' component={BattleResultsContainer}/>
        </Route>
      </Router>
    );
  }

});

module.exports = <Routes/>;
