import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    if(!response.ok) {
        throw new Error('response not ok')
    }
    const data = await response.json()
    return data.reverse()
})

export const findMaxId = (items) => {
    return items.reduce((max, item) => item.id > max ? item.id : max, -1)
}

const initialState = {
    data: [],
    loading: false,
    error: null
}

const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        addPost: (state, action) => {
            state.data.unshift(action.payload)
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.data = action.payload;
                state.loading = false
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            });
    }
})

export const { addPost } = postSlice.actions
export default postSlice.reducer