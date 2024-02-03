import React, { useState } from 'react';
import './TaskManager.css'; // Import your CSS file for styling

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [newDueDate, setNewDueDate] = useState('');
  const [editTask, setEditTask] = useState(null);

  const addTask = () => {
    if (newTask.trim() !== '' && newDueDate.trim() !== '') {
      const newTaskObject = {
        id: Date.now(),
        task: newTask,
        dueDate: newDueDate,
      };

      setTasks([...tasks, newTaskObject]);
      setNewTask('');
      setNewDueDate('');
    }
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
    setEditTask(null);
  };

  const editTaskItem = (taskId) => {
    const taskToEdit = tasks.find(task => task.id === taskId);
    if (taskToEdit) {
      setEditTask(taskId);
      setNewTask(taskToEdit.task);
      setNewDueDate(taskToEdit.dueDate);
    }
  };

  const updateTask = () => {
    if (newTask.trim() !== '' && newDueDate.trim() !== '') {
      setTasks(tasks.map(task => 
        task.id === editTask ? 
        { ...task, task: newTask, dueDate: newDueDate } : 
        task
      ));
      setNewTask('');
      setNewDueDate('');
      setEditTask(null);
    }
  };

  return (
    <div className="task-manager-container">
      <h1>Task Manager</h1>
      <table>
        <tr className='heading-row'>
          <th>Task</th>
          <th>Due Date</th>
          <th>Action</th>
        </tr>
        <tr className='input-row'>
          <td className="input-container">
            <input type="text" placeholder = "Task" value={newTask} onChange={(e) => setNewTask(e.target.value)}/>
          </td>
          <td className="input-container">
            <input type="date" // For simplicity; you might want to use a date picker
            value={newDueDate} placeholder='Due Date' onChange={(e) => setNewDueDate(e.target.value)}/>
          </td>
          <td>
            {editTask !== null ? (
            <button onClick={updateTask}>Update Task</button>
            ) : (
            <button onClick={addTask}>Add Task</button>
            )}
          </td>
        </tr>
        {tasks.map(task => (
          <tr key={task.id} className="task-item">
            <td>
              <strong>{task.task}</strong>
            </td>
            <td>
              {task.dueDate}
            </td>
            <td>
              <button onClick={() => editTaskItem(task.id)}>Edit</button>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default TaskManager;
