import _ from "underscore"
import {
  SET_NEW_DICE_RESULT
} from "../constants/actionNames"

const defaultState = {
  currentResult: 1
};

export default function board(state = defaultState, action) {

  switch (action.type) {
    case SET_NEW_DICE_RESULT:
      return _.extend({}, state, {currentResult: action.newResult});
    default:
      return state
  }
}
