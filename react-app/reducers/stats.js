import _ from "underscore"
import {
  ADD_DICE_RESULT_TO_STATS,
  RESET_STATS
} from "../constants/actionNames"

const defaultState = {
  diceThrowResults: []
};

export default function stats(state = defaultState, action) {

  switch (action.type) {
    case ADD_DICE_RESULT_TO_STATS:
      const diceThrowResults = [...state.diceThrowResults, action.result];
      return _.extend({}, state, {diceThrowResults});
    case RESET_STATS:
      return _.extend({}, defaultState);
    default:
      return state
  }
}

