import React, { Component } from 'react';
import './App.css';
// testing React-day-5
import Content from './components/Content';

import MessageList from './components/MessageList';
import EncounterList from './components/EncounterList';
import Encounter from './components/Encounter';
import firebase from 'firebase';

const activities = [
  {
    timestamp: new Date().getTime(),
    text: "Ate trashy lunch",
    user: {
      id: 1, name: 'Nate',
      avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
    },
    comments: [{ from: 'Ari', text: 'Me too!' }]
  },
  {
    timestamp: new Date().getTime(),
    text: "Woke up early for a beautiful run",
    user: {
      id: 2, name: 'Ari',
      avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
    },
    comments: [{ from: 'Nate', text: 'I am so jealous' }]
  },
]

// TODO: pull in remote data
// This currently pulls in a local array of data
const encounters = [
  {
    Date: "2017-08-17",
    Person: "Donna Troy",
    Event: "PDXWIT Summer Soiree",
    Location: "",
    Topics: "Zapproved current internship program",
    Photo: "http://www.croop.cl/UI/twitter/images/doug.jpg"
  },
  {
    Date: "2017-08-19",
    Person: "Bobbie Morse",
    Event: "PDXWIT Summer Soiree",
    Location: "",
    Topics: "Going on vacation",
    Photo: "http://www.croop.cl/UI/twitter/images/doug.jpg"    
  },
  {
    Date: "2017-08-31",
    Person: "Pepper Potts",
    Event: "Consciousness Hacking meetup",
    Location: "",
    Topics: "",
    Photo: "http://www.croop.cl/UI/twitter/images/doug.jpg"
  },
  {
    Date: "2017-08-06",
    Person: "Benjamin Grimm",
    Event: "High Church of Lean Coffee",
    Location: "",
    Topics: "we've met multiple times, had extended conversations",
    Photo: "http://www.croop.cl/UI/twitter/images/doug.jpg"
  }
]

class App extends Component {
  constructor() {
    // Configure Firebase realtime data source (test repo)
    var config = {
      apiKey: "AIzaSyBZSmg1KtjWuCsdQzhqoB0KRPK5-eZ6zRo",
      authDomain: "whodiditalktotest.firebaseapp.com",
      databaseURL: "https://whodiditalktotest.firebaseio.com",
      projectId: "whodiditalktotest",
      storageBucket: "whodiditalktotest.appspot.com",
      messagingSenderId: "478743607097"
    };
    firebase.initializeApp(config);
    super();
    }

  renderEncounter(i) {
    return <Encounter valuePerson={encounters[i].Person} 
                      valueDate={encounters[i].Date}
                      valueEvent={encounters[i].Event} />;
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Timeline</h1>
        </div>
        <div className="Timeline">

          {/* <Content activities={activities} /> */}

          <EncounterList encounters={encounters}
                         db={firebase} />

          {/* 
          {this.renderEncounter(0)}
          {this.renderEncounter(1)}
          {this.renderEncounter(2)}
          {this.renderEncounter(3)}
           */}
        </div>
      </div>
    );
  }
}

export default App;
