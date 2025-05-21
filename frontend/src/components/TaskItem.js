import React from 'react';

const TaskItem = ({ task, onToggle, onDelete }) => {
  const getPriorityClass = (priority) => {
    switch (priority) {
      case 'high':
        return 'priority-high';
      case 'medium':
        return 'priority-medium';
      case 'low':
        return 'priority-low';
      default:
        return '';
    }
  };

  return (
    <div className={`task ${task.completed ? 'completed' : ''}`}>
      <div className="task-info">
        <h3>{task.title}</h3>
        <p>{task.description}</p>
        <span className={`priority ${getPriorityClass(task.priority)}`}>
          {task.priority}
        </span>
      </div>
      <div className="task-actions">
        <button
          onClick={() => onToggle(task._id)}
          className={`toggle-btn ${task.completed ? 'completed' : ''}`}
        >
          {task.completed ? 'Completed' : 'Mark Complete'}
        </button>
        <button
          onClick={() => onDelete(task._id)}
          className="delete-btn"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
