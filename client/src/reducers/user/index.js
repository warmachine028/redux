import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { toast } from 'react-toastify'

const initialState = {
	loading: false,
	user: null,
	error: null
}
export const login = createAsyncThunk(
	'user/login', // prefix
	async (credentials) => {
		const response = await axios.post('https://www.example.com/auth/login', credentials)
		const data = await response.json()
		localStorage.setItem('user', JSON.stringify(data))
		return data
	}
)
export const slice = createSlice({
	name: 'user',
	initialState,
	extraReducers: (builder) => {
		builder //
			.addCase(login.pending, (state) => {
				state.loading = true
				state.user = null
				state.error = null
			}) //
			.addCase(login.fulfilled, (state, action) => {
				state.loading = false
				state.user = action.payload
				state.error = null
			}) //
			.addCase(login.rejected, (state, action) => {
				state.loading = false
				state.user = null
				state.error = action.error
				console.error(action.error)
				toast.error(action.error.message)
			})
	}

	// reducers: {
	// 	login:
	// }
})
// export const { login } = slice.actions
export default slice.reducer
