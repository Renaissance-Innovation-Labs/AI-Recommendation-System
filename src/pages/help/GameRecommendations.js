import React, { useState } from 'react';
import { openai } from '../../config/openaiConfig';
// import { useGameGenre } from '../../useContext/gameGenreContext';
import { useGameRecommendation } from '../../useContext/gameRecommendationsContext';

const GameRecommendations = () => {

  const { playtimeRecommendations } = useGameRecommendation()

  return (
    <div>
      <h1>My GameLists Playlist</h1>

      
        <div>
         
          <div className='py-3'>
              <ul>

              {Array.isArray(playtimeRecommendations) ? (
                playtimeRecommendations
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

export default GameRecommendations;
