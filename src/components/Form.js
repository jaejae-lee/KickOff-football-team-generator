import React, { Component } from 'react';
import { InputGroup, FormControl, Button }  from 'react-bootstrap';

class Form extends Component {

    render() { 
        return (
            <InputGroup className="mb-3">
                <FormControl
                placeholder="enter player's name"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                />
                <InputGroup.Append>
                <Button variant="outline-secondary">Button</Button>
                </InputGroup.Append>
            </InputGroup>

          );
    }
}
 
export default Form;