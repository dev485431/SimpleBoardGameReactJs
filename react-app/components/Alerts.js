import React from "react"

export default class Alerts extends React.Component {

  constructor(props) {
    super(props);
  }

  removeAlert(alert) {
    let self = this;
    setTimeout(function () {
      self.props.clearAlert(alert)
    }, 5000);
  }

  render() {
    let alerts = this.props.alerts.map((el, key) => {
      this.removeAlert(el);
      return <div key={key}>{el}</div>
    });
    return (
      alerts.length ? <div className="alert alert-danger">{alerts}</div> : <span/>
    )
  }
}

Alerts.propTypes = {
  alerts: React.PropTypes.arrayOf(React.PropTypes.string),
  clearAlert: React.PropTypes.func.isRequired
};