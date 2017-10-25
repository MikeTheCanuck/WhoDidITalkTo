// Encounter.js

import React, {Component} from 'react';

// This is the repeating element that displays one or more objects in the Timeline, one per encounter
class Encounter extends Component {
    render() {
      
      const {encounter} = this.props; // ES6 desctructuring aka replaces `const encounter = this.props.encounter;`

      return (
        <div className="Encounter">
          <div className="Person-image">
            <img src={encounter.Photo} />
          </div>
          <div className="Encounter_data">
            <div className="Encounter-first-row">
              <div className="Person-name">
                Who: {encounter.Person}
              </div>
              <div className="Encounter-date">
                When: {encounter.Date}
              </div>
            </div>
            <div className="Encounter-second-row">
              <div className="Encounter-event">
                Where: {encounter.Event}
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
  