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

export const generateTeams = (playerList, teamAsize) => {

    const teamA = []; 
    const teamB = []; 

    //loop playerlist and push items into each array 
    // for(let i = 0; i <= playerList.length; i++){
    //     //to equally distribute
    //     if(teamA.length === teamB.length){
    //         teamA.push(playerList[i]);
    //     }else{
    //         teamB.push(playerList[i]);
    //     }
    // }
 

    for(let i = 0; i <= playerList.length; i++){
     
        if(teamA.length < teamAsize ){
            teamA.push(playerList[i]);
        }else{
            teamB.push(playerList[i]);
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


  