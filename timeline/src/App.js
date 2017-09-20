import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    // TODO: pull in data - local at first, remotely once the data binding logic settles
    this.state = {
      encounters: [
        {
          "Date": "2017-08-17",
          "Person": "Bobbie Morse",
          "Event": "PDXWIT Summer Soiree",
          "Location": "",
          "Topics": "Going on vacation"
        },
        {
          "Date": "2017-08-31",
          "Person": "Pepper Potts",
          "Event": "Consciousness Hacking meetup",
          "Location": "",
          "Topics": ""
        },
        {
          "Date": "2017-08-06",
          "Person": "Benjamin Grimm",
          "Event": "High Church of Lean Coffee",
          "Location": "",
          "Topics": "we've met multiple times, had extended conversations"
        }
      ]
    }
  }

  renderEncounter(i) {
    return <Encounter value={this.state.encounters[i].Person} />;
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Timeline</h1>
        </div>
        <div className="Timeline">
          {this.renderEncounter(0)}
          {this.renderEncounter(1)}
          {this.renderEncounter(2)}
        </div>
      </div>
    );
  }
}

export default App;

// This is the repeating element that displays one or more objects in the Timeline, one per encounter
class Encounter extends Component {
  render() {
    return (
      <div className="Encounter">
        <div className="Person-image">
          {/* TODO: insert appropriately parameterized <img> tag */}
        </div>
        <div className="Encounter_data">
          <div className="Encounter-first-row">
            <div className="Person-name">
              Who: {this.props.value} {/* Testing for passing values from one component to another */}
            </div>
            <div className="Encounter-date">
              When: 2017-09-18
            </div>
          </div>
          <div className="Encounter-second-row">
            <div className="Encounter-event">
              Where: there
            </div>
          </div>
        </div>
        {/* <div className="Encounter-navigation">
          <button>></button>
        </div> */}
        <hr />
      </div>
    );
  }
}

var sampleEncounters = {
  encounters: [
      {
        "Date": "2017-08-17",
        "Person": "Bobbie Morse",
        "Event": "PDXWIT Summer Soiree",
        "Location": "",
        "Topics": "Going on vacation"
      },
      {
        "Date": "2017-08-31",
        "Person": "Pepper Potts",
        "Event": "Consciousness Hacking meetup",
        "Location": "",
        "Topics": ""
      },
      {
        "Date": "2017-08-06",
        "Person": "Benjamin Grimm",
        "Event": "High Church of Lean Coffee",
        "Location": "",
        "Topics": "we've met multiple times, had extended conversations"
      }
  ]
};
