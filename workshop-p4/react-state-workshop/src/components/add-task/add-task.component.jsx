import React, { Component } from "react";
import PropTypes from "prop-types";

import AddImg from "../../assets/add.png";

class AddTask extends Component {
  state = {
    desc: "",
  };

  handleChange = (e) => {
    this.setState({ desc: e.target.value });
  };

  handleClick = () =>
    this.props.handleAdd({
      id: Date.now(),
      description: this.state.desc,
      done: false,
    });

  render() {
    return (
      <div className="row mt-3">
        <div className="col-md-10">
          <input
            className="form-control"
            type="text"
            onChange={this.handleChange}
          />
        </div>

        <div className="col-md-2">
          <img
            style={{ width: `30px` }}
            src={AddImg}
            alt="add"
            onClick={this.handleClick}
          />
        </div>
      </div>
    );
  }
}

AddTask.propTypes = {
  handleAdd: PropTypes.func,
};

export default AddTask;
