import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name:"user",    
    initialState :{
        user: {isLoggedIn:false},
    },
    reducers: {
        toggleLogIn : (state, action)=>{
            state.user  = action.payload;
        },
        toggleLogOut : (state) => {
            state.user  = null;
        }
    }
});

export const {toggleLogIn,toggleLogOut} = userSlice.actions;
export const selectUser = (state) => state.user.user;
export default userSlice.reducer;