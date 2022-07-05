import { FC, useState, useEffect } from "react";
import { onCreateNewTask, onAddNewTask, onGetTasksFromLocalStorage, onCheckCount } from "../../core/helpers";
import { IInputTaskProps } from "../../core/types";

const InputTask: FC<IInputTaskProps> = ( {tasks, updateTasks} ) => {
	const [input, setInput] = useState<string>('');
	const [count, setCount] = useState<number>(0);

	const handlerInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setInput(e.target.value);
	}

	const handlerButtonClick = () => {
		if (!input.trim()) return setInput('');

		const newTask = onCreateNewTask(input, count);
		const tasksWithNewTask = onAddNewTask(tasks, newTask);
		updateTasks(tasksWithNewTask);

		setCount(count => count + 1);
		setInput('');
	}

	useEffect(() => {
		const storageTasks = onGetTasksFromLocalStorage();
		updateTasks(storageTasks);

		const newCount = onCheckCount(storageTasks);
		setCount(newCount);
	}, [])

	return (
		<article className='main-input'>
			<textarea autoComplete='off' className='main-input-area' placeholder='Ваша задача' value = {input} onChange = {handlerInputChange}/>
			<button className='main-input-button' onClick = {handlerButtonClick}>Добавить в список дел</button>
		</article>
	)
}

export default InputTask;