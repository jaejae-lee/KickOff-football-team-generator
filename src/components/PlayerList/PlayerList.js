import React from 'react';
import { ListGroup }  from 'react-bootstrap';

const PlayerList = ({ playerList }) => (
    <>
        <h2 className="alert alert-success">Today's players</h2>

        <ListGroup variant="flush">
            <ListGroup.Item>{ playerList }</ListGroup.Item>
        </ListGroup> 

        <ListGroup variant="flush">
                {playerList.map((current, i) => (
                <ListGroup.Item key={i}> 
                    <ListGroup.Item> 
                        {current.playerList}
                    </ListGroup.Item>
                </ListGroup.Item>
                )) }
        </ListGroup>
    </>
);

export default PlayerList;