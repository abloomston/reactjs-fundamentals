var React = require('react');
var PropTypes = React.PropTypes;

var styles = require('../styles/index.jsx');

var Home = props => (
	<div className='jumbotron col-sm-12 text-center' style={styles.transparentBg}>
		<h1>Github Battle</h1>
		<p className="lead">Some fancy motto</p>
    <button className="btn btn-lg btn-success" onClick={props.route.startOver}>Get Started</button>
	</div>
);

Home.propTypes = {
  route: PropTypes.shape({
    startOver: PropTypes.func.isRequired
  })
};

module.exports = Home;
