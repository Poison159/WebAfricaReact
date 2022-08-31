import {createSlice} from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name:"counter",    
    initialState :{
        value:"true",
    },
    reducers: {
        increment : (state)=>{
            state.value = "true";
        },
        decrement : (state) => {
            state.value = "false";
        }
    }
});

export const {increment,decrement} = counterSlice.actions;
export default counterSlice.reducer;