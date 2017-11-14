import React, { Component } from 'react';
import './App.css';
import API from './util/api';
import EncounterList from './components/EncounterList';

class App extends Component {
  state = {
    encounters: [],
    Name: '',
  };

/* TODO: research why initializing state variables doesn't have to be in the constructor(), and if the same 
   trick works for binding this in the constructor */
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  // Kyle advises this stage of the component lifecycle is preferable to the constructor stage, to access a data layer
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

  handleChange(stateValue) {
    this.setState({
      [stateValue.target.name]: stateValue.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Timeline</h1>
        </div>
        <div className="NewEncounter">
          <form>
            <input type="text" name="Name"
                   placeholder="What's their name?"
                   onChange={this.handleChange} 
                   value={this.state.username} />
            <button>Add Encounter</button>
          </form>
        </div>
        <div className="Timeline">
          <EncounterList encounters={this.state.encounters} />
        </div>
      </div>
    );
  }
}

export default App;
