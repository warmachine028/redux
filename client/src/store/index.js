import { combineReducers, configureStore } from '@reduxjs/toolkit'
import todoReducer from '../reducers/todo'
import userReducer from '../reducers/user'


const reducer = combineReducers({
	todoReducer,
	userReducer
	// Add more reducers here
})
export const store = configureStore({ reducer })
