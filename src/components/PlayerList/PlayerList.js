import React from 'react';
import { ListGroup }  from 'react-bootstrap';

const PlayerList = ({ playerList }) => (
    <>
        <h2 className="alert alert-success">Today's players</h2>

        <ListGroup variant="flush">
                {playerList.map((current, i) => {
                    console.log(current)
                    return (
                        <p key={i}> 
                            <ListGroup.Item>{current}</ListGroup.Item>
                        </p>
                        )
                })}
        </ListGroup>
    </>
);

export default PlayerList;