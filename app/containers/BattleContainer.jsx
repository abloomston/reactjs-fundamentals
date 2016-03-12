var React = require('react');
var PropTypes = React.PropTypes;

var Battle = require('../components/Battle.jsx');
var githubHelpers = require('../utils/githubHelpers.jsx');

var BattleContainer = React.createClass({

  propTypes: {
    route: PropTypes.shape({
      getPlayerUsernames: PropTypes.func.isRequired,
      startOver: PropTypes.func.isRequired
    })
  },

  getInitialState: function() {
    return {
      battleState: 'Loading', // Loading -> Confirming -> Results
      playersInfo: [],
      results: []
    };
  },

  componentDidMount: function() {
    if (this.state.battleState == 'Loading') {
      githubHelpers.getPlayersInfo(this.props.route.getPlayerUsernames.call(this))
        .then(function(infos) {
          this.setState({
            battleState: 'Confirming',
            playersInfo: infos
          });
        }.bind(this));
    }
  },

  confirmBattle: function() {
    this.setState({
      battleState: 'Battling'
    });
    // TODO replace timeout with actual calculation
    setTimeout(function () {
      this.setState({
        battleState: 'Results',
        results: [
          {
            label: 'Tie',
            score: 1
          },
          {
            label: 'Tie',
            score: 1
          }
        ]
      });
    }.bind(this), 3000);
  },

	render: function() {
		return (
			<Battle
              battleState={this.state.battleState}
              playersInfo={this.state.playersInfo}
              results={this.state.results}
              confirmBattle={this.confirmBattle}
              startOver={this.props.route.startOver}
      />
		);
	}
});

module.exports = BattleContainer;
