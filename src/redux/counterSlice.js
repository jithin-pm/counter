import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counterApp',
    initialState: {
        value: 0
    },
    reducers: {
        increment: (state,action) => {
            console.log('Button clicked');
            state.value = state.value + action.payload;
        },
        decrement: (state,action) => {

            state.value = state.value - action.payload;
        },
        reset: (state) => {

            state.value = state.value = 0;

        }
    }

})

export const { increment } = counterSlice.actions;
export default counterSlice.reducer;
export const { decrement } = counterSlice.actions;
export const { reset } = counterSlice.actions;