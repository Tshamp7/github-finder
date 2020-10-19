import React, { Component } from "react";
import PropTypes from "prop-types";

class Search extends Component {
  state = {
    text: "",
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired,
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    // e.target.name will populate the correct input field name for state.
  };

  onSubmit = e => {
    if (this.state.text === "") {
      e.preventDefault();
      console.log("alert");
      this.props.setAlert("Please enter something", "Light");
    } else {
      e.preventDefault();
      this.props.searchUsers(this.state.text);
      this.setState({ text: "" });
    }
  };

  render() {
    const { showClear, clearUsers } = this.props;

    return (
      <div>
        <form onSubmit={this.onSubmit} className='form'>
          <input
            type='text'
            name='text'
            placeholder='Search Users...'
            value={this.state.text}
            onChange={this.onChange}
          />

          <input
            type='submit'
            value='Search'
            className='btn btn-dark btn-block'
          />
        </form>

        {showClear ? (
          <button className='btn btn-light btn-block' onClick={clearUsers}>
            Clear
          </button>
        ) : null}
      </div>
    );
  }
}

export default Search;
