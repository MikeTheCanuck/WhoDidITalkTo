import React, { Component } from 'react';
import './App.css';
import firebase, {auth, provider} from './firebase-config';
import EncounterList from './components/EncounterList';
import NewEncounter from './components/NewEncounter';

class App extends Component {
  // state = {
  //   encounters: [],
  // };

  constructor() {
    super();
    this.state = {
      user: null,
      encounters: [],
    }
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    // Persists the logged-in state across page refreshes
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });

        /* Kyle advises this stage of the component lifecycle is preferable to the constructor stage, 
        to pull data from the data layer, as it enables the app to display skeletal UI while 
        the data is retrieved and properly formulated */
        /* I'm pulling the fetchEncounters() call into this if {} because that's the only way I can figure out 
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
          Topics: encounterz[encounter].Topics
        });
      }
      this.setState({
        encounters: newState
      });
    });
  };

  login() {
    auth.signInWithPopup(provider)
      .then((result) => {
        const user=result.user;
        this.setState({
          user
        });
      });
  }

  logout() {
    auth.signOut()
      .then(() => {
        this.setState({
          user: null
        });
      });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="Heading-text">Timeline</div>
          <div className="Login-button">
            {this.state.user ?
              <button onClick={this.logout}>Log Out</button>
              :
              <button onClick={this.login}>Log In</button>
            }
          </div>
        </div>
        {this.state.user ?
          <div className="wrapper">
            <div className="NewEncounter">
              <NewEncounter db={firebase}/>
            </div>
            <div className="Timeline">
              <EncounterList encounters={this.state.encounters} />
            </div>
          </div>
          :
          <div className="wrapper">
            <p>Unless you're logged in, you don't get to see the data</p>
          </div>
        }
      </div>
    );
  }
}

export default App;