import React, { Component } from 'react';
import { InputGroup, FormControl, Button }  from 'react-bootstrap';

class Form extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            player: props.player,
            playerList: props.playerList,
            nameError: props.nameError,
            submitted: props.submitted,
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
      
        if (this.state.player !== ""){
            console.log(this.state.player);
            this.setState({
                nameError: false,
                submitted: true,
                playerList: [...this.state.playerList, this.state.player],
                player: '',
                submitted: true
            })
        }else {
            this.setState({
                nameError: true,
                submitted: false
            })
        }
        this.props.handleSave({...this.state}); 
        //this.props.handleSave(...this.state); 
    }
    
    render() { 

        let { player, nameError } = this.state;

        return (
            <>
            <form onSubmit={ this.handleSubmit }>
            <InputGroup className="mb-3">
                <FormControl
                placeholder="enter player's name"
                value={ player }
                onChange={ this.handleChangeName }  
                />
        
            </InputGroup>
            <p style={{ display: nameError ? "block" : "none"}}> Please enter player's name </p>

            <InputGroup className="mb-3">
                <Button variant="primary" size="lg" block
                        onClick={ this.handleSubmit }
                >Add this player</Button>
            </InputGroup>
            </form>
            </>
        );
    }
}
 
export default Form;