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
            fullPlayer: props.fullPlayer
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

        console.log(this.state.submitted); // true true 
        console.log(this.props.submitted); // false true 
        console.log('playerList.length props->state');
        console.log(this.props.playerList.length); //1 // pushed empty string why??
        console.log(this.state.playerList.length); //0
        // console.log(this.state.nameError);
        // console.log(this.state.fullPlayer);
        console.log(this.state.player);

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

        let { player, nameError, fullPlayer } = this.state;

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
            </form>
        );
    }
}
 
export default Form;