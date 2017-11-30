import React from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Encounter = props => {
  return (
    <div className="Encounter">
      <Grid>
        <Col xs={3}>
          <div className="Person-image">
            <img src={props.Photo} alt="" />
          </div>
        </Col>
        <Col xs={9}>
          <div className="Encounter-data">
            <Row>
              <div className="Encounter-first-row">
                <Col xs={6}>
                {/* <div className="Person-name">Who: {props.Person}</div> */}
                  <div className="Person-name">{props.Person}</div>
                </Col>
                <Col xs={6}>
                  {/* <div className="Encounter-date">When: {props.Date}</div> */}
                  <div className="Encounter-date">{props.Date}</div>
                </Col>
              </div>
            </Row>
            <Row>
              <div className="Encounter-second-row">
                <Col xs={6}>
                  {/* <div className="Encounter-event">Event: {props.Event}</div> */}
                  <div className="Encounter-event">{props.Event}</div>
                </Col>
                <Col xs={6}>
                  {/* <div className="Encounter-location">Location: {props.Location}</div> */}
                  <div className="Encounter-location">{props.Location}</div>
                </Col>
              </div>
            </Row>
            <Row>
              <div className="Encounter-topics">Topics: {props.Topics}</div>
            </Row>
          </div>
        </Col>
      {/* <div className="Encounter-topics">Topics: {props.Topics}</div> */}
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
