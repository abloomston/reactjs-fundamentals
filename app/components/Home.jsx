var React = require('react');
var PropTypes = React.PropTypes;

var MainContainer = require('../containers/MainContainer.jsx');

var Home = props => (
	<MainContainer>
		<h1>Github Battle</h1>
		<p className="lead">Some fancy motto</p>
    <button className="btn btn-lg btn-success" onClick={props.route.startOver}>Get Started</button>
	</MainContainer>
);

Home.propTypes = {
  route: PropTypes.shape({
    startOver: PropTypes.func.isRequired
  })
};

module.exports = Home;
