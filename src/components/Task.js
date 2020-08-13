import React, { useContext } from 'react';
import { TaskListContext } from '../context/TaskContext';
import { ListGroupItem, Button} from 'reactstrap';

export const Task = ({task}) => {
    const { removeTask, findItem } = useContext(TaskListContext);
    return (
            <ListGroupItem className="d-flex" key={task.id}>
            <strong>{task.title} </strong>
            <div className="ml-auto">
                <Button color="warning" className="btn btn-warning mr-1" onClick={() => findItem(task.id)}>Edit</Button>
                <Button color="danger" onClick={() => removeTask(task.id)}>Delete</Button>{' '}
            </div>
            </ListGroupItem>
    )
}
