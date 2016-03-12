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
      playerInfo: []
    };
  },

  componentDidMount: function() {
    const query = this.props.location.query;
    githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
      .then(function(infos) {
        this.setState({
          isLoading: false,
          playerInfo: infos
        });
      }.bind(this));
  },

	render: function() {
		return (
			<ConfirmBattle
              isLoading={this.state.isLoading}
              playerInfo={this.state.playerInfo}
      />
		);
	}
});

module.exports = ConfirmBattleContainer;
