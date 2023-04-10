import { useState } from "react";

interface Task {
  id: number;
  title: string;
  description?: string;
}

function InterviewTask() {
  const array = [
    {
      id: 12,
      title: "Test",
      description: "Hello",
    },
  ] as Task[];
  const [tasks, setTasks] = useState<Task[]>(array);
  const [editingTaskId, setEditingTaskId] = useState<number | null>(null);

  const deleteTaskById = (id: number) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };

  const createNewTask = (e: any) => {
    e.preventDefault();
    console.log(e);
    const newTaskTitle = e.target.children!.title.value;
    const newTaskDescription = e.target.children!.description.value;

    const maxId = tasks.reduce((maxId, task) => {
      maxId = task.id > maxId ? task.id : maxId;
      return maxId;
    }, 0);

    setTasks((tasks) => [
      ...tasks,
      {
        id: maxId + 1,
        title: newTaskTitle,
        description: newTaskDescription,
      },
    ]);
  };

  return (
    <main className="container">
      <div className="tasks">
        {tasks.map((task, index) => (
          <div key={index}>
            <h1>{task.title}</h1>
            {editingTaskId === task.id ? (
              <input
                type="text"
                value={task.description}
                onChange={(e) => {
                  setTasks((previousTasks) => {
                    return previousTasks.map((previousTask) => {
                      if (previousTask.id === task.id)
                        previousTask.description = e.target.value;

                      return previousTask;
                    });
                  });
                }}
              />
            ) : (
              <p>{task.description}</p>
            )}
            <button onClick={() => deleteTaskById(task.id)}>Delete</button>
            <button
              onClick={() =>
                setEditingTaskId((taskId) => (taskId === task.id ? 0 : task.id))
              }
            >
              {editingTaskId === task.id ? "Save" : "Edit"}
            </button>
          </div>
        ))}
      </div>
      <form className="controls" onSubmit={(e) => createNewTask(e)}>
        <input id="title" name="title" placeholder="title" type="text" />
        <input
          id="description"
          name="description"
          placeholder="description"
          type="text"
        />
        <button type="submit">Create</button>
      </form>
    </main>
  );
}

export default InterviewTask;
