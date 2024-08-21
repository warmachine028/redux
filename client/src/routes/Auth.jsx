import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const Auth = ({ component }) => {
	const { user } = useSelector((state) => state.userReducer)
	return user ? <Navigate to="/" /> : component
}

export default Auth
