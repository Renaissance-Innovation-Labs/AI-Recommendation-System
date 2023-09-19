import React, { useState, useEffect } from 'react';
import { openai } from '../../config/openaiConfig';
import { useMusicGenre } from '../../useContext/musicGenreContext';
import musicplayers from '../categories/images/icons8-music.svg'
import { Link } from "react-router-dom"
import musicImage from '../categories/images/music genre popss.svg'
import musicicon from '../categories/images/icons8-smart-playlist-24.png'
import loadingicon from '../categories/images/loading icon.gif'




const SongRecommendations = () => {

  const [musicRecommendations, setMusicRecommendations] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { songArr } = useMusicGenre()
  const musicArr = songArr.join(', ')

  function generatePrompt(musicArr) {
      return `Strictly based on ${musicArr} Only suggest the best ten songs with names, title, their genres and the year they were released and let the genres be individual and singular`;
  }
  
    async function fetchSongRecommendations() {
      // Set loading state to true before making the request
      setIsLoading(true); 
  
      try {
        const response = await openai.completions.create({
          model: 'text-davinci-003',
          prompt: generatePrompt(musicArr),
          max_tokens: 300,
          temperature: 0.6,
        });

          // setGenreRecommendedList(response.choices[0].text)
        console.log(response.choices[0].text);
        console.log(musicArr)
       
        // when recommendations are separated by line breaks
        setMusicRecommendations(response.choices[0].text.split('\n')); 
        
      } catch (error) {
        // Handle errors here
        console.error(error);
      } finally {
        // Set loading state to false when the request is complete (success or error)
        setIsLoading(false);
      }
  }
  
  // fetchSongRecommendations()

  useEffect(() => {
    // Call the fetchSongRecommendations function when musicArr changes
    if (musicArr) {
      // Check if recommendations are already fetched
      if (musicRecommendations === '') {
        fetchSongRecommendations();
      } else {
        console.log('fetch completed')
      }
      
    }
    else {
      console.log('fetch lost')
      }

    console.log('Effect ended');
    //  eslint-disable-next-line react-hooks/exhaustive-deps
  }, [musicArr]); // Dependency array with musicArr

  return (
    <div>

      {/* Conditionally render a loading indicator */}
      {isLoading ? (
        <div className="w-full min-h-screen flex items-center
         justify-center"><img className="mx-auto text-center w-44 h-44"
            src={loadingicon} alt="loading icon" /></div>
      ) : (
        <div className='p-3'>


            <div className="flex flex-coljustify-start gap-6">
              
              <div className="w-full space-y-6 md:w-1/2">
              <h2 className="font-bold text-4xl">Music Lists</h2>
              <p className="px-1  text-lg">
                  Welcome to Recom-Zen-Guide's Music Category Page!
                  We've got a handpicked playlist tailored just for you
                  Get ready to immerse yourself in a curated groove for a one-of-a-kind journey.
                  
                      </p>
                      <img src={musicImage} alt="music genre image" className="w-72 h-72 md:w-fit md:h-fit"/>
              </div>
              </div>



            <div className="flex flex-row gap-3">
              <img src={musicicon} alt="playlist icon" className="w-6 h-6" />
              <h1 className="font-bold text-slate-600">Your Selected Genres</h1>
            </div> 
            <div className="flex flex-row gap-3 py-6">
              {songArr.map((jams, index) => (
                  <button
                  data-index={index}
                  key={index}
                  className='border-2 border-solid border-slate-600 p-3 rounded-lg w-36'
                  disabled>{jams}</button>    
                  ))}
            </div>
               


            <div>
              <ul>

              {Array.isArray(musicRecommendations) ? (
                musicRecommendations
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

        <div className="flex flex-col gap-3 md:flex-row">
          <h1 className="pt-2">Want more recommendations? Try another genre!</h1>
          <Link to='/home'>
          <button className="bg-slate-700 text-white p-2 md:text-md">Return to HomePage</button>
          </Link>
        </div>
      </div>
    )}
  </div>
  );
}






//   useEffect(() => {
// }

export default SongRecommendations;
