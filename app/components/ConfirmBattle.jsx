var React = require('react');

function puke (object) {
  return <pre>{JSON.stringify(object, null, ' ')}</pre>
}

var ConfirmBattle = props => (
  props.isLoading ? (
	  <p>Loading</p>
  ) : (
    <div>
      <p>Confirm Battle</p>
      {puke(props)}
    </div>
  )
);

module.exports = ConfirmBattle;
