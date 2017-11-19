import {
  SET_FIELDS,
  SET_ACTIVE_FIELD_BY_NUMBER,
  MOVE_FORWARD,
  SET_GAME_STATE
} from "../constants/actionNames"

export function setFields(fields) {
  return {
    type: SET_FIELDS,
    fields
  };
}

export function setActiveFieldByNumber(fieldNumber) {
  return {
    type: SET_ACTIVE_FIELD_BY_NUMBER,
    fieldNumber
  };
}

export function moveForward(moves) {
  return {
    type: MOVE_FORWARD,
    moves
  };
}

export function setGameState(state) {
  return {
    type: SET_GAME_STATE,
    state
  };
}
