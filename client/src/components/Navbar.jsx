import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

const Navbar = () => {
	const [scrollingDown, setScrollingDown] = useState(false)
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
			<div className="" />
			<Link to="/login">Login</Link>
		</header>
	)
}

export default Navbar
