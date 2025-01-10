import { createSlice } from "@reduxjs/toolkit"

export type CounterState = {
    data: number
}

const initialState: CounterState = {
    data: 40
}

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state, action) => {
            state.data += action.payload
        },
        decrement: (state, action) => {
            state.data -= action.payload
        }
    }
})


export const {increment, decrement} = counterSlice.actions;
