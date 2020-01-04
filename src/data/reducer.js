import initial from './initial';

const reset = (initial) => {
    return {
        ...initial,
    };
}

const addPlayer = (state, action) => {
    const playerObj = {
        player: action.form.player,
        position: action.form.position,  
    }

    return {
        ...state,
        playerList: action.form.player ?[...state.playerList, playerObj] : [...state.playerList]
    }
}

const generateTeams = (state, action) => ({
    ...state, 
    teamA: action.payload.teamA,
    teamB: action.payload.teamB,
});

const deletePlayer = (state, action) => ({
   ...state,
   playerList: action.playerList
});

// const initialState = {
//     playerList: []
// };

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