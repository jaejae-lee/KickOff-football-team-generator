import React, { Component } from 'react';
import { InputGroup, FormControl, Button }  from 'react-bootstrap';

class Form extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            player: props.player,
            playerList: props.playerList,
            fullPlayer: props.fullPlayer,
            nameError: false,
        }

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this); 
    }

    handleChangeName(e) {
        this.setState({
            player: e.currentTarget.value,  
        })
    }
    
    handleSubmit(e) {
        e.preventDefault();
        
        let { playerList } = this.props;

        this.props.handleSave({
            ...this.state,
            playerList
        }); 

        if(this.state.player === "") {
            this.setState({
                nameError: true,
            })
        }else if(this.state.player !== ""){
            this.setState({
                nameError: false,
                player: ""
            })

        }

        if(playerList.length === 9) {
            this.setState({
                fullPlayer: true
            })
        }   
    }
    
    render() { 

        let { player, nameError } = this.state;

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

                    { this.props.playerList.length !== 10 ? null : 
                        <p className= "errorMessage">  Now generate your team!
                        </p> 
                    }
                </InputGroup>

                <Button className = "button"
                        variant="primary" size="lg"
                        disabled = { this.props.playerList.length === 10 ? true : false }
                        onClick={ this.handleSubmit }
                >Add a player</Button>

            </form>
        );
    }
}
 
export default Form;