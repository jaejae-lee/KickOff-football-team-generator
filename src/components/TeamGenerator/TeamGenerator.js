import React, { Component } from 'react';
import { Button }  from 'react-bootstrap';

class TeamGenerator extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            playerList: props.playerList,
            fullPlayer: props.fullPlayer,
        }
        
        this.handleTeamSubmit = this.handleTeamSubmit.bind(this); 
    }
    
    handleTeamSubmit(e) {
        e.preventDefault();
        this.props.generateTeams();
    }
    
    render() { 

        return (
            
                <Button variant="primary" size="lg" block
                        onClick={ this.handleTeamSubmit }
                >Generate Teams!</Button>
        );
    }
}
 
export default TeamGenerator;