import React, { useState } from 'react';
import EpisodeForm from '../components/Forms/EpisodeForm';

const EpisodeManagement = () => {
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (formData) => {
    console.log('Submit episode:', formData);
    // Here you would call the API to create/update episode
    setShowForm(false);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Episode Management</h1>
        <button
          onClick={() => setShowForm(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Add New Episode
        </button>
      </div>

      {showForm ? (
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Create New Episode</h2>
          <EpisodeForm onSubmit={handleSubmit} />
          <button
            onClick={() => setShowForm(false)}
            className="mt-4 bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
          >
            Cancel
          </button>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow p-6">
          <p>Select an episode to edit or add a new one.</p>
        </div>
      )}
    </div>
  );
};

export default EpisodeManagement;