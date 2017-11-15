import React, { Component } from 'react';
import './App.css';
import API from './util/api';
import EncounterList from './components/EncounterList';
import NewEncounter from './components/NewEncounter';
import firebase from './firebase-config';

class App extends Component {
  state = {
    encounters: [],
    fullname: '',
  };

/* TODO: research why initializing state variables doesn't have to be in the constructor(), and if the same 
   trick works for binding this in the constructor */
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /* Kyle advises this stage of the component lifecycle is preferable to the constructor stage, 
     to pull data from the data layer, as it enables the app to display skeletal UI while 
     the data is retrieved and properly formulated */
  componentDidMount() {
    this.fetchEncounters();
  }

  fetchEncounters = () => {
    API.get()
       .then(response => {
         this.setState({
           encounters: Object.values(response.data), // this is intended to simplify handling of the data by passing it directly to the EncounterList component as an array
          });
        }
      );
  };

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
    const itemsRef = firebase.database().ref('items');
    // record to be pushed has key-value pairs of "name of firebase field": "value of that field"
    const item = {
      Name: this.state.fullname
    }
    itemsRef.push(item);
    this.setState({
      fullname: ''
    })
  }

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
