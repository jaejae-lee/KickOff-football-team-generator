import React, { Component } from 'react';
import { InputGroup, FormControl, Button }  from 'react-bootstrap';

class Form extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            player: props.player,
            playerList: props.playerList,
            fullPlayer: props.fullPlayer,
            teamAsize : props.teamAsize,
            teamBsize: props.teamBsize,
            nameError: false,
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
         
        let { playerList, player } = this.props;

        this.props.handleSave({
            ...this.state,
            playerList : playerList,
        }); 

        if(player !== "") {
            this.setState({
            nameError: false,
            playerList: [...this.props.playerList, this.state.player],
            player: "",
            })
        }

        else if(player === "") {
            this.setState({
                nameError: true,
                player: "",
            })
        }

        if(this.props.playerList.length === 9) {
            this.setState({
                fullPlayer: true
            })
        }
    }
    
    render() { 

        let { player, nameError, fullPlayer, teamAsize, teamBsize } = this.state;

        return (
            
            <form onSubmit={ ()=>this.handleSubmit }>
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

            </form>
        );
    }
}
 
export default Form;