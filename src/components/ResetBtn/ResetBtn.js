import React, { Component}  from 'react';
import { Button }  from 'react-bootstrap';

class ResetBtn extends Component {

    constructor(props) {
        super(props);

        this.state = {
            teamGenerated: props.teamGenerated,
        }
        
        this.handleReset = this.handleReset.bind(this); 
    }

    handleReset() {
        this.props.handleReset({...this.state});
        this.setState({
            teamGenerated: false,
        })
    }

    render() { 
        return (
            <Button className = "button resetBtn"
            variant="primary" size="lg"
            onClick={ this.handleReset }>Reset</Button>
        );
    }
}
 
export default ResetBtn;