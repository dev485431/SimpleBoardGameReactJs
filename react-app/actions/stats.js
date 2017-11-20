import {
  ADD_DICE_RESULT_TO_STATS,
  RESET_STATS
} from "../constants/actionNames"
import axios from "axios"

export function addDiceResultToStats(result) {
  return {
    type: ADD_DICE_RESULT_TO_STATS,
    result
  };
}

export function resetStats() {
  return {
    type: RESET_STATS
  };
}

export function saveStats({wasSuccessful, diceThrowCount, averageResult}) {
  axios.post("/stats", {
    wasSuccessful,
    diceThrowCount,
    averageResult,
  })
    .then(function (data) {
      let stats = {
        id: data.data.id,
        wasSuccessful: data.data.wasSuccessful,
        diceThrowCount: data.data.diceThrowCount,
        averageResult: data.data.averageResult,
      };
      console.log(stats);
    })
    .catch(function (err) {
      console.error(err.response.data);
    })
}
