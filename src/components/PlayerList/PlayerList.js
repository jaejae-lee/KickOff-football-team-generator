import React, { Component } from 'react';
import { Button, ListGroup, Image }  from 'react-bootstrap';

class PlayerList extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            fullPlayer: props.fullPlayer,
            playerList: props.playerList,
            teamGenerated: props.teamGenerated,
        }

        this.handlePlayerDelete = this.handlePlayerDelete.bind(this); 
    }

    handlePlayerDelete(i) {
        this.props.deletePlayer({
            payload : this.props.playerList,
            index : i
        });
    }
    
    render() { 
        let { playerList, teamGenerated } = this.props; 
 
        return (
            <>
            { playerList.length === 0 || teamGenerated ? null :
                <>
                <h2 className="listHeader">Today's players</h2>

                <ListGroup variant="flush">
                    { playerList.map((current, i) => {
                            return (
                                
                                <div className="listContainer" key={i}> 
                                    <ListGroup.Item className="listItems">{ current }</ListGroup.Item>

                                    <Button className="delBtn"
                                            onClick={()=>{this.handlePlayerDelete(i)}}>

                                    <Image src="../src/img/delete.svg.jpg" alt="delete icon" />
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

