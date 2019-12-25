export const addPlayer = (form) => {
        return {
            type: "addPlayer",
            form : form
        };
    };
//what is form para doing ?

export const reset = () => {
    return {
      type: "reset",
    }; 
};

export const generateTeams = (playerList) => {

    const teamA = []; 
    const teamB = []; 

    //loop playerlist and push items into each array 
    for(let i = 0; i <= playerList.length; i++){
        //to equally distribute
        if(teamA.length === teamB.length){
            teamA.push(playerList[i]);
        }else{
            teamB.push(playerList[i]);
        }
    }

    return {
        type: "generateTeams",
        payload : { teamA, teamB } 
        //payload is an object
    };
};

export const deletePlayer = (playerList) => {
    return {
      type: "deletePlayer",
      payload : { playerList } 
    }; 
};

  