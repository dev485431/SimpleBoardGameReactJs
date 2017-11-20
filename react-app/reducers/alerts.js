import {ADD_ALERT, REMOVE_ALERT, CLEAR_ALERTS} from "../constants/actionNames"
import _ from "underscore"

export default function alerts(state = [], action) {

  switch (action.type) {
    case ADD_ALERT:
      return [action.alert, ...state];
    case REMOVE_ALERT:
      return _.filter(state, el => el !== action.alert);
    case CLEAR_ALERTS:
      return [];
    default:
      return state
  }
}
