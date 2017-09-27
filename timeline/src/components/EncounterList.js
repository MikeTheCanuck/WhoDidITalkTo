// EncounterList.js

import React, {Component} from 'react';
import Encounter from './Encounter';
import _ from 'lodash';

class EncounterList extends Component {
  constructor(props){
    super(props);
    this.state = {
      encounters: []
    };
    let encounterApp = this.props.db.database().ref('testencounters');
    encounterApp.on('value', snapshot => {
      this.getData(snapshot.val());
    });
  }

  getData(values){
    let encountersVal = values;
    let encounters = _(encountersVal)
                      .keys()
                      .map(encounterKey => {
                          let cloned = _.clone(encountersVal[encounterKey]);
                          cloned.key = encounterKey;
                          return cloned;
                      })
                      .value();
      this.setState({
        encounters: encounters
      });
  }

  render() {
    let encounterNodes = this.state.encounters.map((encounter) => {
      return (
        <div className="card" id="encounter">
          <div className="card-content">
            <Encounter encounter = {encounter.encounter} />
          </div>
        </div>
      )
    });
    return (
      <div>
        {encounterNodes}
      </div>
    );
  }
}

export default EncounterList