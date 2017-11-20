import {ADD_ALERT, REMOVE_ALERT, CLEAR_ALERTS} from "../constants/actionNames"


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

export function clearAlerts() {
  return {
    type: CLEAR_ALERTS
  }
}
