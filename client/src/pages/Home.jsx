import { useState } from 'react'
import { Link } from 'react-router-dom'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../styles/Home.css'

const Home = () => {
	const [count, setCount] = useState(0)

	return (
		<main className="app">
			<div className="flex justify-center">
				<a href="https://vitejs.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
				<a href="https://redux.dev" target="_blank">
					<img src="https://redux.js.org/img/redux.svg" className="logo redux" alt="Redux logo" />
				</a>
			</div>
			<h1>Vite + React + Redux</h1>
			<div className="card">
				<div className="flex gap-2 justify-center my-3">
					<button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
					<button>
						<Link to="/todos" className="text-white hover:text-white">
							Todo
						</Link>
					</button>
				</div>
				<p>
					Edit <code>src/App.jsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">Click on the Vite, React and Redux logos to learn more</p>
		</main>
	)
}

export default Home
