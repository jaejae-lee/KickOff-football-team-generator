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
            teamGenerated: props.teamGenerated,
        }

        this.handleTeamSubmit = this.handleTeamSubmit.bind(this); 
    }
    
    handleTeamSubmit(e) {
        e.preventDefault();

        if(this.props.playerList.length >= 9){
            this.setState({
                fullPlayer: true,
            })
        }

        this.setState({
            teamGenerated: true,
        })

        this.props.generateTeams(this.props.playerList);
    }
    
    render() { 
        let { teamA, teamB, } = this.props;
        let { teamGenerated, fullPlayer } = this.state;

        return (
            <>
                <Button className="button teamGenerateBtn"
                        variant="primary" size="lg" block
                        onClick={ this.handleTeamSubmit }
                >Generate Teams</Button>


                { teamGenerated && fullPlayer ? null 
                    : teamGenerated && !fullPlayer ? 
                    <p className= "errorMessage"> Please enter 10 player's name first </p> 
                    : null
                }
                
                { !fullPlayer ? null :
                <>
                <div className ="teamContainer">
                    <div className ="teamAcontainer">
                        <ListGroup variant="flush">
                            <p className ="teamHeader">Team A</p>
                                {teamA.map((current, i) => {
                                    return (
                                        <div className="listContainer" key={i}> 
                                            <ListGroup.Item className="listItems">{ current }</ListGroup.Item>
                                        </div>
                                        ) 
                                })}
                        </ListGroup>
                    </div>
                    
                    <div className ="teamBcontainer">
                        <ListGroup variant="flush">
                            <p className ="teamHeader">Team B</p>
                                {teamB.map((current, i) => {
                                    return (
                                        <div className="listContainer" key={i}> 
                                            <ListGroup.Item className="listItems">{current}</ListGroup.Item>
                                        </div>
                                        )
                            
                                })}
                        </ListGroup>
                    </div>
                </div>
                </>
                }
            </>    
        );
    }
}
 
export default TeamGenerator;