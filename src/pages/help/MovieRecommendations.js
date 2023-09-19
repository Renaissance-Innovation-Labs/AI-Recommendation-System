// import React, { useEffect, useState } from 'react';
import React, { useState, useEffect } from 'react';
import { openai } from '../../config/openaiConfig';
import { useMovieGenre } from '../../useContext/movieGenreContext';
import { Link } from "react-router-dom"
import moviesicon from '../categories/images/movieicon.svg'
import moviesicons from '../categories/images/icons8-film-24.svg'
import loadingicon from '../categories/images/loading icon.gif'


const MovieRecommendations = () => {
  const [recommendations, setRecommendations] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { movieArr } = useMovieGenre()
  const filmArr = movieArr.join(', ')

  // Function to generate a prompt
  function generatePrompt(filmArr) {
    return `based on ${filmArr} Only suggest the best ten movies with names, title, their genres and the year they were released`;
  }

  // Function to fetch song recommendations
  async function fetchMovieRecommendations() {
    // Set loading state to true before making the request
    setIsLoading(true); 
    // console.log(movieArr)

    try {
      const response = await openai.completions.create({
        model: 'text-davinci-003',
        prompt: generatePrompt(filmArr),
        max_tokens: 150,
        temperature: 0.6,
      });

      // console.log(response)
      console.log(response.choices[0].text);
      console.log(filmArr)
     
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

    useEffect(() => {
      // Call the fetchMovieRecommendations function when filmArr changes
      if (filmArr) {
        // Check if recommendations are already fetched
        if (recommendations === '') {
          fetchMovieRecommendations();
        }
      }

      else {
        console.log('fetch lost')
      }

      console.log('Effect ended');
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filmArr]); // Dependency array with filmArr

  return (
    <div>

      {/* Conditionally render a loading indicator */}
      {isLoading ? (
        <div className="w-full min-h-screen flex items-center
         justify-center"><img className="mx-auto text-center w-44 h-44"
            src={loadingicon} alt="loading icon" /></div>
      ) : (
        <div>


<div className="p-3 space-y-6 w-full">
                <div className="flex flex-col gap-3">
                <div className="w-full space-y-6 md:w-1/2">
                    <h2 className="font-bold text-4xl">Movies Lists</h2>
                    <p className="px-1 text-lg">
                        Welcome to CinemaXperience: Your Personal Film Journey!
                        After selecting your favorite genres, it's our turn to craft
                        a personalized film journey. Sit back, soak in the stories,
                        and let the movies transport you to unforgettable worlds."
                    </p>
                    </div>
                    <img src={moviesicon} alt="movies icon" className="w-72 h-72" />
                </div>



                <div className="flex flex-row gap-3">
                    <img src={moviesicons} alt="movies icon" className="w-6 h-6" />
                    <h1 className="font-bold text-slate-600">Your Selected Genres</h1>
                    </div>
                    <div className="flex flex-row gap-3">
                        {movieArr.map((cinemas, index) => (
                            <button
                                data-index={index}
                                key={index}
                                className='border-2 border-solid border-slate-600 p-3 rounded-lg w-36'
                                disabled>{cinemas}</button>
                        ))}
                    </div>
               


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
                <li>No Movie Data available For Now, Wanna See Playlist? Click Button Above</li>
              )}
                
              </ul>

          </div>

                <div className="flex flex-col gap-3 md:flex-row">
                    <h1 className="pt-2">Want more recommendations? Try another genre!</h1>
                    <Link to='/home'>
                        <button className="bg-slate-700 text-white p-2 md:text-md">Return to HomePage</button>
                    </Link>
                </div>
            </div>


          
        
        </div>
      )}
    </div>
  );
}

export default MovieRecommendations;
