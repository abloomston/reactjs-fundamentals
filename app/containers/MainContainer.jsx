var React = require('react');

var styles = require('../styles/index.jsx');

var MainContainer = props => (
  <div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
  {props.children}
  </div>
);

module.exports = MainContainer;
