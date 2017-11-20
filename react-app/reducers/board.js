import _ from "underscore"
import {
  SET_FIELDS,
  SET_ACTIVE_FIELD_BY_NUMBER,
  MOVE_FORWARD,
  SET_GAME_STATE
} from "../constants/actionNames"
import {GAME_STATE_OPEN} from "../constants/const"

const defaultState = {
  activeFieldIndex: 0,
  gameState: GAME_STATE_OPEN,
  fields: []
};

export default function board(state = defaultState, action) {

  switch (action.type) {
    case SET_FIELDS:
      return _.extend({}, state, {fields: action.fields});
    case SET_ACTIVE_FIELD_BY_NUMBER:
      const activeField = _.find(state.fields, f => f.number === action.fieldNumber);
      return _.extend({}, state, {activeFieldIndex: activeField.index});
    case MOVE_FORWARD:
      const newActiveIndex = state.activeFieldIndex + action.moves;
      if (newActiveIndex >= state.fields.length) return _.extend({}, state, {activeFieldIndex: (state.fields.length - 1)});
      return _.extend({}, state, {activeFieldIndex: newActiveIndex});
    case SET_GAME_STATE:
      return _.extend({}, state, {gameState: action.state});
    default:
      return state
  }
}
