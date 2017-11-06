import React, { Component } from 'react';
import './App.css';
import API from './util/api';
import EncounterList from './components/EncounterList';

class App extends Component {
  state = {
    encounters: [],
  };

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

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Timeline</h1>
        </div>
        <div className="Timeline">
          <EncounterList encounters={this.state.encounters} />
        </div>
      </div>
    );
  }
}

export default App;
