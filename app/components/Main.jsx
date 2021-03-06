var React = require('react');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
require('../main.css');

var Main = props => (
	<div className='main-container'>
    <ReactCSSTransitionGroup
            transitionName="appear"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}>
      {React.cloneElement(props.children, {key: props.location.pathname})}
    </ReactCSSTransitionGroup>
  </div>
);

module.exports = Main;
