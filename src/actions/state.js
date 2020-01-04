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

    //generated two arrays
    shuffledplayerList.map((item , index) => {
        if(teamA.length < playerList.teamAsize){
            teamA.push(shuffledplayerList[index]);
        }else{
            teamB.push(shuffledplayerList[index]);
        }
    })

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


  