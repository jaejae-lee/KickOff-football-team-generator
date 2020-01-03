import React, { Component } from 'react';
import { InputGroup, FormControl, Button, ButtonToolbar, ToggleButtonGroup, ToggleButton }  from 'react-bootstrap';

class Form extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            player: props.player,
            position: props.position,
            playerList: props.playerList,
            fullPlayer: props.fullPlayer,
            nameError: false,
        }

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this); 
        this.handleChangePosition = this.handleChangePosition.bind(this); 
    }

    handleChangeName(e) {
        this.setState({
            player: e.currentTarget.value,  
        })
    }

    handleChangePosition(e){
        this.setState({ position:e.currentTarget.value });
   };
    
    handleSubmit(e) {
        e.preventDefault();
        
        let { playerList } = this.props;
        console.log(playerList);

        this.props.handleSave(this.state); 

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
            
            <form onSubmit={ ()=>this.handleSubmit }
                  className="form">
                <InputGroup className="mb-3">
                    <FormControl placeholder="enter player's name"
                                 value={ player }
                                 onChange={ this.handleChangeName }  
                    />

                <ButtonToolbar className="positionToolBar">
                    <ToggleButtonGroup className="buttonContainer" type="radio" name="options" defaultValue={1}>
                        <label className="positionLabel">I'm a</label>
                        <ToggleButton className="button positionBtn" 
                                        value={"anything"} 
                                        onChange={ this.handleChangePosition }>Anything</ToggleButton>
                        <ToggleButton className="button positionBtn" 
                                        value={"defender"} 
                                        onChange={ this.handleChangePosition }>Defender</ToggleButton>
                        <ToggleButton className="button positionBtn" 
                                        value={"goalkeeper"} 
                                        onChange={ this.handleChangePosition }>Goalkeeper</ToggleButton>
                        <ToggleButton className="button positionBtn" 
                                        value={"striker"} 
                                        onChange={ this.handleChangePosition }>Striker</ToggleButton>
                        <ToggleButton className="button positionBtn" 
                                        value={"midfielder"} 
                                        onChange={ this.handleChangePosition }>Midfielder</ToggleButton>
                    </ToggleButtonGroup>
                </ButtonToolbar>

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