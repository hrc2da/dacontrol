import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

const RosBridgeComponent = ({url, status, handleUrlChange, handleSubmit}) =>{

    return <div className="border">
            <Form>
                <Form.Group controlId="formRosBridgeUrl">
                    
                    <Form.Label>DA Server Url:</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter RosBridge URL"
                        value={url}
                        onChange={handleUrlChange}
                    />
                    <Button
                        variant="success"
                        onClick={handleSubmit}
                    >
                        Connect
                    </Button>
                </Form.Group>
                <Form.Group controlId="formRosBridgeStatus">
                    <Form.Text className="text-muted">RosBridge is: {status}</Form.Text>
                </Form.Group>
            </Form>
        </div>
         
}

export default RosBridgeComponent