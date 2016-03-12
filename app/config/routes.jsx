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
  // => /battle/:playerOne => /battle/:playerOne/:playerTwo/confirm
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
  // => /battle/:playerOne/:playerTwo/results
  history.push({
    pathname: `/battle/${this.props.routeParams.playerOne}/${this.props.routeParams.playerTwo}/results`,
    state: {
      playersInfo: playersInfo
    }
  });
}

function startOver () {
  // => /battle
  history.push('/battle');
}

var Routes = React.createClass({

  render: function () {
    return (
      <Router history={history}>
        <Route path='/' component={Main}>
          <IndexRoute startPath='battle' component={Home}/>
          <Route path='battle' header="Player One" setUsername={handleUsername} component={PromptContainer}/>
          <Route path='battle/:playerOne' header="Player Two" setUsername={handleUsername} component={PromptContainer}/>
          <Route path='battle/:playerOne/:playerTwo/confirm'
                  getPlayerUsernames={getPlayerUsernames} confirmBattle={handleBattle} startOver={startOver}
                  component={ConfirmBattleContainer}/>
          <Route path='battle/:playerOne/:playerTwo/results' startPath='battle' component={BattleResultsContainer}/>
        </Route>
      </Router>
    );
  }

});

module.exports = <Routes/>;
