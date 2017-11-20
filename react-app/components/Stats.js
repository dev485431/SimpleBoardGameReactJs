import React from "react"
import _ from "underscore";
import {GAME_STATE_WON} from "../constants/const"

export default class Stats extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    const {diceThrowCount, averageResult} = this;
    const wasSuccessful = nextProps.gameState === GAME_STATE_WON;
    if ((this.props.gameState !== nextProps.gameState) && nextProps.shouldSaveStats) {
      this.props.saveStats({
        wasSuccessful,
        diceThrowCount,
        averageResult
      });
    }
  }

  render() {
    const {isVisible, gameState, diceThrowResults} = this.props;
    const resultsSum = _.reduce(diceThrowResults, (memo, result) => memo + result, 0);
    this.diceThrowCount = diceThrowResults.length || 1;
    this.averageResult = (resultsSum / this.diceThrowCount).toFixed(2);
    return (
      isVisible ? (
        <div>
          <h4>Game stats:</h4>
          <strong>Game state:</strong> {gameState} <br/>
          <strong>Number of dice throws:</strong> {this.diceThrowCount} <br/>
          <strong>Average result:</strong> {this.averageResult}
        </div>
      ) : null
    )
  }
}

Stats.defaultProps = {
  isVisible: false,
  gameState: 'N/A',
  diceThrowResults: [],
  shouldSaveStats: false,
  saveStats: _.noop
};

Stats.propTypes = {
  isVisible: React.PropTypes.bool.isRequired,
  gameState: React.PropTypes.string.isRequired,
  diceThrowResults: React.PropTypes.array.isRequired,
  shouldSaveStats: React.PropTypes.bool.isRequired,
  saveStats: React.PropTypes.func.isRequired
};
