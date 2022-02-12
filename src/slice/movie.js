import {createSlice ,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios';

const initialState={
    movie:{},
   


};

const movieDetailSlice=createSlice({
    name:"movie",
    initialState,
    //this will not generate action creaters ,it will only handle action types(used here as our action creater is already difined  )
    reducers:{
        addMovie(state,action){
            state.movie=action.payload
        }

    },

   

});
export const{addMovie}=movieDetailSlice.actions
export default movieDetailSlice.reducer;