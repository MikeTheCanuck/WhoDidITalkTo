import React from 'react';
import PropTypes from 'prop-types';

const Encounter = props => {
  return (
    <div className="Encounter">
      <div className="Person-image">
        <img src={props.photo} alt="" />
      </div>
      <div className="Encounter_data">
        <div className="Encounter-first-row">
          <div className="Person-name">Who: {props.Name}</div>
          <div className="Encounter-date">When: {props.Date}</div>
        </div>
        <div className="Encounter-second-row">
          <div className="Encounter-event">Where: {props.Event}</div>
        </div>
      </div>

      <hr />
    </div>
  );
};

Encounter.propTypes = {
  Name: PropTypes.string.isRequired,
  photo: PropTypes.string,
  Date: PropTypes.string.isRequired,
  Event: PropTypes.string,
  Location: PropTypes.string,
};

Encounter.defaultTypes = {
  photo: '',
  Event: 'n/a',
  Location: 'n/a',
};

export default Encounter;
