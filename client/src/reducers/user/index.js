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
		try {
			const response = await axios.post('https://phoenix-server.vercel.app/auth/signin', credentials)
			const { data } = response
			return data
		} catch (error) {
			const { data } = error.response
			throw new Error(data.error)
		}
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
				localStorage.setItem('user', JSON.stringify(state.user))
				toast.success('Logged in successfully')
			}) //
			.addCase(login.rejected, (state, action) => {
				state.loading = false
				state.user = null
				state.error = action.error
				toast.error(state.error.message)
			})
	}

	// reducers: {
	// 	login:
	// }
})
// export const { login } = slice.actions
export default slice.reducer
