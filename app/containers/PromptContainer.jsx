var React = require('react');

var Prompt = require('../components/Prompt.jsx');

var PromptContainer = React.createClass({

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

    this.props.route.setUsername(this.props.routeParams, username);
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
