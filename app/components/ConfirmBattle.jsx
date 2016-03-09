var React = require('react');

var ConfirmBattle = props => (
  props.isLoading ? (
	  <p>Loading</p>
  ) : (
    <p>Confirm Battle</p>
  )
);

module.exports = ConfirmBattle;
