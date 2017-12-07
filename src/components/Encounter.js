import React from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Encounter = props => {
  return (
    <div className="encounter">
      <Grid>
        <div className="encounter-data">
          <Row>
            <Col xs={2}>
              <div className="person-image">
                <img src={props.Photo} alt="" />
              </div>
            </Col>
              <Col xs={5}>
                <Row>
                  <div className="person-name">{props.Person}</div>
                </Row>
                <Row>
                  <div className="encounter-date">{props.Date}</div>
                </Row>
              </Col>
              <Col xs={5}>
                <Row>
                  <div className="encounter-event">{props.Event}</div>
                </Row>
                <Row>
                  <div className="encounter-location">{props.Location}</div>
                </Row>
              </Col>
          </Row>
          <Row>
            <div className="encounter-topics">Topics: {props.Topics}</div>
          </Row>
        </div>
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
