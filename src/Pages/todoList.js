import React from "react";
import { Connect } from "react-redux";


class TodoList extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div>hello world</div>
            </React.Fragment>
        )

    }
}

function mapStateToProps(state) {
    const { todos } = state
    return { todoList: todos.allIds }
}

export default Connect(mapStateToProps)(TodoList)

