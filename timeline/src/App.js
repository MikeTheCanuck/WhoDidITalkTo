import React, { Component } from 'react';
import API from './util/api';
import './App.css';
import EncounterList from './components/EncounterList';

class App extends Component {
  state = {
    encounters: [],
  };

  componentDidMount() {
    this.fetchEncounters();
  }

  fetchEncounters = () => {
    API.get().then(response => {
      this.setState({
        encounters: Object.values(response.data),
      });
    });
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
