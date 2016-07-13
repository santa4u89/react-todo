import React from 'react';
import TodosList from './todos-list';
import CreateTodo from './create-todo';

const todos = [
    {
        task: 'make React Tutorial',
        isCompleted: false
    },
    {
        task: 'eat dinner',
        isCompleted: true
    }
]

class App extends React.Component {
    constructor(props) {
        super(props);
        this.createTask = this.createTask.bind(this);
        this.toggleTask = this.toggleTask.bind(this);
        this.saveTask = this.saveTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);

        this.state = {
            todos
        }
    }

    createTask(task) {
        this.state.todos.push({
            task,
            isCompleted: false
        });

        this.setState({ todos: this.state.todos })
    }

    toggleTask(task) {
        const foundTodo = _.find(this.state.todos, todo => todo.task === task);
        foundTodo.isCompleted = !foundTodo.isCompleted;
        this.setState({ todos: this.state.todos });
    }

    saveTask(oldTask, newTask) {
        const foundTodo = _.find(this.state.todos, todo => todo.task === oldTask);
        foundTodo.task = newTask;
        this.setState({ todos: this.state.todos });
    }

    deleteTask(taskToDelete) {
        _.remove(this.state.todos, todo => todo.task === taskToDelete);
        this.setState({ todos: this.state.todos });
    }

    render() {
        return (
            <div>
                <h1>React ToDo App</h1>
                <CreateTodo todos={this.state.todos} createTask={this.createTask} />
                <TodosList
                    todos={this.state.todos}
                    toggleTask={this.toggleTask}
                    saveTask={this.saveTask}
                    deleteTask={this.deleteTask} />
            </div>
        );
    }

}

export default App;
