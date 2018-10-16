import React, { Component } from 'react';
import { Row, Button, Card} from 'react-bootstrap';


const MovementComponent = ({handleStop, 
    handleCalibrate, handleHome, handlePause, handleRestart}) => {
    return <Card>
        <Card.Title>Basic Commands</Card.Title>
        <Card.Body>
            <Row>
                <Button
                    variant="danger"
                    onClick={handleStop}
                >
                    Emergency Stop
                </Button>
            </Row>
            
            <Row>
                <Button
                    variant="primary"
                    onClick={handleHome}
                >
                    Home Arm
                </Button>
            </Row>
            <Row>
                <Button
                    variant="primary"
                    onClick={handleCalibrate}
                >
                    ReCalibrate Arm
                </Button>
            </Row>
            <Row>
                <Button
                    variant="warning"
                    onClick={handlePause}
                >
                    Pause Arm
                </Button>
            </Row>
            <Row>
                <Button
                    variant="success"
                    onClick={handleRestart}
                >
                    Restart Arm
                </Button>
            </Row>
        </Card.Body>
    </Card>
}

export default MovementComponent;