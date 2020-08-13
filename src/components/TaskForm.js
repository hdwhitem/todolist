import React, { useState, useContext, useEffect } from 'react';
import { TaskListContext } from '../context/TaskContext';
import { FormGroup, Form , Button, Input} from 'reactstrap';

export const TaskForm = () => {
    const { addTask, clearList, editTask, editItem } = useContext(TaskListContext);
    const [title, setTitle] = useState('');

    const handleSubmit = e => {
        e.preventDefault()
        if (!editItem) {
          addTask(title)
          setTitle('')
        } else {
          editTask(title, editItem.id)
        };
      };
    
      const handleChange = e => {
        setTitle(e.target.value)
      };
    
      useEffect(() => {
        if (editItem) {
          setTitle(editItem.title)
          console.log(editItem)
        } else {
          setTitle('')
        }
      }, [editItem]);

    return (
    <Form onSubmit={handleSubmit}>
        <FormGroup>
      <Input style={{margin: '1.2rem 1.2rem 1.2rem 0'}} type="text" placeholder="Add Task..." value={title} onChange={handleChange} required className="task-input"/>
        <Button type="submit" color="primary" >
          {editItem ? 'Edit Task' : 'Add Task'}
        </Button>{' '}
        <Button color="secondary"  onClick={clearList}>
          Clear
        </Button>
      
      </FormGroup>
    </Form>
    )
}
