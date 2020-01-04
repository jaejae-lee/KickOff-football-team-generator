import { exportDefaultSpecifier } from "@babel/types";

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

    function shuffleArray (array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    const arrPlayerList = playerList.playerList;
    const shuffledplayerList = shuffleArray(arrPlayerList)
    const teamA = []; 
    const teamB = []; 

    console.log(shuffledplayerList, "shuffledplayerList") //[{},{},{}]
    console.log(playerList, "playerList") //{}
    console.log(playerList.playerList, "playerList.playerList") //[{},{},{}]
    console.log(playerList.playerList[0], "playerList[0]")//{ player: , position; 0}
    console.log(playerList.playerList[0].player, "playerList[0].player")

     for(let i = 0; i <= shuffledplayerList.length; i++){
         
            if(teamA.length <= shuffledplayerList.teamAsize){
                teamA.push(shuffledplayerList[i]);
            }else{
                teamB.push(shuffledplayerList[i]);
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


  