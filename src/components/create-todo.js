import React from 'react';
import _ from 'lodash';

class CreateTodo extends React.Component {
    constructor(props) {
        super(props)
        this.handleCreate = this.handleCreate.bind(this);

        this.state = {
            error: null
        };
    }

    handleCreate(e) {
        e.preventDefault();

        const createInput = this.refs.createInput;
        const task = createInput.value;
        const validateInput = this.validateInput(task);

        if (validateInput) {
            this.setState({ error: validateInput });
            return;
        }

        this.setState({ error: null });
        this.props.createTask(task);
        this.refs.createInput.value = '';
    }

    renderError() {
        if (!this.state.error) {
            return null;
        }
        return <div style={{ color: 'red' }}>{this.state.error}</div>;
    }

    validateInput(task) {
        if (!task) {
            return 'Please enter a todo task!';
        } else if (_.find(this.props.todos, todo => todo.task === task)) {
            return 'Task already exists!';
        } else {
            return null;
        }
    }

    render() {
        return (
            <form onSubmit={this.handleCreate}>
                <input type="text" className="todo-create" placeholder="Create todos!" ref="createInput"/>
                <button>Create ToDo</button>
                {this.renderError()}
            </form>
        );
    }

}

export default CreateTodo;
