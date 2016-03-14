var React = require('react');
var PropTypes = React.PropTypes;

var MainContainer = require('../containers/MainContainer.jsx');
var Loading = require('./Loading.jsx');
var UserDetails = require('./UserDetails.jsx');
var styles = require('../styles/index.jsx');

const BattleStates = ['Loading', 'Confirming', 'Battling', 'Results'];
const TitleMap = {
  'Loading': 'Loading',
  'Confirming': 'Confirm Players',
  'Battling': 'Battling',
  'Results': 'Results'
};

var Battle = function (props) {
  const loadingTitle = props.battleState == 'Loading' || props.battleState == 'Battling';
  const showUserInfo = props.battleState != 'Loading';

  const title = loadingTitle ?
    (<h1><Loading startText={TitleMap[props.battleState]}/></h1>) :
    (<h1>{TitleMap[props.battleState]}</h1>);

  const userInfo = showUserInfo ?
    (
      <div>
        <div className="col-sm-8 col-sm-offset-2">
          <div className="col-sm-6">
            <p className="lead">{props.battleState == "Results" ? props.results[0].label : "Player 1"}</p>
            <UserDetails score={props.battleState == "Results" ? props.results[0].score : undefined} info={props.playersInfo[0]}/>
          </div>
          <div className="col-sm-6">
            <p className="lead">{props.battleState == "Results" ? props.results[1].label : "Player 2"}</p>
            <UserDetails score={props.battleState == "Results" ? props.results[1].score : undefined} info={props.playersInfo[1]}/>
          </div>
        </div>
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
      </div>
    ) :
    (<div></div>);

  return (
    <MainContainer>
      {title}
      {userInfo}
    </MainContainer>
  );
};

Battle.propTypes = {
  battleState: PropTypes.oneOf(BattleStates).isRequired,
  playersInfo: PropTypes.array.isRequired,
  results: PropTypes.array.isRequired,
  confirmBattle: PropTypes.func.isRequired,
  startOver: PropTypes.func.isRequired
};

module.exports = Battle;
