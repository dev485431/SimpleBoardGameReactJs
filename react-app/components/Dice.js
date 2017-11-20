import React from "react";
import _ from "underscore";
import {
  GAME_STATE_WON,
  GAME_STATE_LOST
} from "../constants/const"

export default class Dice extends React.Component {

  constructor(props) {
    super(props);
    _.bindAll(this, [
      'onDiceThrowClick'
    ]);
  }

  onDiceThrowClick() {
    const newResult = Math.floor(Math.random() * 6) + 1;
    this.props.onDiceThrow(newResult);
  }

  render() {
    const {currentResult, gameState, onTryAgain} = this.props;
    const tryAgainButton = gameState === GAME_STATE_WON || gameState === GAME_STATE_LOST ? (
      <button type="button" className="btn btn-sm btn-default" onClick={onTryAgain}>Try again</button>
    ) : null;
    const throwDiceBtnDisabled = gameState === GAME_STATE_WON || gameState === GAME_STATE_LOST;
    return (
      <div>
        <div className="dice">
          {currentResult}
        </div><br />
        <div className="btn-group-vertical">
          <button type="button" disabled={throwDiceBtnDisabled} className="btn btn-sm btn-primary" onClick={this.onDiceThrowClick}>Throw the dice</button>
          {tryAgainButton}
        </div>
      </div>
    );
  }
}

Dice.defaultProps = {
  currentResult: 1,
  onDiceThrow: _.noop,
  onTryAgain: _.noop,
  gameState: ''
};

Dice.propTypes = {
  currentResult: React.PropTypes.number.isRequired,
  onDiceThrow: React.PropTypes.func.isRequired,
  onTryAgain: React.PropTypes.func.isRequired,
  gameState: React.PropTypes.string.isRequired
};
