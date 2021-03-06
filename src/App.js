import React, { Component } from 'react';
import './App.css';
import firebase, { auth, provider } from './firebase-config';
import EncounterList from './components/EncounterList';
import NewEncounter from './components/NewEncounter';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      encounters: [],
    };
    // bind manually because React class components don't auto-bind
    // http://facebook.github.io/react/blog/2015/01/27/react-v0.13.0-beta-1.html#autobinding
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.showNew = this.showNew.bind(this);
  }

  componentDidMount() {
    // Persists the logged-in state across page refreshes
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });

        /* Kyle advises this stage of the component lifecycle is preferable to the constructor stage, 
        to pull data from the data layer, as it enables the app to display skeletal UI while 
        the data is retrieved and properly formulated */
        /* I'm pulling the fetchEncounters() call into this if block because that's the only way I can figure out 
        how to access the "user" object */
        this.fetchEncounters(user);
      }
    });
  }

  fetchEncounters = (user) => {
    // TODO: consolidate this and the NewEncounter component's declarations of the same object
    const itemsRef = firebase.database().ref('encounters/' + user.uid);

    itemsRef.on('value', (snapshot) => {
      console.log(snapshot.val());
      let encounterz = snapshot.val();
      let newState = [];
      for (let encounter in encounterz) {
        newState.push({
          id: encounter,
          Date: encounterz[encounter].Date,
          Person: encounterz[encounter].Person,
          Photo: encounterz[encounter].Photo,
          Event: encounterz[encounter].Event,
          Location: encounterz[encounter].Location,
          Topics: encounterz[encounter].Topics,
        });
      }

      // sort encounters by Date, descending
      newState.sort((current, next) => {
        if (current.Date < next.Date) {
          return 1;
        }
        if (current.Date > next.Date) {
          return -1;
        }
        // names must be equal
        return 0;
      });

      this.setState({
        encounters: newState,
      });
    });
  };

  login() {
    auth.signInWithPopup(provider).then((result) => {
      const user = result.user;
      this.setState({
        user,
      });
    });
  }

  logout() {
    auth.signOut().then(() => {
      this.setState({
        user: null,
      });
    });
  }

  showNew() {
    // Show the New Encounter form
    // either display the inline Component or pop up a "portal": https://stackoverflow.com/a/45291662
    document.getElementById('new-form').style.display = 'inline';
    console.log('showNew() has fired');
  }

  render() {
    return (
      <div className="app">
        <div className="app-header">
          <div className="heading-text">Timeline</div>
          <div className="new-encounter-button">
            <button onClick={this.showNew}>New</button>
          </div>
          <div className="login-button">
            {this.state.user ? (
              <button onClick={this.logout}>Log Out</button>
            ) : (
              <button onClick={this.login}>Log In</button>
            )}
          </div>
        </div>
        {this.state.user ? (
          <div className="wrapper">
            <div id="new-form" className="new-encounter">
              <NewEncounter db={firebase} />
            </div>
            <div className="timeline">
              <EncounterList encounters={this.state.encounters} />
            </div>
          </div>
        ) : (
          <div className="wrapper">
            <p>Unless you are logged in, you and the data shall never meet</p>
          </div>
        )}
      </div>
    );
  }
}

export default App;
