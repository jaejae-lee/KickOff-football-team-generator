import initial from './initial';

const reset = (initial) => {
    return {
        ...initial,
    };
}

const addPlayer = (state, action) => ({
    ...state, 
    player: action.form.player,
    position: action.form.position,
    nameError: action.form.nameError,
    submitted: action.form.submitted,

    
    // playerList : action.form.player ? [...action.form.playerList, action.form.player] : [...action.form.playerList]

    playerList : [
        ...action.form.playerList, 

        { 
            player: action.form.player,
            position: action.form.position
        }
                
    ] 
});



const generateTeams = (state, action) => ({
    ...state, 
    teamA: action.payload.teamA,
    teamB: action.payload.teamB,
});

const deletePlayer = (state, action) => ({
   ...state,
   playerList: action.playerList
});

const reducer = (state, action) => {
    switch (action.type){
         case "addPlayer": return addPlayer(state, action);
         case "generateTeams": return generateTeams(state, action);
         case "deletePlayer": return deletePlayer(state, action);
         case "reset": return reset(initial);
         default: return state;
    };
};

export default reducer;