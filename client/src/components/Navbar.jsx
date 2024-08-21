import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'
import { TbBrandRedux } from 'react-icons/tb'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../reducers/auth'
import { toast } from 'react-toastify'

const Navbar = () => {
	const [scrollingDown, setScrollingDown] = useState(false)
	const dispatch = useDispatch()
	const reducer = useSelector((state) => state.authReducer)
	const location = useLocation()
	const currentUser = reducer.user
	const inAuth = location.pathname === '/login'

	const handleLogout = (event) => {
		event.preventDefault()
		dispatch(logout()).then(() => {
			toast.success('Logged out successfully')
		})
	}

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY

			// Determine if scrolling down
			setScrollingDown(scrollTop > (window.lastScrollTop || 0))
			window.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop
		}

		// Listen for scroll events
		window.addEventListener('scroll', handleScroll)

		// Clean up event listener
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return (
		<header
			className={twMerge(
				'sticky top-0 flex min-h-14 items-center justify-between px-5',
				scrollingDown && 'shadow-lg'
			)}
		>
			<Link to="/" className="inline-flex items-center gap-2">
				Redux
				<span>
					<TbBrandRedux />
				</span>
			</Link>
			{!inAuth && (currentUser ? <button onClick={handleLogout}>Logout</button> : <Link to="/login">Login</Link>)}
		</header>
	)
}

export default Navbar
