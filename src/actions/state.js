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
    console.log('generateTeams');

    const teamA = []; 
    const teamB = []; 

    //loop playerlist and push items into each array 
    for(let i = 0; i <= playerList.length; i++){
        //to equally distribute
        if(teamA.length == teamB.length){
            teamA.push(playerList[i]);
        }else{
            teamB.push(playerList[i]);
        }
    }

    return {
        type: "generateTeams",
        payload : { teamA, teamB } 
        //payload id an object
    };
};


// export const saveSettings = (data) => {
//     return {
//       type: "saveSettings",
//       player1Name: data.player_1.name,
//       player2Name: data.player_2.name,
//       winningScore: data.winning_score,
//       alternate: data.change_serve,
//       currentGameID : data.id,
//     }; 
//   };
  