import { combineReducers, configureStore } from '@reduxjs/toolkit'
import todoReducer from '../reducers/todo'

const reducer = combineReducers({
	todoReducer
	// Add more reducers here
})
export const store = configureStore({ reducer })
