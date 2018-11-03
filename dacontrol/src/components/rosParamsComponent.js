import React from "react";
import { Card, Form, Button } from "react-bootstrap";

const RosParamsComponent = ({ rosParams }) => {
  const rows = rosParams.map(param => {
    return <div>JSON.dumps(param)</div>;
  });
  return (
    <Card>
      <Card.Title>Ros Params</Card.Title>
      <Card.Body>{rows}</Card.Body>
    </Card>
  );
};

export default RosParamsComponent;
