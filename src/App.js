import React, { Component } from 'react';
import './App.css';
import firebase from './firebase-config';
import EncounterList from './components/EncounterList';
import NewEncounter from './components/NewEncounter';

class App extends Component {
  state = {
    encounters: [],
  };

  /* Kyle advises this stage of the component lifecycle is preferable to the constructor stage, 
     to pull data from the data layer, as it enables the app to display skeletal UI while 
     the data is retrieved and properly formulated */
  componentDidMount() {
    this.fetchEncounters();
  }

  fetchEncounters = () => {
    // TODO: consolidate this and the NewEncounter component's declarations of the same object
    const itemsRef = firebase.database().ref('testencounters');

    itemsRef.on('value', (snapshot) => {
      console.log(snapshot.val());
      let encounterz = snapshot.val();
      let newState = [];
      for (let encounter in encounterz) {
        newState.push({
          id: encounter,
          Date: encounterz[encounter].Date,
          Person: encounterz[encounter].Person,
          Event: encounterz[encounter].Event,
          Location: encounterz[encounter].Location,
          Topics: encounterz[encounter].Topics
        });
      }
      this.setState({
        encounters: newState
      });
    });
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Timeline</h1>
        </div>
        <div className="NewEncounter">
          <NewEncounter db={firebase}/>
        </div>
        <div className="Timeline">
          <EncounterList encounters={this.state.encounters} />
        </div>
      </div>
    );
  }
}

export default App;
