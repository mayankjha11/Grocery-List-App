import React, { Component } from "react";
import "./SearchItems.css";

class SearchItems extends Component {
  state = { value: "" };

  onChangeHandler = e => {
    this.setState({ value: e.target.value }, () => {
      this.props.searchItems(this.state.value);
    });
  }

  render() {
    return (
      <input
        type="text"
        placeholder="Filter items by name"
        name="name"
        onChange={ this.onChangeHandler }
        className="Search-Item-Input"
      />
    );
  }
}

export default SearchItems;
