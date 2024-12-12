import React, { useState } from 'react';
import { toast } from 'react-toastify';

export const TaskTable = ({ tasks, setTasks }) => {
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editedTask, setEditedTask] = useState(null);

  const handleEditClick = (task) => {
    setEditingTaskId(task.id);
    setEditedTask({ ...task });
  };

  const handleSaveClick = (id) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? editedTask : task))
    );
    setEditingTaskId(null);
    setEditedTask(null);
    toast.success('Task updated successfully!');
  };

  const handleCancelClick = () => {
    setEditingTaskId(null);
    setEditedTask(null);
  };

  const handleFieldChange = (field, value) => {
    setEditedTask((prev) => ({ ...prev, [field]: value }));
  };

  const handleDelete = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
    toast.success('Task deleted successfully!');
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-ui-100 min-w-[700px]">
        <thead>
          <tr className="bg-ui-800 text-ui-100">
            <th className="p-2 border border-ui-600">ID</th>
            <th className="p-2 border border-ui-600">Title</th>
            <th className="p-2 border border-ui-600">Description</th>
            <th className="p-2 border border-ui-600">Status</th>
            <th className="p-2 border border-ui-600">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id} className="hover:bg-ui-50">
              <td className="p-2 border border-ui-600 text-ui-100">{task.id}</td>
              {/* Title Field */}
              <td className="p-2 border border-ui-600 text-ui-100">
                {editingTaskId === task.id ? (
                  <input
                    type="text"
                    value={editedTask.title}
                    onChange={(e) => handleFieldChange('title', e.target.value)}
                    className="w-full bg-transparent"
                  />
                ) : (
                  task.title
                )}
              </td>
              {/* Description Field */}
              <td className="p-2 border border-ui-600 text-ui-100">
                {editingTaskId === task.id ? (
                  <input
                    type="text"
                    value={editedTask.description}
                    onChange={(e) =>
                      handleFieldChange('description', e.target.value)
                    }
                    className="w-full bg-transparent text-ui-100"
                  />
                ) : (
                  task.description
                )}
              </td>
              {/* Status Dropdown */}
              <td className="p-2 border border-ui-600 text-ui-100">
                {editingTaskId === task.id ? (
                  <select
                    value={editedTask.status}
                    onChange={(e) =>
                      handleFieldChange('status', e.target.value)
                    }
                    className="bg-ui-800 text-ui-100 cursor-pointer outline-none block mx-auto border border-ui-600 py-2 px-2 rounded-md"
                  >
                    <option value="To Do">To Do</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Done">Done</option>
                  </select>
                ) : (
                  task.status
                )}
              </td>
              {/* Actions Column */}
              <td className="p-2 border border-ui-600">
                {editingTaskId === task.id ? (
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleSaveClick(task.id)}
                      className="text-ui-100 bg-ui-1100 hover:text-ui-400 px-2 rounded-md text-sm py-1 border border-ui-600"
                    >
                      Save
                    </button>
                    <button
                      onClick={handleCancelClick}
                      className="text-ui-100 bg-ui-1100 hover:text-ui-400 px-2 rounded-md text-sm py-1 border border-ui-600"
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEditClick(task)}
                      className="text-ui-100 bg-ui-1100 hover:text-ui-400 px-2 rounded-md text-sm py-1 border border-ui-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(task.id)}
                      className="text-ui-100 bg-ui-1100 hover:text-ui-400 px-2 rounded-md text-sm py-1 border border-ui-600"
                    >
                      Delete
                    </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
