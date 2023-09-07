// SongRecommendationContext.js
import React, { createContext, useContext, useState } from 'react';
import { useMusicGenre } from './musicGenreContext';
import { openai } from '../config/openaiConfig';

// Create a new context
const SongRecommendationContext = createContext();

// Create a custom hook to use the context
export function useSongRecommendation() {
  return useContext(SongRecommendationContext);
}

// Create a context provider component
export function SongRecommendationProvider({ children }) {
  const [recommendations, setRecommendations] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { songArr } = useMusicGenre()
    const musicArr = songArr

    function generatePrompt(musicArr) {
        return `based on ${musicArr} Only suggest ten songs with names, title and year they were released`;
      }
      async function fetchSongRecommendations() {
        // Set loading state to true before making the request
        setIsLoading(true); 
    
        try {
          const response = await openai.completions.create({
            model: 'text-davinci-003',
            prompt: generatePrompt(musicArr),
            max_tokens: 200,
            temperature: 0.6,
          });

            // setGenreRecommendedList(response.choices[0].text)
          console.log(response.choices[0].text);
          console.log(musicArr)
         
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

  // Define the context value
  const contextValue = {
    recommendations,
    isLoading,
    fetchSongRecommendations,
  };

  return (
    <SongRecommendationContext.Provider value={contextValue}>
      {children}
    </SongRecommendationContext.Provider>
  );
}
