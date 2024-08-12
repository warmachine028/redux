import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
	todos: [
		{
			id: 1,
			text: 'Get the trash out',
			completed: false
		}
	]
}

export const slice = createSlice({
	name: 'todo',
	initialState,
	reducers: {
		create: (state, action) => {
			const todo = {
				id: nanoid(),
				...action.payload
			}
			state.todos.push(todo)
		},
		delete: (state, action) => {
			state.todos = state.todos.filter((todo) => todo.id !== action.payload.id)
		},
		update: (state, action) => {
			const index = state.todos.findIndex((todo) => todo.id === action.payload.id)
			if (index === -1) {
				return
			}
			state.todos[index] = { ...state.todos[index], ...action.payload }
		}
	}
})

export const { create, update, delete: _delete } = slice.actions
export default slice.reducer