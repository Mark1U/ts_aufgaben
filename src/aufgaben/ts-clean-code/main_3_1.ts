enum TaskType {
    Urgent = 4,
    NotUrgent = 2,
    Info = 1
}

type Task = {
    name: string,
    type?: TaskType
};

let taskListName = 'todo';
let tasks: Task[] = [];

const inputTask = () => {
    // Get the input from the user for a task
    const taskName = prompt(`Bitte geben Sie ${tasks.length > 0 ? 'noch ' : ''}eine Aufgabe ein:`);
    if (taskName) {
        let task: Task = { name: taskName };
        tasks.push(task);
        console.log('Aufgabe erstellt ' + task.name + ' von ' + taskListName);
    }
}

const filterTasks = (tasks: Task[], direction: string): string => {
    const newTasks = [...tasks];
    if (direction === 'rev') {
        newTasks.reverse();
    } else if (direction === 'asc') {
        newTasks.sort((a, b) => b.name.localeCompare(a.name));
    }

    let taskNames: string[] = [];
    newTasks.map((task) => {
        taskNames.push(task.name);
    })

    return taskNames.join(" - ");
}

inputTask()
inputTask()
inputTask()

if (tasks.length) {
    const newTasks = filterTasks(tasks, 'asc')
    console.log('newTasks: ' + newTasks);
}

//not urgent as default - fix later
tasks.forEach((task: Task) => {
    task.type = TaskType.NotUrgent;
});

if (tasks.length > 0 && tasks.length <= 3) {
    console.log('Die Anzahl der Aufgaben liegt zwischen 1 und 3.');
} else {
    console.log('Die Anzahl der Aufgaben liegt außerhalb des erwarteten Bereichs.');
}