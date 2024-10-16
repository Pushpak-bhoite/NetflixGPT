import React from 'react'

export default function Carts({movie}) {
    let id = movie.id
  return (
    <div>
        <div className="card" style={{width: "14rem"}}>
               <a href={movie.trailer}> <img className="card-img-top" src={movie.poster}/></a>
                    <div className="card-body">
                        <h5 className="card-title">{movie.title}</h5>
                        <p>{movie.year}</p>
                        <p>{'Director - '+movie.director}</p>
                        <p>{'Cast - '+[...movie.cast]}</p>
                        <p>{'Genre - '+[...movie.genre]}</p>
                    </div>
            </div>
    </div>
  )
}
