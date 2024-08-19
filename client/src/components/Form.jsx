import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { create as createTodo } from '../reducers/todo'

const Form = () => {
	const initialData = { text: '' }
	const dispatch = useDispatch()
	const [formData, setFormData] = useState(initialData)
	const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })
	
	const handleSubmit = (e) => {
		e.preventDefault()
		dispatch(createTodo(formData))
		setFormData(initialData)
	}

	return (
		<form
			className="flex w-full max-w-sm items-center gap-2 rounded-lg p-2 shadow-2xl ring-1 ring-black"
			onSubmit={handleSubmit}
		>
			<h1 className="hidden w-full text-3xl">Todo</h1>
			<div className="flex flex-col items-start gap-3 w-2/3">
				<label htmlFor="text" className="hidden">
					Enter your todo
				</label>
				<input
					type="text"
					required
					placeholder="eg: Take dog for a walk"
					onChange={handleChange}
					id="text"
					name="text"
					className="h-12 rounded-md p-2 placeholder:italic w-full bg-slate-700 text-white dark:bg-gray-950"
					value={formData.text}
				/>
			</div>
			<button type="submit" className="rounded-md bg-purple-700 text-white">
				Add Todo
			</button>
		</form>
	)
}

export default Form
