import React, { Component } from "react";
import { Form, Row, Col, Button, Card } from "react-bootstrap";
import {
  SET_GOAL_POSITION_X,
  SET_GOAL_POSITION_Y,
  SET_GOAL_POSITION_Z
} from "../actions/robotActions";

const MovementComponent = ({
  handleStop,
  handleCalibrate,
  handleHome,
  handlePause,
  handleMove,
  handleGoalChange,
  goalPositionX,
  goalPositionY,
  goalPositionZ,
  handleRestart,
  handleSleepEoss,
  handleWakeEoss
}) => {
  return (
    <Card>
      <Card.Title>Basic Commands</Card.Title>
      <Card.Body>
        <Row>
          <Button variant="danger" onClick={handleStop}>
            Emergency Stop
          </Button>
        </Row>
        <Row>
          <Form>
            <Form.Group as={Row} controlId="formMoveToSpotX">
              <Form.Label column sm="2">
                x:
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="number"
                  name={SET_GOAL_POSITION_X}
                  step={0.01}
                  value={goalPositionX.toFixed(2)}
                  onChange={handleGoalChange}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formMoveToSpotY">
              <Form.Label column sm="2">
                y:
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="number"
                  name={SET_GOAL_POSITION_Y}
                  step={0.01}
                  value={goalPositionY.toFixed(2)}
                  onChange={handleGoalChange}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formMoveToSpotZ">
              <Form.Label column sm="2">
                z:
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="number"
                  name={SET_GOAL_POSITION_Z}
                  step={0.01}
                  value={goalPositionZ.toFixed(2)}
                  onChange={handleGoalChange}
                />
              </Col>
            </Form.Group>
            <Button variant="success" onClick={handleMove}>
              Move to Spot
            </Button>
          </Form>
        </Row>
        <Row>
          <Button variant="primary" onClick={handleHome}>
            Home Arm
          </Button>
        </Row>
        <Row>
          <Button variant="primary" onClick={handleCalibrate}>
            ReCalibrate Arm
          </Button>
        </Row>
        <Row>
          <Button variant="warning" onClick={handlePause}>
            Pause Arm
          </Button>
        </Row>
        <Row>
          <Button variant="success" onClick={handleRestart}>
            Restart Arm
          </Button>
        </Row>

        <Row>
          <Button variant="warning" onClick={handleSleepEoss}>
            Sleep EOSS Builder
          </Button>
        </Row>
        <Row>
          <Button variant="success" onClick={handleWakeEoss}>
            Wake EOSS Builder
          </Button>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default MovementComponent;
