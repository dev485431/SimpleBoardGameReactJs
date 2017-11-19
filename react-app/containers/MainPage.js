import React from "react"
import {connect} from "react-redux"
import _ from "underscore";
import Alerts from "../components/Alerts"
import Field from "../components/Field"
import Dice from "../components/Dice"
import Stats from "../components/Stats"
import {addAlert, removeAlert} from "../actions/alerts"
import {setFields, setActiveFieldByNumber, moveForward, setGameState} from "../actions/board"
import {setNewDiceResult} from "../actions/dice"
import {
  NUMBER_OF_FIELDS,
  SPECIAL_FIELD_NUMBERS,
  GAME_STATE_WON,
  GAME_STATE_LOST,
  GAME_STATE_OPEN
} from "../constants/const"


class MainPage extends React.Component {

  constructor(props) {
    super(props);
    _.bindAll(this,
      'initializeGameBoard',
      'getSpecialFieldAction',
      'generateFieldsData',
      'getFields',
    )
  }

  componentDidMount() {
    this.initializeGameBoard();
  }

  initializeGameBoard() {
    this.props.setFields(this.generateFieldsData());
    this.props.setActiveFieldByNumber(1);
    this.props.setGameState(GAME_STATE_OPEN);
  }

  getSpecialFieldAction(fieldNumber) {
    const specialActions = {
      12: () => {
        this.props.addAlert('YOU LOOSE!');
        this.props.setGameState(GAME_STATE_LOST);
      },
      19: () => {
        this.props.setActiveFieldByNumber(11);
      },
      20: () => {
        this.props.addAlert('YOU WIN!');
        this.props.setGameState(GAME_STATE_WON);
      }
    };
    return _.has(specialActions, fieldNumber) ? specialActions[fieldNumber] : _.noop;
  }

  generateFieldsData() {
    const {activeFieldIndex} = this.props.board;
    const isSpecialField = (fieldNumber) => _.contains(SPECIAL_FIELD_NUMBERS, fieldNumber);
    const getFieldNumber = (index) => index + 1;
    const getCaption = (fieldIndex) => {
      if (fieldIndex === 0) return 'Start';
      else if (fieldIndex === (NUMBER_OF_FIELDS - 1)) return 'Finish';
      else return getFieldNumber(fieldIndex);
    };
    const fields = [];
    for (let i = 0; i < NUMBER_OF_FIELDS; i++) {
      const fieldNumber = getFieldNumber(i);
      fields.push({
          index: i,
          number: fieldNumber,
          caption: getCaption(i),
          isSpecial: isSpecialField(fieldNumber),
          isActive: (i === activeFieldIndex),
        }
      );
    }
    return fields;
  }

  getFields() {
    const {activeFieldIndex, fields} = this.props.board;
    return _.map(fields, (f, i) => (
      <Field key={i}
             index={f.index}
             number={f.number}
             caption={f.caption}
             isActive={f.index === activeFieldIndex}
             isSpecial={f.isSpecial}
             specialAction={this.getSpecialFieldAction(f.number)}
      />
    ));
  }

  render() {
    const {alerts, removeAlert, dice, onDiceThrow, board} = this.props;

    return (
      <div>
        <Alerts alerts={alerts} clearAlert={removeAlert}/>
        <div className="row">
          <div className="col-md-6">
            {this.getFields()}
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-6">
                <Dice currentResult={dice.currentResult}
                      onDiceThrow={onDiceThrow}
                      onTryAgain={this.initializeGameBoard}
                      gameState={board.gameState}/>
                </div>
                <div className="col-md-6">
                  <Stats diceThrowCount={} diceThrowResults={} isVisible={}/>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default connect(state => {
    return {
      alerts: state.alerts,
      board: state.board,
      dice: state.dice
    }
  },

  dispatch => {
    return {
      addAlert: (alert) => {
        dispatch(addAlert(alert))
      },
      removeAlert: (alert) => {
        dispatch(removeAlert(alert))
      },
      setFields: (fields) => {
        dispatch(setFields(fields))
      },
      setActiveFieldByNumber: (fieldNumber) => {
        dispatch(setActiveFieldByNumber(fieldNumber))
      },
      setGameState: (state) => {
        dispatch(setGameState(state));
      },
      onDiceThrow: (newResult) => {
        dispatch(setNewDiceResult(newResult));
        dispatch(moveForward(newResult));
      }
    }
  })(MainPage);

MainPage.propTypes = {
  alerts: React.PropTypes.arrayOf(React.PropTypes.string),
  board: React.PropTypes.object.isRequired,
  dice: React.PropTypes.object.isRequired,
  addAlert: React.PropTypes.func.isRequired,
  removeAlert: React.PropTypes.func.isRequired,
  setFields: React.PropTypes.func.isRequired,
  setGameState: React.PropTypes.func.isRequired,
  setActiveFieldByNumber: React.PropTypes.func.isRequired,
  onDiceThrow: React.PropTypes.func.isRequired
};
