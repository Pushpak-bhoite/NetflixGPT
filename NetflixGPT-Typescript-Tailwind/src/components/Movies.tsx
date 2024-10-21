import React from 'react'
interface MoviesProps{
    movies:any
}
const Movies:React.FC<MoviesProps> = ({movies}) => {
    console.log('movies', movies)
  return (
    <div>Treding Now</div>
    
  )
}

export default Movies