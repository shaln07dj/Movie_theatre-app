import {createSlice ,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios';

const initialState={
    movies:[],
    status:null,
    error:null


};

export const movieFetch=createAsyncThunk(
    "moviess/MovieFetch", // this creates a middleware
   async(id=null,{rejectWithValue})=>{
       try{
     const response = await axios.get('http://localhost:8000/api/movies'
     )
        return response?.data;}
        catch(error){
            return rejectWithValue("error occured")
        }
    }
)
const movieSlice=createSlice({
    name:"movies",
    initialState,
    //this will not generate action creaters ,it will only handle action types(used here as our action creater is already difined  )
    reducers:{},

    extraReducers:{
        [movieFetch.pending]:(state,action)=>{
            state.status="pending"
        },
        [movieFetch.fulfilled]:(state,action)=>{
            state.status="sucess"
            state.movies=action.payload
        },
        [movieFetch.rejected]:(state,action)=>{
            state.status="rejected"
            state.error=action.payload
        }
        
    }

});

//export const {modify}=cartSlice.actions
export default movieSlice.reducer;
 
