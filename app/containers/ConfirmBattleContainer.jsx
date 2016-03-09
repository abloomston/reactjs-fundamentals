var React = require('react');

var ConfirmBattle = require('../components/ConfirmBattle.jsx');

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
    // TODO fetch from github and update state
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
