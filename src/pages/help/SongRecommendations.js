import React, { useState } from 'react';
// import { openai } from '../../config/openaiConfig';
// import { useMusicGenre } from '../../useContext/musicGenreContext';
// import musicplayers from '../categories/images/icons8-music.svg'
import { useSongRecommendation } from '../../useContext/songRecommendationsContext';

const SongRecommendations = () => {

  // const { recommendations, isLoading } = useSongRecommendation()
  const { recommendations } = useSongRecommendation()

  return (
    <div>
      <h1 className='mb-6'>My Music Recommended List</h1>
       {/* Conditionally render a loading indicator */}
      
              <ul>

              {Array.isArray(recommendations) ? (recommendations.map(recommendation => recommendation.trim()) 
                    // Remove completely empty lines
                  .filter(recommendation => recommendation !== '') 
                    .map((recommendation, index) => (
                      <li className='border-b-2 border-b-solid py-1 text-gray-700'  key={index}>{recommendation}</li>
                  ))
              ) : (
                <li>No Music Lists available For Now, Wanna See Playlist? Click Button Above</li>
              )}
                
          </ul>
    </div>
  );
}






//   useEffect(() => {
// }

export default SongRecommendations;
