import { useDispatch } from 'react-redux'
import { remove, update } from '../reducers/todo'
import { FaRegTrashAlt } from 'react-icons/fa'
import { twMerge } from 'tailwind-merge'

const Todo = ({ data }) => {
	const dispatch = useDispatch()

	const handleDelete = () => {
		dispatch(remove(data))
	}

	const handleClick = () => {
		dispatch(update({ ...data, completed: !data.completed }))
	}

	return (
		<li
			className="flex max-w-screen-2xl cursor-pointer items-center justify-between rounded-md bg-slate-900 p-2 odd:bg-sky-950"
			onClick={handleClick}
		>
			<h5 className={twMerge('text-lg text-white', data.completed && 'italic text-gray-500 line-through')}>
				{data.text}
			</h5>
			<button
				onClick={handleDelete}
				className="inline-flex items-center gap-2 rounded-md bg-red-700 text-white"
				type="button"
			>
				<FaRegTrashAlt /> <span>Delete</span>
			</button>
		</li>
	)
}

export default Todo
