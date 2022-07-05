import { ITask } from "../types";


export function onCreateNewTask(text: string, count: number): ITask {
	const newTask: ITask = {
		title: text,
		isFinished: false,
		isChosen: false,
		id: count
	};

	return newTask;
}

export function onAddNewTask(tasks: ITask[], newTask: ITask): ITask[] {
	const newArrOfTasks = JSON.parse(JSON.stringify(tasks));
	newArrOfTasks.push(newTask);

	return newArrOfTasks;
}

export function onGetTasksFromLocalStorage(): ITask[] {
	const list = localStorage.getItem('tasks');
	const listTasks = list ? JSON.parse(list) : [];

	return listTasks;
}

export function onCheckCount(listTasks: ITask[]): number {
	let newCount = 0;
	
	if (listTasks.length > 0) {
		const lastTask = listTasks[listTasks.length - 1];
		newCount = lastTask.id + 1
	}

	return newCount;
}

export function onCheckClass(task: ITask): string {
	if (task.isChosen) {
		return task.isFinished ? 'main-list-item-p-completed' : 'main-list-item-p-chosen';
	}
	return '';
}

export function onChooseTask(tasks: ITask[], index: number): ITask[] {
	const newArrOfTasks = JSON.parse(JSON.stringify(tasks));
	const chosenTask: ITask = newArrOfTasks[index];
	chosenTask.isChosen = !chosenTask.isChosen;

	return newArrOfTasks;
}

export function onFinishTask(tasks: ITask[], index: number):ITask[] {
	const newArrOfTasks = JSON.parse(JSON.stringify(tasks));
	const finishedTask: ITask = newArrOfTasks[index];
	finishedTask.isFinished = !finishedTask.isFinished;

	return newArrOfTasks;
}

export function onRemoveTask(tasks: ITask[], index: number): ITask[] {
	const newArrOfTasks = JSON.parse(JSON.stringify(tasks));
	newArrOfTasks.splice(index, 1);
	return newArrOfTasks;
}