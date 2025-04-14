import React from 'react';
import AddTaskForm from './AddTaskForm';
import TaskList from './TaskList';

function Tasks() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Your Tasks</h2>
      <AddTaskForm />
      <TaskList />
    </div>
  );
}

export default Tasks;
