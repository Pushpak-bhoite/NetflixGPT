import React from 'react';
import Card from './Card';

interface MoviesProps {
  movies: any;
}

const Movies: React.FC<MoviesProps> = ({ movies }) => {
  if (!movies || movies.length === 0) {
    return <div className="text-center text-gray-500">No movies available</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-semibold text-white mb-6">Trending Now</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {movies.map((item: any) => (
          <Card key={item.id} imgPath={item.poster_path} />
        ))}
      </div>
    </div>
  );
};

export default Movies;
