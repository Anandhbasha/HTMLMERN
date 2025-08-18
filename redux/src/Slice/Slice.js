import { createSlice } from "@reduxjs/toolkit";

export const countSlice = createSlice(
    {
        name:"counting",
        initialState:{count:0},
        reducers:{
            increment:(state,action)=>{state.count += action.payload},
            decrement:(state,action)=>{state.count -= action.payload},
            reset:(state)=>{state.count = 0}
        }
    }
)

export const {increment,decrement,reset} = countSlice.actions