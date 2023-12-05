export const initialGameState = {
        player1: '',
        player2: '',
        targetScore: '', 
        player1p: 0,
        player2p: 0,
        time: 0,
}

export const gameResults = []

const initialState = {
    game : initialGameState,
    results : gameResults,
}


export default initialState;