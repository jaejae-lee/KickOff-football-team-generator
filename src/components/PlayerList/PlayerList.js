import React, { Component } from 'react';
import { Button, ListGroup, Image }  from 'react-bootstrap';

class PlayerList extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            fullPlayer: props.fullPlayer,
            position: props.position,
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
        console.log(playerList); 

        return (
            <>
            { playerList.length === 0 || teamGenerated ? null :
                <>
                <h2 className="listHeader">Today's players</h2>

                <ListGroup variant="flush">
                    { playerList.map((current, i) => {
                        console.log(current, "current");
                        console.log(i, "i");
                            return (
                                <div className="listContainer" key={i}> 
                                    <ListGroup.Item className="listItems">{ current.player }{ current.position }</ListGroup.Item>

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

