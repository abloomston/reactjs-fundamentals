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

function handleUsername (username) {
  // /battle => /battle/:playerOne => /battle/:playerOne/:playerTwo/confirm
  if (!this.props.routeParams.playerOne) {
    history.push(`/battle/${username}`);
  } else {
    history.push(`/battle/${this.props.routeParams.playerOne}/${username}/confirm`);
  }
}

function getPlayerUsernames() {
  return [this.props.routeParams.playerOne, this.props.routeParams.playerTwo];
}

function handleBattle (playersInfo) {
  history.push({
    pathname: `/battle/${this.props.routeParams.playerOne}/${this.props.routeParams.playerTwo}/results`,
    state: {
      playersInfo: playersInfo
    }
  });
}

var Routes = React.createClass({

  render: function () {
    return (
      <Router history={history}>
        <Route path='/' component={Main}>
          <IndexRoute startPath='battle' component={Home}/>
          <Route path='battle' header="Player One" setUsername={handleUsername} component={PromptContainer}/>
          <Route path='battle/:playerOne' header="Player Two" setUsername={handleUsername} component={PromptContainer}/>
          <Route path='battle/:playerOne/:playerTwo/confirm' confirmBattle={handleBattle} getPlayerUsernames={getPlayerUsernames} component={ConfirmBattleContainer}/>
          <Route path='battle/:playerOne/:playerTwo/results' startPath='battle' component={BattleResultsContainer}/>
        </Route>
      </Router>
    );
  }

});

module.exports = <Routes/>;
