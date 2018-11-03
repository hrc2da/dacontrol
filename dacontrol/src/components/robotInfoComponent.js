import React, { Component } from 'react';
import { Card, Table, Alert } from 'react-bootstrap';


const RobotInfoComponent = ({status,position,orientation}) => {
    return  <Card>
                <Card.Title>Robot Status</Card.Title>
                <Alert
                    variant="primary"
                >
                    Robot Status: {status}
                </Alert>
                <Card.Body>
                    <Table>    
                        <tbody>
                            <tr>Position</tr>
                            <tr>
                                <td>x: {position.x.toFixed(4)} </td>
                                <td>y: {position.y.toFixed(4)}</td>
                                <td>z: {position.z.toFixed(4)} </td>
                            </tr>
                            <tr>Orientation</tr>
                            <tr>
                                <td>x: {orientation.x.toFixed(4)} </td>
                                <td>y: {orientation.y.toFixed(4)}</td>
                                <td>z: {orientation.z.toFixed(4)} </td>
                                <td>w: {orientation.w.toFixed(4)} </td>
                            </tr>
                        </tbody>
                    </Table>
                    
                     
                    
                </Card.Body>
            </Card>
            
}

export default RobotInfoComponent;