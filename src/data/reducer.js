import initial from './initial';

const reset = (initial, state) => {
    return {
        ...initial,
        submitted: !state.submitted
    };
}

const addPlayer = (state, action) => ({
    ...state, 
    player: action.form.player,
    nameError: action.form.nameError,
    submitted: action.form.submitted,
    playerList : [...action.form.playerList, action.form.player]
});

const generateTeams = (state, action) => ({
    ...state, 

    teamA: action.payload.teamA,
    teamB: action.payload.teamB,

});

const reducer = (state, action) => {
    switch (action.type){
         case "addPlayer": return addPlayer(state, action);
         case "generateTeams": return generateTeams(state, action);
         case "reset": return reset(initial);
         default: return state;
    };
};

// console.log(
//     // if the previous value is 1, we should get 2 if we increment
//     reducer({ player: "a" }, { type: "addPlayer" })
// );

export default reducer;