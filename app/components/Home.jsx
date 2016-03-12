var React = require('react');

var transparentBg = require('../styles/index.jsx').transparentBg;

var Home = React.createClass({
	render: function () {
		return (
			<div className='jumbotron col-sm-12 text-center' style={transparentBg}>
				<h1>Github Battle</h1>
				<p className="lead">Some fancy motto</p>
        <button className="btn btn-lg btn-success" onClick={props.route.startOver}>Get Started</button>
			</div>
		);
	}
});

module.exports = Home;
