
export interface ITask {
	title: string;
	isFinished: boolean;
	isChosen: boolean;
	id: number;
};

export interface IInputTaskProps {
	tasks: ITask[];
	updateTasks: (state: ITask[]) => void
};

export interface ITasksListProps extends IInputTaskProps {};

export interface ITaskItemProps extends ITasksListProps {
	task: ITask;
	index: number;
};