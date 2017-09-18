import React, { Component } from 'react';
import './App.css';

class App extends Component {
  renderEncounter(i) {
    return <Encounter value={i} />;
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
            <div className="Person-name"></div>
            <div className="Encounter-date"></div>
          </div>
          <div className="Encounter-second-row">
            <div className="Encounter-event"></div>
          </div>
        </div>
        <div className="Encounter-navigation"></div>
        <hr />
      </div>
    );
  }
}
