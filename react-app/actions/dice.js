import {SET_NEW_DICE_RESULT} from "../constants/actionNames";

export function setNewDiceResult(newResult) {
  return {
    type: SET_NEW_DICE_RESULT,
    newResult
  };
}
