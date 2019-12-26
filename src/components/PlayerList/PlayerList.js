import React, { Component } from 'react';
import { Button, ListGroup }  from 'react-bootstrap';

class PlayerList extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            fullPlayer: props.fullPlayer,
            playerList: props.playerList,
            submitted: props.submitted,
        }

        this.handlePlayerDelete = this.handlePlayerDelete.bind(this); 
    }

    handlePlayerDelete(e) {
        e.preventDefault();
        this.props.deletePlayer(this.props.playerList);
    }
    
    render() { 
        let { playerList } = this.props; 
 
        return (
            <>
            { playerList.length === 0 ? null :
                <>
                <h2 className="listHeader">Today's players</h2>

                <ListGroup variant="flush">
                    { playerList.map((current, i) => {
                            return (

                                <div className="listContainer" key={i}> 
                                    <ListGroup.Item className="listItems">{ current}</ListGroup.Item>

                                    <Button className="delBtn"
                                            onClick={ this.handlePlayerDelete}>

                                     <img src="../img/delete.svg" alt="delete"/>
                                    </Button>
                                </div>
                                )
                        }) 
                    }
                </ListGroup>
                </>
            }  
            </> 
        );
    }
}
 
export default PlayerList;

