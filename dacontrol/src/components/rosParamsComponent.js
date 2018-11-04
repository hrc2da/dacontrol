import React from "react";
import { Card, Form, Button, Row, Col } from "react-bootstrap";

const RosParamsComponent = ({ rosParams, handleChange }) => {
  const sortedParamsKeys = Object.keys(rosParams).sort();
  const rows = sortedParamsKeys.map(param => {
    let val = null;
    try{
      val = rosParams[param].toFixed(2);
    }
    catch(e){
      console.log(e);
      val = rosParams[param];
    }
    return <Form.Group as={Row} controlId={param}>
            <Form.Label column sm="2">
              {param}:
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="number"
                name={param}
                step={0.01}
                value={val}
                onChange={handleChange}
              />
            </Col>
          </Form.Group>;
  });
  
  return (
    <Card>
      <Card.Title>Ros Params</Card.Title>
      <Card.Body>
        <Form>
          {rows}
        </Form>
      </Card.Body>
    </Card>
  );
};

export default RosParamsComponent;
