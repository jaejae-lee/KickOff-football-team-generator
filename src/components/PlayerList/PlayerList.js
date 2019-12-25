import React, { Component } from 'react';
import { Button, ListGroup }  from 'react-bootstrap';

class PlayerList extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            fullPlayer: props.fullPlayer,
            playerList: props.playerList,
        }

        this.handlePlayerDelete = this.handlePlayerDelete.bind(this); 
    }
    
    handlePlayerDelete(e) {
        e.preventDefault();
        console.log(this.props.playerList);
        console.log(this.state.playerList);
        this.props.deletePlayer(this.props.playerList);
    }
    
    render() { 
        let { playerList } = this.props;

        return (
            <>
                <h2 className="listHeader">Today's players</h2>

                <ListGroup variant="flush">
                    {playerList.map((current, i) => {
                            return (
                                <div className="listContainer"
                                key={i}> 
                                    <ListGroup.Item className="listItems">{current}</ListGroup.Item>
                                    <Button className="delBtn"
                                            onClick={ this.handlePlayerDelete }>Delete</Button>
                                </div>
                                )
                        }) 
                    }
                </ListGroup>
            </>    
        );
    }
}
 
export default PlayerList;

