import { Provider } from 'react-redux'
import { AppRouter, Navbar } from './components'
import { store } from './store'
import { ToastContainer, toast } from 'react-toastify'

const App = () => {
	return (
		<Provider store={store}>
			<Navbar />
			<AppRouter />
			<ToastContainer
				newestOnTop
				closeOnClick
				pauseOnFocusLoss={false}
				draggable
				pauseOnHover
				theme="dark"
			/>
		</Provider>
	)
}

export default App
