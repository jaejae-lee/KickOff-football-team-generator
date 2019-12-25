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
            fullPlayer: props.fullPlayer,
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
        console.log(this.state.submitted);
        console.log(this.state.playerList.length);
        console.log(this.state.nameError);
        console.log(this.state.fullPlayer);

        if(this.state.player === "") {
            this.setState({
                nameError: true,
            })
        }
        else if (this.state.player !== ""){
            this.setState({
                nameError: false,
                submitted: true,
                playerList: [...this.state.playerList, this.state.player],
                player: '',
            })
        }
        if (this.state.playerList.length === 9){
            this.setState({
                nameError: false,
                submitted: true,
                fullPlayer: true,
            })
        }
    
        this.props.handleSave({...this.state}); 
    }
    
    render() { 

        let { player, nameError } = this.state;

        return (
            
            <form onSubmit={ this.handleSubmit }>
                <InputGroup className="mb-3">
                    <FormControl
                    placeholder="enter player's name"
                    value={ player }
                    onChange={ this.handleChangeName }  
                    />
            
                </InputGroup>
                
                    <p className= "errorMessage" 
                        style={{ display: nameError ? "block" : "none"}} > Please enter player's name
                    </p>

                <InputGroup className="mb-3">
                    <Button className = "button"
                            variant="primary" size="lg" block
                            onClick={ this.handleSubmit }
                    >Add this player</Button>
                </InputGroup> 
                
            </form>
        );
    }
}
 
export default Form;