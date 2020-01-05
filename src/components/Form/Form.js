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
            positionError: false,
            positionEmpty: false,
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
        this.setState({ 
            position:e.currentTarget.value,
            positionError: false
        });
   };
    
    handleSubmit(e) {
        e.preventDefault();

        let { playerList } = this.props;
        let { player, position } = this.state;

        let positions = playerList.map(playerobj => playerobj.position)
        let defenders = positions.filter(position => position === "defender")
        let goalkeepers = positions.filter(position => position === "goalkeeper")
        let strikers = positions.filter(position => position === "striker")
        let midfielders = positions.filter(position => position === "midfielder")

        this.props.handleSave(this.state); 

        if(player === "") {
            this.setState({
                nameError: true,
                positionError: this.state.positionError,
            })
        }
        if(position === ""){
            this.setState({
                positionEmpty: true,
                player: this.state.player
            })
        }
        if(position === "defender" && defenders.length == 2){
            this.setState({
                positionError: true,
            })
        }else if(position === "goalkeeper" && goalkeepers.length >= 2){
            this.setState({
                positionError: true,
            })
        }else if(position === "striker" && strikers.length >= 2){
            this.setState({
                positionError: true,
            })
        }else if(position === "midfielder" && midfielders.length >= 2){
            this.setState({
                positionError: true,
            })
        }else if(player !== ""){
            this.setState({
                nameError: false,
                positionError: this.state.positionError,
                player: "",
            })
        }else{
            this.setState({
                positionError: this.state.positionError,
            })
        }
        if(playerList.length === 9) {
            this.setState({
                fullPlayer: true
            })
        }   
    }
    
    render() { 

        let { player, position, nameError, positionError, positionEmpty } = this.state;

        return (
            <form onSubmit={ ()=>this.handleSubmit }
                  className="form">
                <InputGroup className="mb-3">
                    <FormControl placeholder="enter player's name"
                                 value={ player }
                                 onChange={ this.handleChangeName }  
                    />

                    { !nameError? null : 
                        <p className= "errorMessage"> Please enter player's name</p> 
                    }

                <ButtonToolbar className="positionToolBar">
                    <ToggleButtonGroup className="buttonContainer" type="radio" name="options">
                        <label className="positionLabel">I'm a ...</label>
                        <ToggleButton   className="button positionBtn" 
                                        value={"anything"} 
                                        onChange={ this.handleChangePosition }>Anything</ToggleButton>
                        <ToggleButton   className="button positionBtn" 
                                        value={"defender"} 
                                        onChange={ this.handleChangePosition }>Defender</ToggleButton>
                        <ToggleButton   className="button positionBtn" 
                                        value={"goalkeeper"} 
                                        onChange={ this.handleChangePosition }>Goalkeeper</ToggleButton>
                        <ToggleButton   className="button positionBtn" 
                                        value={"striker"} 
                                        onChange={ this.handleChangePosition }>Striker</ToggleButton>
                        <ToggleButton   className="button positionBtn" 
                                        value={"midfielder"} 
                                        onChange={ this.handleChangePosition }>Midfielder</ToggleButton>
                    </ToggleButtonGroup>
                </ButtonToolbar>

                    { !positionError ? null : 
                        <p className= "errorMessage"> Enough { position }s now, select other positions
                        </p> 
                    }

                    { !positionEmpty ? null : 
                        <p className= "errorMessage"> Please select your position</p> 
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