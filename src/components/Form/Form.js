import React, { Component } from 'react';
import { InputGroup, FormControl, Button }  from 'react-bootstrap';

class Form extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            player: props.player,
            playerList: props.playerList,
            nameError: false,
            submitted: props.submitted,
            fullPlayer: props.fullPlayer,
            teamAsize : props.teamAsize,
            teamBsize: props.teamBsize,
        }

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this); 
        this.handleChangeTeamSize = this.handleChangeTeamSize.bind(this); 
    }

    handleChangeName(e) {
        this.setState({
            player: e.currentTarget.value,  
        })
    }

    handleChangeTeamSize(e) {
        let { playerList, teamAsize } = this.state;

        this.setState({
            teamAsize: e.currentTarget.value,
            teamBsize: playerList.length - teamAsize -1
        })
    }
    
    handleSubmit(e) {
        e.preventDefault();

        if (this.state.player !== '' && this.state.playerList.length < 9){
            this.setState({
                nameError: false,
                submitted: true,
                playerList: [...this.state.playerList, this.state.player],
                player: '',
            })
        }else if(this.state.player === '' && this.props.playerList.length >= 9) {
            this.setState({
                playerList: this.props.playerList,
                submitted: true,
                player: '',
            })
        }else if(this.state.player === '' && this.props.playerList.length < 9) {
            this.setState({
                playerList: this.props.playerList,
                nameError: true,
            })
        }else if(this.props.playerList.length >= 9){
            this.setState({
                playerList: this.props.playerList,
                fullPlayer: true,
                submitted: true,
            })
        }
    
        this.props.handleSave({...this.state}); 
        
    }
    
    render() { 

        let { player, nameError, fullPlayer, teamAsize, teamBsize, playerList } = this.state;

        return (
            
            <form onSubmit={ this.handleSubmit }>
                <InputGroup className="mb-3">
                    <FormControl
                    placeholder="enter player's name"
                    value={ player }
                    onChange={ this.handleChangeName }  
                    />

                    { !nameError? null : 
                        <p className= "errorMessage"> Please enter player's name
                        </p> 
                    }

                    { !fullPlayer? null : 
                        <p className= "errorMessage">  Now generate your team!
                        </p> 
                    }
                </InputGroup>

                <Button className = "button"
                        variant="primary" size="lg"
                        disabled = { fullPlayer ? true : false }
                        onClick={ this.handleSubmit }
                >Add a player</Button>

                <InputGroup className="mb-3">
                    <label className="teamLabel">Team A:</label>
                    <FormControl
                    disabled={ fullPlayer ?  false : true }
                    placeholder="enter the number of team A"
                    value={ teamAsize }
                    onChange={ this.handleChangeTeamSize }  
                    />
                </InputGroup>

                <InputGroup className="mb-3">
                    <label className="teamLabel">Team B:</label>
                    <FormControl
                    disabled= { fullPlayer ?  false : true }
                    lable="Team B"
                    placeholder="enter the number of team B"
                    value= { teamBsize }
                    onChange={ this.handleChangeTeamSize }  
                    />
                </InputGroup>
            </form>
        );
    }
}
 
export default Form;