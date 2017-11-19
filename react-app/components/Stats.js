import React from "react"

export default class Stats extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {isVisible, diceThrowCount, diceThrowResults} = this.props;
    return (
      isVisible ? (
        <div>
          Number of dice throws: {diceThrowCount}
          Average result: {Math.floor(diceThrowResults / diceThrowCount)}
        </div>
      ) : null
    )
  }
}

Stats.defaultProps = {
  isVisible: false,
  diceThrowCount: 0,
  diceThrowResults: []
};

Stats.propTypes = {
  isVisible: React.PropTypes.bool.isRequired,
  diceThrowCount: React.PropTypes.number.isRequired,
  diceThrowResults: React.PropTypes.number.isRequired
};
