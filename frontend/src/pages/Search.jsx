import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import AnimeGrid from '../components/anime/AnimeGrid';
import { useAnime } from '../hooks/useAnime';

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [anime, setAnime] = useState([]);
  const [loading, setLoading] = useState(false);
  const { searchAnime } = useAnime();

  useEffect(() => {
    if (query) {
      performSearch();
    }
  }, [query]);

  const performSearch = async () => {
    setLoading(true);
    const results = await searchAnime(query);
    setAnime(results);
    setLoading(false);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6">
        Search Results for: "{query}"
      </h1>
      {query ? (
        <AnimeGrid anime={anime} loading={loading} />
      ) : (
        <div className="text-center py-8 text-gray-400">
          Please enter a search term
        </div>
      )}
    </div>
  );
};

export default Search;