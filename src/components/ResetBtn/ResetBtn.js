import React from 'react';
import { Button }  from 'react-bootstrap';

const ResetBtn = ({ handleReset }) => (

    <Button className = "button resetBtn"
            variant="primary" size="lg"
            onClick={ handleReset }>Reset All</Button>
)

export default ResetBtn;