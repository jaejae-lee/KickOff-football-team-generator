import React, { Component } from 'react';
import { Button, ListGroup }  from 'react-bootstrap';

class TeamGenerator extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            fullPlayer: props.fullPlayer,
            playerList: props.playerList,
            teamA: props.teamA,
            teamB: props.teamB,
        }

        this.handleTeamSubmit = this.handleTeamSubmit.bind(this); 
    }
    
    handleTeamSubmit(e) {
        e.preventDefault();
        console.log(this.state.fullPlayer);
  
        if (this.state.playerList.length === 9){
            this.setState({
                // nameError: false,
                // submitted: true,
                fullPlayer: true,
            })
        }

        this.props.generateTeams(this.props.playerList); // why is this props not state?
    }
    
    render() { 
        let { teamA, teamB } = this.props;

        return (
            <>
                <Button className="button"
                        variant="primary" size="lg" block
                        onClick={ this.handleTeamSubmit }
                >Generate Teams!</Button>

                <p className ="teamHeader">Team A</p>
                <ListGroup variant="flush">
                    {teamA.map((current, i) => {
                        return (
                            <p key={i}> 
                                <ListGroup.Item>{current}</ListGroup.Item>
                            </p>
                            ) 
                    })}
                </ListGroup>

                <p className ="teamHeader">Team B</p>
                <ListGroup variant="flush">
                    {teamB.map((current, i) => {
                        console.log(current)
                        return (
                            <p key={i}> 
                                <ListGroup.Item>{current}</ListGroup.Item>
                            </p>
                            )
                    })}
                </ListGroup>
            </>    
        );
    }
}
 
export default TeamGenerator;