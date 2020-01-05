import React, { Component } from 'react';
import { Button, ListGroup, ButtonToolbar, ToggleButtonGroup, ToggleButton  }  from 'react-bootstrap';

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

         this.props.generateTeams({...this.state, playerList})

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

        console.log(teamAsize, "teamAsize")
        console.log(teamGenerated, "teamGenerated")
        

        return (

            <form className="form">
                <ButtonToolbar className="teamSizeToolBar">
                    <label className="teamLabel">How many players in each team ? <br/> Team A :</label>
                        <ToggleButtonGroup className="teamSizeBtnContainer" type="radio" name="options"  defaultValue={5} >
                            <ToggleButton className="button teamSizeBtn" 
                                          value={0} 
                                          onChange={ this.handleChangeTeamASize }>0</ToggleButton>
                            <ToggleButton className="button teamSizeBtn" 
                                          value={1} 
                                          onChange={ this.handleChangeTeamASize }>1</ToggleButton>
                            <ToggleButton className="button teamSizeBtn" 
                                          value={2} 
                                          onChange={ this.handleChangeTeamASize }>2</ToggleButton>
                            <ToggleButton className="button teamSizeBtn" 
                                          value={3} 
                                          onChange={ this.handleChangeTeamASize }>3</ToggleButton>
                            <ToggleButton className="button teamSizeBtn" 
                                          value={4} 
                                          onChange={ this.handleChangeTeamASize }>4</ToggleButton>
                            <ToggleButton className="button teamSizeBtn" 
                                          value={5} 
                                          onChange={ this.handleChangeTeamASize }>5</ToggleButton>
                        </ToggleButtonGroup>

                        <div className="teamSizeToolBar"> 
                            <label className="teamLabel"> Team B : 
                                <p className="teamBplayer">{ teamAsize ? teamBsize : "" } </p>
                            </label>
                        </div>
                    </ButtonToolbar>

                <Button className="button teamGenerateBtn"
                        variant="primary" size="lg" block
                        onClick={ this.handleTeamSubmit }
                        // disabled={ teamAsize === "" ? true : false}
                >Generate Teams</Button>


                { teamGenerated && fullPlayer ? 
                    <p className= "errorMessage"> Don't like the teams? <br/>Change the number of players in each team and shuffle it again! </p>  
                    : teamGenerated && !fullPlayer ? 
                    <p className= "errorMessage"> Please enter 10 players first </p> 
                    : null
                } 

                { teamGenerated && teamAsize === "" ? 
                    <p className= "errorMessage">  Please select the number of players for each team </p>  
                    : null
                }   
                 
                { !fullPlayer ? null : 
                <>
                <div className ="teamContainer">
                    <div className ="teamAcontainer">
                        <ListGroup variant="flush">
                            <p className ="teamHeader">Team A</p>
                                { teamA.map((current, i) => {
                                    return (
                                        <div className="listContainer" key={i}> 
                                            <ListGroup.Item className="listItems">
                                                <span className="playerList-player">{ current.player }</span>
                                                <span className="playerList-position">{ current.position }</span>
                                            </ListGroup.Item>
                                        </div>
                                        ) 
                                })}
                        </ListGroup>
                    </div>
                    
                    <div className ="teamBcontainer">
                        <ListGroup variant="flush">
                            <p className ="teamHeader">Team B</p>
                                { teamB.map((current, i) => {
                                    return (
                                        <div className="listContainer" key={i}> 
                                            <ListGroup.Item className="listItems">
                                                <span className="playerList-player">{ current.player }</span>
                                                <span className="playerList-position">{ current.position }</span>
                                            </ListGroup.Item>
                                        </div>
                                        )
                                })}
                        </ListGroup>
                    </div>
                </div>
                </> 
            }
            </form>   
        );
    }
}
 
export default TeamGenerator;