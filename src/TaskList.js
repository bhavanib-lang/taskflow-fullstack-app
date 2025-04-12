import React, { useEffect, useState } from 'react';
import './TaskList.css';

function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Temporarily mock data — we will replace this with API call
    setTasks([
      { id: 1, title: 'Learn React' },
      { id: 2, title: 'Connect to Django API' }
    ]);
  }, []);

  return (
    <ul className="task-list">
      {tasks.map(task => (
        <li key={task.id} className="task-item">{task.title}</li>
      ))}
    </ul>
  );
}

export default TaskList;
