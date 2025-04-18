import { useSelector } from 'react-redux'
import { Navigate } from 'react-router'

const Auth = ({ component }) => {
	const { user } = useSelector((state) => state.authReducer)
	return user ? <Navigate to="/" /> : component
}

export default Auth
