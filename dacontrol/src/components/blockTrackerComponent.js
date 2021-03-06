import React, { Component } from 'react';
import { Card, Table, Button } from 'react-bootstrap';

const BlockTrackerComponent = ({blocks}) => {
    console.log("BLOCKS",blocks.length);
    const rows = blocks.map((block)=>{
    
        return  <tr key={block.id+(Math.random().toString(36).substring(7))}>
                    <td>{block.id}</td>
                    <td>{block.x.toFixed(4)}</td>
                    <td>{block.y.toFixed(4)}</td>
                </tr>
    });
    return  <Card>
                <Card.Title>Blocks on the table</Card.Title>
                <Card.Body>
                    <Table>    
                        <tbody>
                            <tr>
                                <th>id</th>
                                <th>x</th>
                                <th>y</th>
                            </tr>
                            {rows}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
}

export default BlockTrackerComponent