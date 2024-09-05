import { Routes, Route, useLocation } from 'react-router-dom'
import { Home, NotFound, Todos, LogIn } from '../pages'
import { AuthRoute, PrivateRoute } from '../routes'

const AppRouter = () => {
	const location = useLocation()
	return (
		<Routes location={location}>
			<Route path="/" element={<Home />} />
			<Route path="/todos" element={<PrivateRoute component={<Todos />} />} />
			<Route path="/login" element={<AuthRoute component={<LogIn />} />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	)
}

export default AppRouter
