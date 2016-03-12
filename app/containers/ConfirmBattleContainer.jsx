var React = require('react');

var ConfirmBattle = require('../components/ConfirmBattle.jsx');
var githubHelpers = require('../utils/githubHelpers.jsx');

var ConfirmBattleContainer = React.createClass({

  getInitialState: function() {
    return {
      isLoading: true,
      playersInfo: []
    };
  },

  componentDidMount: function() {
    githubHelpers.getPlayersInfo(this.props.route.getPlayerUsernames.call(this))
      .then(function(infos) {
        this.setState({
          isLoading: false,
          playersInfo: infos
        });
      }.bind(this));
  },

	render: function() {
		return (
			<ConfirmBattle
              isLoading={this.state.isLoading}
              playersInfo={this.state.playersInfo}
              confirmBattle={this.props.route.confirmBattle.bind(this, this.state.playersInfo)}
              startOver={this.props.route.startOver}
      />
		);
	}
});

module.exports = ConfirmBattleContainer;
