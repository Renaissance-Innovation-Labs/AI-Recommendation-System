// import React, { useEffect, useState } from 'react';
import React, { useState } from 'react';
import { openai } from '../../config/openaiConfig';
import { useMovieGenre } from '../../useContext/movieGenreContext';

const MovieRecommendations = () => {
  const [recommendations, setRecommendations] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { movieArr } = useMovieGenre()

  // this is the syntax for sending the message as a string inside the prompt
// const musicArr = songArr.join(', ')
  // const movieArr = ["Action", "Romance", "Commedy"]
  const filmArr = movieArr.join(', ')

  // Function to generate a prompt
  function generatePrompt(filmArr) {
    return `Suggest ten movies with names, title an year they were released based on ${filmArr}`;
  }

  // Function to fetch song recommendations
  async function fetchSongRecommendations() {
    // Set loading state to true before making the request
    setIsLoading(true); 
    console.log(movieArr)

    try {
      const response = await openai.completions.create({
        model: 'text-davinci-003',
        prompt: generatePrompt(filmArr),
        max_tokens: 150,
        temperature: 0.6,
      });

      console.log(response)
      console.log(response.choices[0].text);
     
      // when recommendations are separated by line breaks
      setRecommendations(response.choices[0].text.split('\n')); 
      
    } catch (error) {
      // Handle errors here
      console.error(error);
    } finally {
      // Set loading state to false when the request is complete (success or error)
      setIsLoading(false);
    }
  }

  return (
    <div>
      <h1>My Movie Playlist</h1>

      {/* Conditionally render a loading indicator */}
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {/* Render your content when not loading */}
          <button className='bg-black text-white w-fit p-3 my-3' onClick={fetchSongRecommendations}>Fetch My Favorite Movies</button>
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
      )}
    </div>
  );
}




//   useEffect(() => {
// }

export default MovieRecommendations;
