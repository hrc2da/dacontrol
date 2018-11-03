import React, { Component } from 'react';
import { Form, Row, Button, Card} from 'react-bootstrap';
import { SET_ID, SET_BLOCK_SOURCE, SET_BLOCK_TARGET } from '../actions/robotActions';

const MoveBlockComponent = ({handleGoalChange, block_id, block_source, block_target}) => {
    return <Card>
        <Card.Title> Move Block </Card.Title>
        <Card.Body>
            <Row>
                <Form>
                    <Form.Group>
                        <Form.Label>Block Id</Form.Label>
                        <Form.Control
                            type = "number"
                            name = {SET_ID}
                            value = {block_id}
                            onChange = {handleGoalChange}
                        />
                    </Form.Group>
                </Form>
            </Row>
        </Card.Body>
        </Card>
};