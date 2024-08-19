import { useSelector } from 'react-redux'
import { Form, Todo } from '../components'
import { FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Todos = () => {
	const reducer = useSelector((state) => state.todoReducer)
	const todos = reducer.todos
	return (
		<main className="flex flex-col items-center gap-10">
			<div className="inline-flex w-full max-w-sm items-center justify-between">
				<h3 className="text-3xl">Todos</h3>
				<Link to="/" className="text-inherit">
					<FaHome className="size-7" />
					<span className="hidden">home</span>
				</Link>
			</div>
			<Form />
			<ul className="flex w-full flex-col gap-3">
				{todos?.map((todo) => (
					<Todo key={todo.id} data={todo} />
				))}
			</ul>
		</main>
	)
}

export default Todos
