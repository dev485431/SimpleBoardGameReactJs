import React from "react"
import _ from "underscore";

export default class Field extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    const {isActive, specialAction} = this.props;
    if (!isActive && nextProps.isActive) specialAction();
  }

  render() {
    const {caption, number, isActive, isSpecial} = this.props;
    const className = `field ${isActive ? 'field--active' : ''} ${isSpecial ? 'field--special' : ''}`;
    return (
      <div className={className}>
        <span className="field__caption">{caption || number}</span>
      </div>
    );
  }
}

Field.defaultProps = {
  index: 0,
  caption: '',
  number: 1,
  isActive: 0,
  isSpecial: false,
  specialAction: _.noop
};

Field.propTypes = {
  index: React.PropTypes.number.isRequired,
  caption:  React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ]).isRequired,
  number: React.PropTypes.number,
  isActive: React.PropTypes.bool.isRequired,
  isSpecial: React.PropTypes.bool.isRequired,
  specialAction: React.PropTypes.func
};
