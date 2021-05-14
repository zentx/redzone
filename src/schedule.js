import React, { Component } from 'react';
import { Link } from "react-router-dom";
export default class Clients extends Component {

  constructor(props) {
    super();
    this.state = {tName: '', nHours: ''};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    this.setState({
    [event.target.name]: value
    });
  }


  render() {
      const value = this.state;
    return (
      <div>
        <h1>Create New Tasks</h1>
         <form>
          <div>
            <label for="tName">Task name:  </label>
            <input type="text" id="tName" name="tName" value={this.state.tName} onChange={this.handleChange} />
          </div>
          <div>
            <label for="nHours">Number of hours:  </label>
            <input type="number" id="nHours" name="nHours" value={this.state.nHours} onChange={this.handleChange}  />
          </div>
          <Link
          to={{
            pathname: "/",
            state: value
          }}
        >
          Submit
        </Link>
        </form>
      </div>
    );
  }
}