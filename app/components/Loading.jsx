var React = require('react');
var PropTypes = React.PropTypes;

const repeatInterval = 300;

var Loading = React.createClass({

  propTypes: {
    startText: PropTypes.string.isRequired,
    deltaText: PropTypes.string.isRequired,
    deltaRepeat: PropTypes.number.isRequired
  },

  getDefaultProps: function () {
    return {
      startText: 'Loading',
      deltaText: '.',
      deltaRepeat: 4
    };
  },

  getInitialState: function () {
    return {
      deltaCount: 0
    }
  },

  updateDeltaCount: function () {
    this.setState({
      deltaCount: (this.state.deltaCount + 1) % this.props.deltaRepeat
    });
  },

  componentDidMount: function() {
    this.intervalId = setInterval(this.updateDeltaCount, repeatInterval);
  },

  componentWillUnmount: function() {
    clearInterval(this.intervalId);
  },

	render: function() {
		return (
			<div>{this.props.startText + this.props.deltaText.repeat(this.state.deltaCount)}</div>
		);
	}

});

module.exports = Loading;
