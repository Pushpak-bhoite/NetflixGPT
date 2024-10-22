import React from 'react';
import { API_OPTIONS } from '../utils/constants';

interface CardProps {
  imgPath: string;
  id:any
}

const Card: React.FC<CardProps> = ({ imgPath, id }) => {
  const handleCardClick = () => {
    console.log('-----------------------')
    fetch('https://api.themoviedb.org/3/movie/' + id + '/videos', API_OPTIONS)
    .then(response => response.json())
    .then(response => {
        let trailer: any = response.results.find((item: any) => item.type === "Trailer")
        // setHeroVideo(trailer?.key)
        console.log('first', trailer)
        // window.location.href = 'https://www.youtube.com/watch?v='+ trailer?.key;
        window.open('https://www.youtube.com/watch?v=' + trailer?.key, '_blank');
    })
    .catch(err => console.error(err));
    // Redirect to the specified YouTube link
  };

  return (
    <div
      className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 min-w-[200px] cursor-pointer"
      onClick={handleCardClick}
    >
      <img
        className="w-full h-full object-cover"
        src={'https://image.tmdb.org/t/p/w500' + imgPath}
        alt="Movie Poster"
      />
    </div>
  );
};

export default Card;
