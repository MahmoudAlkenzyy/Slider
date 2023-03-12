import{ createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const getFilms = createAsyncThunk('movie/getMovies', async () => {
 
    try {
        const res = await fetch('http://localhost:3004/bookss');
    const data = res.json();
    return data
    } catch (error) {
        
    }
    

})


const cardSlice = createSlice({
    name: 'movie',
    initialState:{movie:[ ]},
    extraReducers: {
        [getFilms.pending]:(state,action)=> {},
        [getFilms.fulfilled]: (state,action)=>{
            state.movie = action.payload
           
        },
        [getFilms.rejected]:(state,action)=>{}
        
    }
})

export default cardSlice.reducer