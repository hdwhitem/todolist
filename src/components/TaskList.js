import React, { useContext } from 'react';
import { TaskListContext } from '../context/TaskContext';
import {Task} from "./Task";
import {ListGroup} from "reactstrap";

export const TaskList = () => {
    const { tasks } = useContext(TaskListContext);
    return (
        <ListGroup className="mt-4">
            {tasks.length ? (
            <>
            {tasks.map(task => {
                return <Task task={task} key={task.id} />;
             })}
            </>
            ) : (
            <div className="no-tasks">No Tasks</div>
            )}
        </ListGroup>
    )
}
