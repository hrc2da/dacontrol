import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Container } from 'react-bootstrap';
import logo from './logo.svg';
//import './App.css';
import RosBridgeContainer from './containers/rosBridgeContainer';
import RobotInfoContainer from './containers/robotInfoContainer';
import MovementContainer from './containers/movementContainer';
import TableConfigContainer from './containers/tableConfigContainer';
import BlockTrackerContainer from './containers/blockTrackerContainer';

class App extends Component {
  render() {
    return (
        <div className="App">
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" />
       
          <Container>
            <header className="page-header">
              <h3>DA Control</h3>
            </header>
            <Row>
              <Col sm={4}>
                <RosBridgeContainer />
              </Col>
              <Col sm={4}>
                <RobotInfoContainer />
              </Col>
            </Row>

            <Row>
              <Col sm={4}>
                <MovementContainer />
              </Col>
              <Col sm={4}>
                <TableConfigContainer />
              </Col>
            </Row>

            <Row>
              <Col sm={4}>
              </Col>
              <Col sm={4}>
                <BlockTrackerContainer />
              </Col>
            </Row>
          </Container>
        </div>
    );
  }
}

export default connect()(App);
