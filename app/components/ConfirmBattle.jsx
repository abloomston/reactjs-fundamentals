var React = require('react');
var PropTypes = React.PropTypes;

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
      <form onSubmit={props.confirmBattle}>
        <div className="form-group col-sm-4 col-sm-offset-4">
          <button className="btn btn-block btn-success" type="submit">Battle!</button>
        </div>
      </form>

    </div>
  )
);

ConfirmBattle.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  confirmBattle: PropTypes.func.isRequired
};

module.exports = ConfirmBattle;
