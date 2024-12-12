import React, { useState } from 'react';
import { toast } from 'react-toastify';

export const AddTaskForm = ({ setTasks }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: Date.now(),
      title,
      description,
      status: 'To Do',
    };
    setTasks((prev) => [newTask, ...prev]);
    toast.success('Task added successfully!');
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3 border-ui-600">
      <div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Task Title"
          className="border border-ui-600 bg-ui-800 text-ui-100 outline-none p-2 rounded w-full "
          required
        />
      </div>
      <div>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Task Description"
          className="border border-ui-600 bg-ui-800 p-2 text-ui-100 rounded w-full outline-none "
          rows="3"
        ></textarea>
      </div>
      <button type="submit" className="bg-ui-800 text-white border border-ui-600 px-4 py-2 rounded hover:bg-ui-1100 hover:text-ui-100 shadow-custom">
        Add Task
      </button>
    </form>
  );
};
