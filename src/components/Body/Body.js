import React from 'react';
import './Body.css';

const IMG_API="https://image.tmdb.org/t/p/w1280";

const setVoteClass=(vote) => {
  if(vote>=8){
    return "green"
  }else if(vote>=6){
    return "orange"
  }else{
    return "red"
  }
}

const Body = ({title,poster_path,vote_average,overview}) => {
  return (
    <div className='body'>
        <div className='movie'>
            <img src={poster_path?IMG_API+poster_path:"https://recipeforperfection.com/wp-content/uploads/2017/11/Movie-Theater-Popcorn-in-a-popcorn-bucket.jpg"} alt=''/>
            <div className='movie-info'>
                <h3>{title}</h3>
                <span className={`${setVoteClass(vote_average)}`}>{vote_average}</span>
            </div>
            <div className='movie-over'>
                <h4>Overview:</h4>
                <p>{overview}</p>
            </div>
        </div>
    </div>
  )
}

export default Body