import { Navigate } from 'react-router-dom'
// import { useAuth } from '../hooks'

const Private = ({ component }) => {
    // const { user } = useAuth()
    const user = {}
	return user ? component : <Navigate to="/login" />
}

export default Private
