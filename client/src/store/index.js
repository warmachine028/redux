import { combineReducers, configureStore } from '@reduxjs/toolkit'
import todoReducer from '../reducers/todo'
import authReducer from '../reducers/auth'

const reducer = combineReducers({
	authReducer,
	todoReducer
	// Add more reducers here
})
export const store = configureStore({ reducer })
