var React = require('react');
var ReactRouter = require('react-router');

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var history = ReactRouter.hashHistory;

var Main = require('../components/Main.jsx');
var Home = require('../components/Home.jsx');
var PromptContainer = require('../containers/PromptContainer.jsx');
var BattleContainer = require('../containers/BattleContainer.jsx');

function handleUsername (username) {
  // => /battle/:playerOne => /battle/:playerOne/:playerTwo
  if (!this.props.routeParams.playerOne) {
    history.push(`/battle/${username}`);
  } else {
    history.push(`/battle/${this.props.routeParams.playerOne}/${username}`);
  }
}

function getPlayerUsernames() {
  return [this.props.routeParams.playerOne, this.props.routeParams.playerTwo];
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
          <IndexRoute startOver={startOver} component={Home}/>
          <Route path='battle' header="Player One" setUsername={handleUsername} component={PromptContainer}/>
          <Route path='battle/:playerOne' header="Player Two" setUsername={handleUsername} component={PromptContainer}/>
          <Route path='battle/:playerOne/:playerTwo'
                  getPlayerUsernames={getPlayerUsernames} startOver={startOver}
                  component={BattleContainer}/>
        </Route>
      </Router>
    );
  }

});

module.exports = <Routes/>;
