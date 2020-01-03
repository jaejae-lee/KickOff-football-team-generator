export const addPlayer = (form) => {
    return {
        type: "addPlayer",
        form
    };
};

export const reset = () => {
    return {
      type: "reset",
    }; 
};

export const generateTeams = (playerList) => {

    const teamA = []; 
    const teamB = []; 

     for(let i = 0; i <= playerList.playerList.length; i++){
        if(teamA.length < playerList.teamAsize){
            teamA.push(playerList.playerList[i]);
        }else{
            teamB.push(playerList.playerList[i]);
        }
    }
    
    return {
        type: "generateTeams",
        payload : { teamA, teamB }
    };
};

export const deletePlayer = (playerList) => {

    const newPlayerList = playerList.payload.filter((player,index) => index !== playerList.index)
    
    return {
        type: "deletePlayer",
        playerList : newPlayerList 
    }
}; 


  