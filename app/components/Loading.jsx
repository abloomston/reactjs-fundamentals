var React = require('react');
var PropTypes = React.PropTypes;

var Loading = React.createClass({

  propTypes: {
    startText: PropTypes.string.isRequired,
    deltaText: PropTypes.string.isRequired,
    deltaRepeat: PropTypes.number.isRequired,
    repeatInterval: PropTypes.number.isRequired
  },

  getDefaultProps: function () {
    return {
      startText: 'Loading',
      deltaText: '.',
      deltaRepeat: 4,
      repeatInterval: 300
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

  startTimer: function (interval) {
    this.intervalId = setInterval(this.updateDeltaCount, interval);
  },

  killTimer: function () {
    clearInterval(this.intervalId);
    this.intervalId = undefined;
  },

  componentDidMount: function() {
    this.startTimer(this.props.repeatInterval);
  },

  componentWillReceiveProps: function (nextProps) {
    this.killTimer();
    this.startTimer(nextProps.repeatInterval);
  },

  componentWillUnmount: function() {
    this.killTimer();
  },

	render: function() {
		return (
			<div>{this.props.startText + this.props.deltaText.repeat(this.state.deltaCount)}</div>
		);
	}

});

module.exports = Loading;
