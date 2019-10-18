import React, { Component } from "react";
import FontAwesome from "react-fontawesome";
import "./SearchBar.css";

class SearchBar extends Component {
  state = {
    value: ""
  };

  timeout = null;
  // ?the state is always an empty string hence we must work on the dosearch
  doSearch = e => {
    this.setState({ value: e.target.value });
    clearTimeout(this.timeout);

    this.timeout = setTimeout(() => {
      this.props.callback(this.state.value);
    }, 500);
    e.preventDefault();
  };

  render() {
    return (
      <div className="rmdb-searchbar">
        <div className="rmdb-searchbar-content">
          <FontAwesome className="rmdb-fa-search" name="search" size="2x" />
          <input
            type="text"
            className="rmdb-searchbar-input"
            placeholder="Search"
            onChange={this.doSearch}
            onBlur={this.doSearch}
            value={this.state.value}
          />
        </div>
      </div>
    );
  }
}

export default SearchBar;
