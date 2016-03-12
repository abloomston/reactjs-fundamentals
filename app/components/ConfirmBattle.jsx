var React = require('react');
var PropTypes = React.PropTypes;

var styles = require('../styles/index.jsx');

var PlayerInfo = props => (
  <div>{props.playerInfo.login}</div>
);

var ConfirmBattle = props => (
  props.isLoading ? (
	  <p>Loading</p>
  ) : (
    <div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
      <h1>Confirm Players</h1>
      <div className="col-sm-8 col-sm-offset-2">
        <div className="col-sm-6">
          <p className="lead">Player 1</p>
          <PlayerInfo playerInfo={props.playersInfo[0]}/>
        </div>
        <div className="col-sm-6">
          <p className="lead">Player 2</p>
          <PlayerInfo playerInfo={props.playersInfo[1]}/>
        </div>
      </div>
      <div className="col-sm-8 col-sm-offset-2">
        <div className="col-sm-12" style={styles.space}>
          <button type="button" className="btn btn-lg btn-success" onClick={props.confirmBattle}>Battle!</button>
        </div>
        <div className="col-sm-12" style={styles.space}>
          <button type="button" className="btn btn-lg btn-warning" onClick={props.startOver}>Start Over</button>
        </div>
      </div>
    </div>
  )
);

ConfirmBattle.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  confirmBattle: PropTypes.func.isRequired,
  startOver: PropTypes.func.isRequired
};

module.exports = ConfirmBattle;
