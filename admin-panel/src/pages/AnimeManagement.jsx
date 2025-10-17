import React, { useState } from 'react';
import AnimeForm from '../components/Forms/AnimeForm';
import AnimeTable from '../components/Tables/AnimeTable';

const AnimeManagement = () => {
  const [showForm, setShowForm] = useState(false);
  const [editingAnime, setEditingAnime] = useState(null);

  // Mock data - replace with actual data from API
  const anime = [
    {
      _id: '1',
      title: { en: 'Chainsaw Man' },
      type: 'series',
      metadata: { status: 'ongoing' }
    },
    {
      _id: '2',
      title: { en: 'Demon Slayer' },
      type: 'series',
      metadata: { status: 'completed' }
    }
  ];

  const handleSubmit = (formData) => {
    console.log('Submit anime:', formData);
    // Here you would call the API to create/update anime
    setShowForm(false);
    setEditingAnime(null);
  };

  const handleEdit = (anime) => {
    setEditingAnime(anime);
    setShowForm(true);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Anime Management</h1>
        <button
          onClick={() => setShowForm(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Add New Anime
        </button>
      </div>

      {showForm ? (
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">
            {editingAnime ? 'Edit Anime' : 'Create New Anime'}
          </h2>
          <AnimeForm 
            anime={editingAnime} 
            onSubmit={handleSubmit}
          />
          <button
            onClick={() => {
              setShowForm(false);
              setEditingAnime(null);
            }}
            className="mt-4 bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
          >
            Cancel
          </button>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow">
          <AnimeTable anime={anime} onEdit={handleEdit} />
        </div>
      )}
    </div>
  );
};

export default AnimeManagement;