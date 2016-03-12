var React = require('react');
var PropTypes = React.PropTypes;

var UserDetails = require('./UserDetails.jsx');
var styles = require('../styles/index.jsx');

const BattleStates = ['Loading', 'Confirming', 'Results'];
const TitleMap = {
  'Loading': 'Loading',
  'Confirming': 'Confirm Players',
  'Results': 'Results'
};

var Battle = props => (
  <div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
  <h1>{TitleMap[props.battleState]}</h1>

  {props.battleState != 'Loading' &&
    <div className="col-sm-8 col-sm-offset-2">
      <div className="col-sm-6">
        <p className="lead">Player 1</p>
        <UserDetails score={props.battleState == "Results" ? props.scores[0] : undefined} info={props.playersInfo[0]}/>
      </div>
      <div className="col-sm-6">
        <p className="lead">Player 2</p>
        <UserDetails score={props.battleState == "Results" ? props.scores[1] : undefined}info={props.playersInfo[1]}/>
      </div>
    </div>}
  {props.battleState != 'Loading' &&
    <div className="col-sm-8 col-sm-offset-2">
      {props.battleState == 'Confirming' &&
        <div className="col-sm-12" style={styles.space}>
          <button type="button" className="btn btn-lg btn-success" onClick={props.confirmBattle}>Battle!</button>
        </div>
      }
        <div className="col-sm-12" style={styles.space}>
          <button type="button" className="btn btn-lg btn-danger" onClick={props.startOver}>Start Over</button>
        </div>
    </div>
  }
  </div>
);

Battle.propTypes = {
  battleState: PropTypes.oneOf(BattleStates).isRequired,
  playersInfo: PropTypes.array.isRequired,
  scores: PropTypes.array.isRequired,
  confirmBattle: PropTypes.func.isRequired,
  startOver: PropTypes.func.isRequired
};

module.exports = Battle;

