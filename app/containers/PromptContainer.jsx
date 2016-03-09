var React = require('react');
var Prompt = require('../components/Prompt.jsx');

var PromptContainer = React.createClass({

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function () {
    return {
      username: ''
    }
  },

  handleUpdateUser: function (event) {
    this.setState({
      username: event.target.value
    });
  },

  handleSubmitUser: function (event) {
    event.preventDefault();
    const username = this.state.username;
    this.setState({
      username: ''
    });

    if (this.props.routeParams.playerOne) {
      this.context.router.push({
        pathname: '/battle',
        query: {
          playerOne: this.props.routeParams.playerOne,
          playerTwo: username
        }
      });
    } else {
      this.context.router.push(`/playerTwo/${username}`);
    }
  },

  render: function() {
    return (
      <Prompt
              header={this.props.route.header}
              username={this.state.username}
              onSubmitUser={this.handleSubmitUser}
              onUpdateUser={this.handleUpdateUser}
      />
    );
  }
});

module.exports = PromptContainer;
