export const addPlayer = (form) => {
    return {
        type: "addPlayer",
        form : form
    };
};

export const reset = () => {
    return {
      type: "reset",
    }; 
};

export const generateTeams = (playerList) => {

    console.log(playerList.playerList.length, "playerlist")

    const teamA = []; 
    const teamB = []; 

    for(let i = 0; i <= playerList.playerList.length; i++){
        if(teamA.length === teamB.length){
            teamA.push(playerList.playerList[i]);
        }else{
            teamB.push(playerList.playerList[i]);
        }
    }
 
    // for(let i = 0; i <= playerList.length; i++){
     
    //     if(playerList.length < teamAsize ){
    //         teamA.push(playerList[i]);
    //     }else{
    //         teamB.push(playerList[i]);
    //     }
    // }

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


  