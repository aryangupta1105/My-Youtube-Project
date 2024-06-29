import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search", 
    initialState : {

    }, 
    reducers: {
        cacheResults: (state , action)=>{
            // object.assign merges two objects..
           state = Object.assign(state , action.payload);
        } 
    }
});

export const {cacheResults} = searchSlice.actions;
export default searchSlice.reducer;