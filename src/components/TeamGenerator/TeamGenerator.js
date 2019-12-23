import React, { Component } from 'react';
import { Button }  from 'react-bootstrap';

class TeamGenerator extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            player: props.player,
            playerList: props.playerList,
            nameError: props.nameError,
            submitted: props.submitted,
        }

        this.handleTeamSubmit = this.handleTeamSubmit.bind(this); 
    }
    
    handleTeamSubmit(e) {
        e.preventDefault();
      
    }
    
    render() { 

        return (
            
                <Button variant="primary" size="lg" block
                        onClick={ this.handleSubmit }
                >Generate Teams!</Button>
        );
    }
}
 
export default TeamGenerator;