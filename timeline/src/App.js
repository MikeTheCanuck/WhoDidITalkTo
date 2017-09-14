import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Timeline</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

// TBD this might be redundant with the App class
class Timeline extends Component {
  render() {
    return (
      <div classname="Timeline">

      </div>
    );
  }
}

// This is the repeating element that displays one or more objects in the Timeline, one per encounter
class Encounter extends Component {
  render() {
    return (
      <div classname="Encounter">
        <div classname="Person-image">
          {/* TODO: insert appropriately parameterized <img> tag */}
        </div>
        <div classname="Encounter-data">
        {/* TBD this might be redundant with the Encounter-data-area class */}
        </div>
        <div classname="Encounter-navigation"></div>
        <hr />
      </div>
    );
  }
}

// This element nests inside the "Encounter-data" div of the Encounter class
class EncounterData extends Component {
  render() {
    return (
      <div classname="Encounter-data-area">
        <div classname="Person-name"></div>
        <div classname="Encounter-date"></div>
        <div classname="Encounter-event"></div>
      </div>
    );
  }
}
