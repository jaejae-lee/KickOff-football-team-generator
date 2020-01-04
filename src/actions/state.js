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
        /*
        console.log(array.length)
        array.map((item, index)=>{
            const j = Math.floor(Math.random() * array.length);
            array[array.length-1] = array.splice(j,1)[0]
        });*/

        for (let i = array.length - 1; i === 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    const arrPlayerList = playerList.playerList;
    const shuffledplayerList = shuffleArray(arrPlayerList)
    const teamA = []; 
    const teamB = []; 

    
    //이걸로 teamA 랑 teamB 두개 배열로 나눴는데, teamB에만 자꾸 맨 마지막에? undefinded가 하나씩 들어가요 
    
     for(let i = 0; i <= shuffledplayerList.length-1; i++){
         
            if(teamA.length <= shuffledplayerList.teamAsize){
                teamA.push(shuffledplayerList[i]);
            }else{
                teamB.push(shuffledplayerList[i]);
            }
    } 
    
    /*
    shuffledplayerList.map((item , index) => {
        if(teamA.length <= shuffledplayerList.teamAsize){
            teamA.push(shuffledplayerList[index]);
        }else{
            teamB.push(shuffledplayerList[index]);
        }
    })*/

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


  