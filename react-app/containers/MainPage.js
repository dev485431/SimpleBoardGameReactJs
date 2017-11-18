import React from "react"
import {connect} from "react-redux"

import Alerts from "../components/Alerts"
import {removeAlert} from "../actions/alerts"

class MainPage extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {alerts, removeAlert} = this.props;

    return (
      <div>
        <div className="row">
          <Alerts alerts={alerts} clearAlert={removeAlert}/>
        </div>
        <div className="row">
          Content
        </div>
      </div>
    )
  }
}

export default connect(state => {
    return {
      alerts: state.alerts
    }
  },

  dispatch => {
    return {
      removeAlert: (err) => {
        dispatch(removeAlert(err))
      }
    }
  })(MainPage);

MainPage.propTypes = {
  alerts: React.PropTypes.arrayOf(React.PropTypes.string),
  removeAlert: React.PropTypes.func.isRequired
};