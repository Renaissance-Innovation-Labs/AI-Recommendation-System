// SongRecommendationContext.js
import React, { createContext, useContext, useState } from 'react';
import { useGameGenre } from './gameGenreContext';
import { openai } from '../config/openaiConfig';

// Create a new context
const GameRecommendationContext = createContext();

// Create a custom hook to use the context
export function useGameRecommendation() {
  return useContext(GameRecommendationContext);
}

// Create a context provider component
export function GameRecommendationProvider({ children }) {
  const [playtimeRecommendations, setPlaytimeRecommendations] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
    
    const { gameArr } = useGameGenre()
    const gamesArr = gameArr.join(', ')
  
    // Function to generate a prompt
    function generatePrompt(gamesArr) {
      return `based on ${gamesArr} Only suggest ten games with names, title and year they were released`;
    }
  
    // Function to fetch game recommendations
    async function fetchGameRecommendations() {
      // Set loading state to true before making the request
      setIsLoading(true); 
    //   console.log([gamesArr])
  
      try {
        const response = await openai.completions.create({
          model: 'text-davinci-003',
          prompt: generatePrompt(gamesArr),
          max_tokens: 150,
          temperature: 0.6,
        });
  
        console.log(response)
        console.log(response.choices[0].text);
       
        // when recommendations are separated by line breaks
        setPlaytimeRecommendations(response.choices[0].text.split('\n')); 
        
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
    playtimeRecommendations,
    isLoading,
      fetchGameRecommendations
     
   
  };

  return (
    <GameRecommendationContext.Provider value={contextValue}>
      {children}
    </GameRecommendationContext.Provider>
  );
}
