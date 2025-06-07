import { createSlice } from '@reduxjs/toolkit';

export const authSlices = createSlice({

 name: 'auth',
 initialState:{

    value:{
        email:"",
        localId:"",
    }
 },reducers:{

    setUser:(state,action)=>{
        state.value.email=action.payload.email
        state.value.localId=action.payload.localId
    },
    clearUser:(state)=>{
        state.value.email=""
        state.value.localId=""
    }
 }



})

export const { setUser, logout } = authSlices.actions;
export default authSlices.reducer;
