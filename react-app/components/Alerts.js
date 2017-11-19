import React from "react"
import _ from 'underscore';

export default class Alerts extends React.Component {

  constructor(props) {
    super(props);
    _.bindAll(this, [
      'removeAlert'
    ]);
  }

  removeAlert(alert) {
    setTimeout(() => {
      this.props.clearAlert(alert)
    }, 2000);
  }

  render() {
    let alerts = this.props.alerts.map((el, key) => {
      this.removeAlert(el);
      return (
        <div key={key}><strong>{el}</strong></div>
      );
    });
    return (
      alerts.length ? (
        <div className="alert alert-info" role="alert">
          {alerts}
        </div>
      ): null
    )
  }
}

Alerts.propTypes = {
  alerts: React.PropTypes.arrayOf(React.PropTypes.string),
  clearAlert: React.PropTypes.func.isRequired
};