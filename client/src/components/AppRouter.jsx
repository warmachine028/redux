import { Routes, Route, useLocation } from 'react-router-dom'
import { Home, Todos } from '../pages'

const AppRouter = () => {
	const location = useLocation()
	return (
		<Routes location={location}>
			<Route path="/" element={<Home />} />
			<Route path="/todos" element={<Todos />} />
		</Routes>
	)
}

export default AppRouter
