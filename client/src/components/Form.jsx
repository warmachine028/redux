import { useState } from 'react'

const Form = () => {
	const initialData = {
		text: '',
		completed: false
	}
	const [formData, setFormData] = useState(initialData)
	const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

	const handleSubmit = (e) => e.preventDefault()
	
	return (
		<form
			className="mt-12 flex flex-col ring-1 ring-black items-start gap-2 rounded-lg p-5 shadow-2xl "
			onSubmit={handleSubmit}
		>
			<h1 className="text-3xl w-full">Todo</h1>
			<div className="flex flex-col items-start gap-3">
				<label htmlFor="text">Enter your todo</label>
				<input
					type="text"
					required
					placeholder="Take Sherdil for a walk"
					onChange={handleChange}
					id="text"
					name="text"
					className="p-2"
					value={formData.name}
				/>
			</div>
			<div className="flex justify-center gap-3">
				<label htmlFor="completed">Completed</label>
				<input
					type="checkbox"
					name="completed"
					id="completed"
					onChange={handleChange}
					value={formData.completed}
					className="w-5 accent-green-600 hover:cursor-pointer"
				/>
			</div>
			<button type="submit" className="h-10 items-center flex">
				SUBMIT
			</button>
		</form>
	)
}

export default Form
