var React = require('react');

var ConfirmBattle = require('../components/ConfirmBattle.jsx');
var githubHelpers = require('../utils/githubHelpers.jsx');

var ConfirmBattleContainer = React.createClass({

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function() {
    return {
      isLoading: true,
      playersInfo: []
    };
  },

  componentDidMount: function() {
    githubHelpers.getPlayersInfo([this.props.routeParams.playerOne, this.props.routeParams.playerTwo])
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
              confirmBattle={this.props.route.confirmBattle.bind(null, this.props.routeParams, this.state.playersInfo)}
      />
		);
	}
});

module.exports = ConfirmBattleContainer;
