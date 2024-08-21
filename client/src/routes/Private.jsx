import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const Private = ({ component }) => {
	const { user } = useSelector((state) => state.userReducer)
	return user ? component : <Navigate to="/login" />
}

export default Private
