import React, { useState, useEffect } from 'react';
import { Filter,AddTaskForm,TaskTable } from './components';
// import TaskTable from './components/TaskTable';
// import AddTaskForm from './components/AddTaskForm';
// import Filter from './components/Filter';
// import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=20');
        if (!response.ok) throw new Error('Failed to fetch tasks');
        const data = await response.json();
        const formattedData = data.map((task) => ({
          id: task.id,
          title: task.title,
          description: '', // Placeholder for now
          status: task.completed ? 'Done' : 'To Do',
        }));
        setTasks(formattedData);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchTasks();
  }, []);

  const filteredTasks = filter
    ? tasks.filter((task) => task.status === filter)
    : tasks;

  return (
    <div className="bg-ui-800 min-h-screen p-5">
      <h1 className="text-ui-100 font-bold text-2xl mb-5">Task List Manager</h1>
      <div className="border p-5 rounded-lg shadow-custom mb-5 border-ui-600">
        <AddTaskForm setTasks={setTasks} />
      </div>
      <div className="border border-ui-600 p-5 rounded-lg shadow-custom">
        <Filter setFilter={setFilter} />
        <TaskTable tasks={filteredTasks} setTasks={setTasks} />
      </div>
      <ToastContainer />
    </div>
  );
};

export default App;
