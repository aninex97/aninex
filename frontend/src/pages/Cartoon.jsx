import React, { useState, useEffect } from 'react';
import AnimeGrid from '../components/anime/AnimeGrid';
import { useAnime } from '../hooks/useAnime';

const Cartoon = () => {
  const [anime, setAnime] = useState([]);
  const [loading, setLoading] = useState(true);
  const { getAnime } = useAnime();

  useEffect(() => {
    loadAnime();
  }, []);

  const loadAnime = async () => {
    setLoading(true);
    const data = await getAnime({ type: 'series', genre: 'Cartoon' });
    setAnime(data.anime || []);
    setLoading(false);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6">Cartoons</h1>
      <AnimeGrid anime={anime} loading={loading} />
    </div>
  );
};

export default Cartoon;