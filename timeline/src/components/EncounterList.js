import React from 'react';
import PropTypes from 'prop-types';
import Encounter from './Encounter';

const EncounterList = props => {
  const renderEncounters = () => {
    return props.encounters.map(encounter => {
      return (
        <Encounter
          key={encounter.Name + Math.random()}
          Name={encounter.Name}
          Date={encounter.Date}
          Event={encounter.Event}
        />
      );
    });
  };

  return (
    <div>
      <h2>Encounters</h2>
      {/* Figure out how to get rid of the () for the function call. It's supposed to work
      as a variable name. */}
      {renderEncounters()}
    </div>
  );
};

EncounterList.propTypes = {
  encounters: PropTypes.array.isRequired,
};

export default EncounterList;
