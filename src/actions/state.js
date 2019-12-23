export const addPlayer = (form) => {
        console.log('hi');
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
  