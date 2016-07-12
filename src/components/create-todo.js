import React from 'react';

class CreateTodo extends React.Component {
    constructor(props) {
        super(props)
        this.handleCreate = this.handleCreate.bind(this);
    }

    handleCreate(e) {
        e.preventDefault();
        this.props.createTask(this.refs.createInput.value);
        this.refs.createInput.value = '';
    }

    render() {
        return (
            <form onSubmit={this.handleCreate}>
                <input type="text" className="todo-create" placeholder="Create todos!" ref="createInput"/>
                <button>Create ToDo</button>
            </form>
        );
    }

}

export default CreateTodo;
