import React, { Component } from 'react';
import { Form, Row, Button, Card, Dropdown, DropdownButton} from 'react-bootstrap';
import { SET_BLOCK_GOAL_ID, SET_BLOCK_GOAL_SOURCE, SET_BLOCK_GOAL_TARGET } from '../actions/robotActions';

const MoveBlockComponent = ({handleGoalChange, handleGoalSubmit, block_id, block_source, block_target}) => {
    return <Card>
        <Card.Title> Move Block </Card.Title>
        <Card.Body>
            <Row>
                <Form>
                    <Form.Group>
                        <Form.Label>Block Id</Form.Label>
                        <Form.Control
                            type = "number"
                            name = {SET_BLOCK_GOAL_ID}
                            value = {block_id}
                            onChange = {handleGoalChange}
                        />
                        <Form.Label>Source</Form.Label>
                        <Form.Control
                            as="select"
                            title = 'Source'
                            name = {SET_BLOCK_GOAL_SOURCE}
                            onChange = {handleGoalChange}
                            value = {block_source}
                        >
                        <option>Orbit 1</option>
                        <option>Orbit 2</option>
                        <option>Orbit 3</option>
                        <option>Orbit 4</option>
                        <option>Orbit 5</option>
                        <option>Staging</option>
                        </Form.Control>
                        <Form.Label>Target</Form.Label>
                        <Form.Control
                            as="select"
                            title = 'Target'
                            name = {SET_BLOCK_GOAL_TARGET}
                            onChange = {handleGoalChange}
                            value = {block_target}
                        >
                        <option>Orbit 1</option>
                        <option>Orbit 2</option>
                        <option>Orbit 3</option>
                        <option>Orbit 4</option>
                        <option>Orbit 5</option>
                        <option>Staging</option>
                        </Form.Control>
                        <Button variant="success" onClick={handleGoalSubmit}>
                            Move Block
                        </Button>
                    </Form.Group>
                </Form>
            </Row>
        </Card.Body>
        </Card>
};

export default MoveBlockComponent;