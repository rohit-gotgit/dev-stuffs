class TodoManager {
  constructor() {
    this.todos = [];
  }

  addTask(text) {
    const task = {
      id: Date.now(),
      text,
      completed: false
    };

    this.todos.push(task);
  }

  completeTask(id) {
    const task = this.todos.find(t => t.id === id);
    if (task) task.completed = true;
  }

  deleteTask(id) {
    this.todos = this.todos.filter(t => t.id !== id);
  }

  getTasks() {
    return this.todos;
  }
}
