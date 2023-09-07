// SongRecommendationContext.js
import React, { createContext, useContext, useState } from 'react';
import { useMovieGenre } from './movieGenreContext';
import { openai } from '../config/openaiConfig';

// Create a new context
const MovieRecommendationContext = createContext();

// Create a custom hook to use the context
export function useMovieRecommendation() {
  return useContext(MovieRecommendationContext);
}

// Create a context provider component
export function MovieRecommendationProvider({ children }) {
  const [blockbusterRecommendations, setBlockbusterRecommendations] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { movieArr } = useMovieGenre()
    const filmArr = movieArr

    function generatePrompt(filmArr) {
        return `based on ${filmArr} Only suggest ten movies with names, title and year they were released`;
      }
      async function fetchMovieRecommendations() {
        // Set loading state to true before making the request
        setIsLoading(true); 
    
        try {
          const response = await openai.completions.create({
            model: 'text-davinci-003',
            prompt: generatePrompt(filmArr),
            max_tokens: 200,
            temperature: 0.6,
          });

            // setGenreRecommendedList(response.choices[0].text)
          console.log(response.choices[0].text);
          // console.log(filmArr)
         
          // when recommendations are separated by line breaks
          setBlockbusterRecommendations(response.choices[0].text.split('\n')); 
          
        } catch (error) {
          // Handle errors here
          console.error(error);
        } finally {
          // Set loading state to false when the request is complete (success or error)
          setIsLoading(false);
        }
      }

  // Define the context value
  const contextValue = {
    blockbusterRecommendations,
    isLoading,
    fetchMovieRecommendations
  };

  return (
    <MovieRecommendationContext.Provider value={contextValue}>
      {children}
    </MovieRecommendationContext.Provider>
  );
}
