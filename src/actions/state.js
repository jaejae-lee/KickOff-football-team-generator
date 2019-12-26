import { statement } from "@babel/template";

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
    };
};

export const deletePlayer = (playerList) => {

    // const newPlayerList = playerList.splice(playerList.index, 1)
    // const newPlayerList = playerList.filter(player => player.i !== i)

    // return {
    //     type: "deletePlayer",
    //     playerList :  newPlayerList 
    // }
}; 


  