// Encounter.js

import React, {Component} from 'react';

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
                Who: {this.props.valuePerson}
              </div>
              <div className="Encounter-date">
                When: {this.props.valueDate}
              </div>
            </div>
            <div className="Encounter-second-row">
              <div className="Encounter-event">
                Where: {this.props.valueEvent}
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
  
  export default Encounter
  