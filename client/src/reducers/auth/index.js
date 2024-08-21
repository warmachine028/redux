import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
	loading: false,
	user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
	error: null
}
export const login = createAsyncThunk(
	'auth/login', // prefix
	async (credentials, thunkAPI) => {
		try {
			const response = await axios.post('https://phoenix-server.vercel.app/auth/signin', credentials)
			const { data } = response
			return data
		} catch (error) {
			const { data } = error.response
			return thunkAPI.rejectWithValue(data.error)
		}
	}
)

export const logout = createAsyncThunk(
	'auth/logout', // prefix
	() => localStorage.removeItem('user')
)

export const slice = createSlice({
	name: 'auth',
	initialState,
	extraReducers: (builder) => {
		builder //
			.addCase(login.pending, (state) => {
				state.loading = true
			}) //
			.addCase(login.fulfilled, (state, action) => {
				state.loading = false
				state.user = action.payload
			}) //
			.addCase(login.rejected, (state, action) => {
				state.loading = false
				state.user = null
				state.error = action.error
			})
			.addCase(logout.fulfilled, (state) => {
				state.loading = false
				state.user = null
				state.error = null
			})
	}

	// reducers: {
	// 	login:
	// }
})
// export const { login } = slice.actions
export default slice.reducer
