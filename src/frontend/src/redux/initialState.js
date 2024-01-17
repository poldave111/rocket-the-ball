export const initialGameState = {
        player1: '',
        player2: '',
        targetScore: '', 
        player1p: 0,
        player2p: 0,
        time: 0,
        advantage: false,
}

export const gameResults = []

export const playerList = []

const initialState = {
    game : initialGameState,
    results : gameResults,
    playerList : playerList,
}


export default initialState;