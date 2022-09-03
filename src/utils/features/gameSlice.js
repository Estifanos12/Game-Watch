import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    game: [],
}

export const gameSlice = createSlice({
    name: "game",
    initialState,
    reducers: {
        addGameList: (state,action)=>{
            state.game = action.payload
        }
    }
})

export const {addGameList} = gameSlice.actions
export default gameSlice.reducer