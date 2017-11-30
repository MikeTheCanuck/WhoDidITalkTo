import React, { Component } from 'react';
import { Col, Row} from 'react-bootstrap';

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
    const itemsRef = this.props.db.database().ref('encounters/' + this.props.db.auth().currentUser.uid);
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
      fullname: '',
      date: '',
      event: '',
      location: '',
      topics: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Col>
          <Row>
            <input type="text" 
                  name="fullname"
                  placeholder="What's their full name?"
                  onChange={this.handleChange}
                  value={this.state.fullname} /* without this, textbox doesn't clear on submit */ />
          </Row>
          <Row>
            <input type="text" 
                  name="date"
                  placeholder="When did you meet?"
                  onChange={this.handleChange}
                  value={this.state.date} /* without this, textbox doesn't clear on submit */ />
          </Row>
          <Row>
            <input type="text" 
                  name="event"
                  placeholder="At what event (optional)?"
                  onChange={this.handleChange}
                  value={this.state.event} /* without this, textbox doesn't clear on submit */ />
          </Row>
          <Row>
            <input type="text" 
                  name="location"
                  placeholder="At what place (optional)?"
                  onChange={this.handleChange}
                  value={this.state.location} /* without this, textbox doesn't clear on submit */ />
          </Row>
          <Row>
            <textarea rows="3"
                  name="topics"
                  placeholder="What did you talk about (optional)?"
                  onChange={this.handleChange}
                  value={this.state.topics} /* without this, textbox doesn't clear on submit */ />
          </Row>
          <Row>
            <button>Add Encounter</button>
          </Row>
        </Col>
      </form>
    )
  }
}

export default NewEncounter