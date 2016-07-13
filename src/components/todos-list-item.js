import React from 'react';

class TodosListItem extends React.Component {
    constructor(props) {
        super(props);
        this.onEditClick = this.onEditClick.bind(this);
        this.onCancelClick = this.onCancelClick.bind(this);
        this.onSaveClick = this.onSaveClick.bind(this);

        this.state = {
            isEditing: false
        };
    }

    onEditClick() {
        this.setState({ isEditing: true });
    }

    onCancelClick() {
        this.setState({ isEditing: false });
    }

    onSaveClick(e) {
        e.preventDefault();

        const oldTask = this.props.task;
        const newTask = this.refs.editInput.value;

        this.props.saveTask(oldTask, newTask);
        this.setState({ isEditing: false });
    }

    renderActionsSection() {
        if (this.state.isEditing) {
            return (
                <div className="todos-actions">
                    <button className="todos-actions__buttons" onClick={this.onSaveClick}>Save</button>
                    <button className="todos-actions__buttons" onClick={this.onCancelClick}>Cancel</button>
                </div>
            )
        }

        return (
            <div className="todos-actions">
                <button className="todos-actions__buttons" onClick={this.onEditClick}>Edit</button>
                <button className="todos-actions__buttons" onClick={this.props.deleteTask.bind(this, this.props.task)}>Delete</button>
            </div>
        )
    }

    renderTaskSection() {
        const { task, isCompleted } = this.props;
        const taskStyle = {
            color: isCompleted ? 'green' : 'orange',
            cursor: 'pointer'
        }

        if (this.state.isEditing) {
            return(
                <form onSubmit={this.onSaveClick}>
                    <input type="text" defaultValue={task} ref='editInput' />
                </form>
            )
        }

        return(
            <p style={taskStyle} onClick={this.props.toggleTask.bind(this, task)}>
                {task}
            </p>
        )
    }

    render() {
        return (
            <div className="todos-list__item">
                {this.renderTaskSection()}
                {this.renderActionsSection()}
            </div>
        );
    }

}

export default TodosListItem;
