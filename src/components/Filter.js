import React from 'react';

export const Filter = ({ setFilter }) => (
  <div className="mb-4">
    <select
      onChange={(e) => setFilter(e.target.value)}
      className="bg-ui-800 text-ui-100 p-2 rounded border-ui-600 border w-full outline-none"
    >
      <option value="">All</option>
      <option value="To Do">To Do</option>
      <option value="In Progress">In Progress</option>
      <option value="Done">Done</option>
    </select>
  </div>
);

