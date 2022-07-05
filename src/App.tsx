import { FC, Fragment, useCallback, useState } from 'react';
import InputTask from './components/InputTask';
import TasksList from './components/TaskList';
import { ITask } from './core/types';


const App: FC = () => {
	const [tasks, setTasks] = useState<ITask[]>([]);

	const updateTasks = useCallback((newArrOfTasks: ITask[]) => {
		setTasks(newArrOfTasks)
	}, [tasks])

	return (
		<Fragment>
			<header className='header'>
				<h1 className='header-text'>ToDo лист</h1>
			</header>
			<main className='main'>
				<InputTask tasks = {tasks} updateTasks = {updateTasks}/>
				<TasksList tasks = {tasks} updateTasks = {updateTasks}/>
			</main>
		</Fragment>
	)
}

export default App
