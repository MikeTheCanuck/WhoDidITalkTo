import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NewEncounter extends Component {
  state = {
  fullname: '',
  date: '',
  event: '',
  location: '',
  topics: ''
  }

  /* TODO: research why initializing state variables doesn't have to be in the constructor(), 
     and if the same trick works for binding this in the constructor */
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    /* Takes the named control e.g. name="fullname"
       and sets the state variable with the same name
       to the value of the input submitted so far by the time this event fires */
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const itemsRef = this.props.db.database().ref('items');
    // record to be pushed has key-value pairs of "name of firebase field": "value of that field"
    const item = {
      Person: this.state.fullname,
      Date: this.state.date,
      Event: this.state.event,
      Location: this.state.location,
      Topics: this.state.topics
    }
    itemsRef.push(item);
    this.setState({
      fullname: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" 
               name="fullname"
               placeholder="What's their full name?"
               onChange={this.handleChange}
               value={this.state.fullname} /* without this, textbox doesn't clear on submit */ />
        <button>Add Encounter</button>
      </form>
    )
  }
}

export default NewEncounter