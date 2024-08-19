import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
	todos: [
		{
			id: nanoid(),
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
				completed: false,
				...action.payload
			}
			state.todos.push(todo)
		},
		remove: (state, action) => {
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

export const { create, update, remove } = slice.actions
export default slice.reducer
