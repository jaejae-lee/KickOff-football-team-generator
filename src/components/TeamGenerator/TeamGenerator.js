import React, { Component } from 'react';
import { Button, ListGroup, InputGroup, FormControl }  from 'react-bootstrap';

class TeamGenerator extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            fullPlayer: props.fullPlayer,
            playerList: props.playerList,
            teamA: props.teamA,
            teamB: props.teamB,
            teamGenerated: props.teamGenerated,
            teamAsize: props.teamAsize,
            teamBsize: props.teamBsize,
        }

        this.handleTeamSubmit = this.handleTeamSubmit.bind(this); 
        this.handleChangeTeamASize = this.handleChangeTeamASize.bind(this); 
    }
    

    handleChangeTeamASize(e) {
        this.setState({
            teamAsize: e.currentTarget.value,
        })
    }

    handleTeamSubmit(e) {
        e.preventDefault();

        let { playerList } = this.props;

        this.props.generateTeams({
            ...this.state,
            playerList,
        })

        this.setState({
            teamGenerated: true,
        })

        if(playerList.length === 10){
            this.setState({
                teamGenerated: true,
                fullPlayer: true,
            })
        }
    }
    
    render() { 

        let { teamA, teamB, playerList } = this.props; 
        let { fullPlayer, teamGenerated, teamAsize } = this.state;
        let teamBsize = playerList.length - teamAsize;

        return (
            <>
                 <InputGroup className="mb-3">
                    <label className="teamLabel">Team A:</label>
                    <FormControl
                    placeholder="enter the number of team A"
                    value= { teamAsize }
                    onChange={ this.handleChangeTeamASize }
                    />
                </InputGroup>

                <InputGroup className="mb-3">
                    <label className="teamLabel">Team B:</label>
                    <FormControl
                    lable="Team B"
                    placeholder="enter the number of team B"
                    value= { teamAsize ? teamBsize : "" }
                    onChange={ this.handleChangeTeamASize }
                    />
                </InputGroup>

                <Button className="button teamGenerateBtn"
                        variant="primary" size="lg" block
                        onClick={ this.handleTeamSubmit }
                >Generate Teams</Button>


                { teamGenerated && fullPlayer ? null 
                    : teamGenerated && !fullPlayer ? 
                    <p className= "errorMessage"> Please enter 10 players' name first </p> 
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