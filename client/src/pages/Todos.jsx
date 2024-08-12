import { Form, Todo } from '../components'

const Todos = () => {
	return (
		<main>
			<Form />
			{[].map(todo => <Todo key={todo.id} />)}
		</main>
	)
}

export default Todos
