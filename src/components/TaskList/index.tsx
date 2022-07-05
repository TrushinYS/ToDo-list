import { FC, useEffect } from "react";
import { ITask, ITasksListProps } from "../../core/types";
import TaskItem from './TaskItem';

const TasksList: FC<ITasksListProps> = ( {tasks, updateTasks} ) => {
	
	useEffect(() => {
		localStorage.setItem('tasks', JSON.stringify(tasks));
	}, [tasks])

	if (!tasks.length) {
		return <p className="header-text">Задач пока нет</p>
	}

	return (
		<article className="main-list">
			{tasks.map((task: ITask, index) => <TaskItem key = {task.id} task = {task} index = {index} tasks = {tasks} updateTasks = {updateTasks}/>)}
		</article>
	)
}

export default TasksList;