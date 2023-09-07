// import React, { useEffect, useState } from 'react';
// import { useMovieGenre } from '../../useContext/movieGenreContext';
import { useMovieRecommendation } from "../../useContext/movieRecommendationsContext";

const MovieRecommendations = () => {

  const { blockbusterRecommendations } = useMovieRecommendation()

  const recommendations = blockbusterRecommendations


  return (
    <div>
      <h1>My Movie Playlist</h1>
        <div>

          <div>
              <ul>

              {Array.isArray(recommendations) ? (
                recommendations
                    .map(recommendation => recommendation.trim()) 
                    // Remove completely empty lines
                  .filter(recommendation => recommendation !== '') 
                  .map((recommendation, index) => (
                    <li className='border-b-2 border-b-solid py-1 text-gray-700' key={index}>{recommendation}</li>
                  ))
              ) : (
                <li>No Game Data available For Now, Wanna See Playlist? Click Button Above</li>
              )}
                
              </ul>

          </div>
        </div>
    </div>
  );
}




//   useEffect(() => {
// }

export default MovieRecommendations;
