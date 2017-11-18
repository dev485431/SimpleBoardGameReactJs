import {ADD_ALERT, REMOVE_ALERT} from "../constants/actionNames"


export function addAlert(error) {
  return {
    type: ADD_ALERT,
    error
  }
}

export function removeAlert(error) {
  return {
    type: REMOVE_ALERT,
    error
  }
}