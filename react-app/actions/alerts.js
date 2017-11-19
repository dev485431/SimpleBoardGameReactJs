import {ADD_ALERT, REMOVE_ALERT} from "../constants/actionNames"


export function addAlert(alert) {
  return {
    type: ADD_ALERT,
    alert
  }
}

export function removeAlert(alert) {
  return {
    type: REMOVE_ALERT,
    alert
  }
}