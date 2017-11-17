import React from 'react';
import PropTypes from 'prop-types';
import Encounter from './Encounter';

const EncounterList = props => {
  // this binding pattern is preferable to others, mentioned here: https://medium.freecodecamp.org/react-binding-patterns-5-approaches-for-handling-this-92c651b5af56
  const renderEncounters = () => {
    return props.encounters.map(encounter => {
      // multiple returns appear to be necessary for the elements of the component to get rendered
      return (
        <Encounter
          key={encounter.Person + Math.random()} // is necessary to have a unique key for React to handle the component successfully
          Person={encounter.Person}
          Date={encounter.Date}
          Event={encounter.Event}
          Location={encounter.Location}
          Photo={encounter.Photo}
          Topics={encounter.Topics}
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
