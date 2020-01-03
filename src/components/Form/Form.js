import React, { Component } from 'react';
import { InputGroup, FormControl, Button, ButtonToolbar, ToggleButtonGroup, ToggleButton }  from 'react-bootstrap';

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
                    {/* <DropdownButton
                    as={InputGroup.Append}
                    variant="outline-secondary"
                    title="Dropdown"
                    id="input-group-dropdown-2"
                    >
                    <Dropdown.Item>Position1</Dropdown.Item>
                    <Dropdown.Item>Position2</Dropdown.Item>
                    <Dropdown.Item>Position3</Dropdown.Item>
                    <Dropdown.Item>Position4</Dropdown.Item>
                    <Dropdown.Item>Position5</Dropdown.Item>
                    </DropdownButton> */}

                    {/* <ButtonToolbar aria-label="Toolbar with button groups">
                    <ButtonGroup className="positionBtnGroup mr-2" aria-label="First group">
                        <Button className="button">Defender</Button>
                        <Button className="button">GoalKeeper</Button>
                        <Button className="button">Striker</Button>
                        <Button className="button">MidFielder</Button>
                        <Button className="button">else</Button>
                    </ButtonGroup>
                    </ButtonToolbar> */}

                    <ButtonToolbar>
                        <ToggleButtonGroup className="buttonContainer" type="radio" name="options" defaultValue={1}>
                            <ToggleButton className="button positionBtn" value={1}>Anything</ToggleButton>
                            <ToggleButton className="button positionBtn" value={2}>Defender</ToggleButton>
                            <ToggleButton className="button positionBtn" value={3}>Goalkeeper</ToggleButton>
                            <ToggleButton className="button positionBtn" value={4}>Striker</ToggleButton>
                            <ToggleButton className="button positionBtn" value={5}>Midfielder</ToggleButton>
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