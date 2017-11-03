// EncounterList.js

import React, {Component} from 'react';
import Encounter from './Encounter';
// import _ from 'lodash';

class EncounterList extends Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     encounters: []
  //   };
  //   let encountersRef = this.props.db.database().ref('testencounters');
  //   encountersRef.on('value', snapshot => {
  //     this.getData(snapshot.val());
  //   });
  // }

  // getData(values){
  //   let encountersVal = values;
  //   let encounters = _(encountersVal)
  //                     .keys()
  //                     .map(encounterKey => {
  //                         let cloned = _.clone(encountersVal[encounterKey]);
  //                         cloned.key = encounterKey;
  //                         return cloned;
  //                     })
  //                     .value();
  //     this.setState({
  //       encounters: encounters
  //     });
  // }

  constructor(props){
    super(props);
    this.state = {
    encounterz: []
    }

    // let encountersRef = this.props.db.database().ref('testencounters');
    const encountersRef = this.props.db.database().ref('testencounters');
    
    // let _this = this;
    // encountersRef.on('value', function(snapshot) {
    //   console.log(snapshot.val());

    //   _this.setState({
    //     encounterz: snapshot.val(),
    //     loading: false
    //   });
    // });

    // this pattern copied from https://css-tricks.com/intro-firebase-react/
    encountersRef.on('value', (snapshot) => {
      let encounterz = snapshot.val();
      let newState = [];
      for (let encounter in encounterz) {
        newState.push({
          id: encounter,
          Person: encounterz[encounter].Name,
          Date: encounterz[encounter].Date,
          Event: encounterz[encounter].Event
        });
      }
      this.setState({
        encounterz: newState
      });
    });
  } // results in a list of encounterz objects pulled from the 'testencounters' firebase reference


  // TODO: convert encounterz from list to Array
  // TODO: send encounterz Array members as state to the Encounter component
  // TODO: refactor encounterz to the App component so it can be shared among all pages

  render() {
    const {encounters} = this.props; //ES6 destructuring aka replacing const encounters = this.props.encounters;

    return (
      <div className="encounters">
        <div className="line"></div>

      {/* Timeline item */}
      {this.state.encounterz.map((encounter) => {
        return (
          <Encounter encounter={encounter} />
        )
      }
      )}
      </div>            
    )
    // let encounterNodes = encounters.map((encounter) => {
    //   return (
    //     <div className="card">
    //       <div className="card-content">
    //         <Encounter encounter = {encounter.encounter} />
    //       </div>
    //     </div>
    //   )
    // });
    // return (
    //   <div>
    //     {encounterNodes}
    //   </div>
    // );
  }
}

export default EncounterList