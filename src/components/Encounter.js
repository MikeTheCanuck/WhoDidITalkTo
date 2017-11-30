import React from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Encounter = props => {
  return (
    <div className="Encounter">
      <Grid>
        <Col xs={4} md={2}>
          <div className="Person-image">
            <img src={props.Photo} alt="" />
          </div>
        </Col>
        <Col xs={8} md={10}>
          <div className="Encounter_data">
            <Row>
              <div className="Encounter-first-row">
                <div className="Person-name">Who: {props.Person}</div>
                <div className="Encounter-date">When: {props.Date}</div>
            </div>
            </Row>
            <Row>
            <div className="Encounter-second-row">
              <div className="Encounter-event">Event: {props.Event}</div>
              <div className="Encounter-location">Location: {props.Location}</div>
            </div>
            </Row>
          </div>
        </Col>
      <div className="Encounter-topics">Topics: {props.Topics}</div>
      </Grid>
      <hr />
    </div>
  );
};

Encounter.propTypes = {
  Person: PropTypes.string.isRequired,
  Photo: PropTypes.string,
  Date: PropTypes.string.isRequired,
  Event: PropTypes.string,
  Location: PropTypes.string,
};

Encounter.defaultProps = {
  Photo: 'https://randomuser.me/api/portraits/thumb/lego/1.jpg',
  Event: 'n/a',
  Location: 'n/a',
};

export default Encounter;
