import React, { Component } from "react";

export default class KebabButton extends Component {
  state = {
    removeButtonModifier: "removeButton--hide"
  };

  toggleRemoveButton = () => {
    if (this.state.removeButtonModifier === "removeButton--hide") {
      this.setState({
        removeButtonModifier: "removeButton--show"
      });
    } else {
      this.setState({
        removeButtonModifier: "removeButton--hide"
      });
    }
  };

  removeItem = () => {
    this.props.removeHandler(this.props.id);
  };

  render() {
    return (
      <div className="kebabContainer">
        <button className="kebabButton" onClick={this.toggleRemoveButton} />
        <button
          className={`removeButton ${this.state.removeButtonModifier}`}
          onClick={this.removeItem}
        >
          Remove
        </button>
      </div>
    );
  }
}
