import React from 'react';
import { ListGroup }  from 'react-bootstrap';

const PlayerList = ({ playerList }) => (
    <>
        <h2 className="listHeader">Today's players</h2>

        <ListGroup variant="flush">
                {playerList.map((current, i) => {
                    return (
                        <p key={i}> 
                            <ListGroup.Item className="listItems">{current}</ListGroup.Item>
                        </p>
                        )
                })}
        </ListGroup>
    </> 
);

export default PlayerList;