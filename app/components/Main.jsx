var React = require('react');

var Main = props => (
	<div>
    <h1>This is Main</h1>
    {props.children}
  </div>
);

module.exports = Main;
