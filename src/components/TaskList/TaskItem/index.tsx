import { FC, useMemo } from 'react';
import { ITaskItemProps } from '../../../core/types';
import { onCheckClass, onChooseTask, onFinishTask, onRemoveTask } from '../../../core/helpers';

const TaskItem: FC<ITaskItemProps> = ( {task, index, tasks, updateTasks} ) => {
	const classTask = useMemo(() => {
		return onCheckClass(task)
	}, [task.isChosen, task.isFinished])

	const handlerTaskClick = () => {
		const newArrOfTasks = onChooseTask(tasks, index);
		updateTasks(newArrOfTasks)
	}

	const handlerBtnFinishClick = (e:React.MouseEvent<HTMLButtonElement>) => {
		const newArrOfTasks = onFinishTask(tasks, index);
		updateTasks(newArrOfTasks);
		e.stopPropagation();
	}

	const handlerBtnRemoveClick = (e:React.MouseEvent<HTMLButtonElement>) => {
		const newArrOfTasks = onRemoveTask(tasks, index);
		updateTasks(newArrOfTasks);
		e.stopPropagation();
	}

	return (
		<div className='main-list-item' onClick = {task.isFinished ? undefined : handlerTaskClick}>
			<p className = {classTask}>{task.title}</p>
			{task.isChosen
				&& (
					<div className='main-list-item-buttons-chosen'>
						{!task.isFinished
							&& <button className='main-list-item-buttons-btn' onClick = {handlerBtnFinishClick}>Завершить задачу</button>
						}
						<button className='main-list-item-buttons-btn' onClick = {handlerBtnRemoveClick}>Удалить задачу</button>
					</div>
				)
			}
		</div>
	)
}

export default TaskItem;
