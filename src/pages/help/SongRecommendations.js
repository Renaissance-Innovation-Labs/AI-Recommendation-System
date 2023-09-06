import React, { useState } from 'react';
import { openai } from '../../config/openaiConfig';
import { useMusicGenre } from '../../useContext/musicGenreContext';
import musicplayers from '../categories/images/icons8-music.svg'

const SongRecommendations = () => {
  const [recommendations, setRecommendations] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // this is the syntax for sending the message as a string inside the prompt
// const musicArr = songArr.join(', ')
// const { songArr } = useContext(MusicGenreContext);
  
  const { songArr } = useMusicGenre()        
  // const songArr = ["blues", "jazz", "hiphop"]
  const musicArr = songArr.join(', ')
  

  function generatePrompt(musicArr) {
    return `based on ${musicArr} Only suggest ten songs with names, title and year they were released`;
  }

  // Function to fetch song recommendations
  async function fetchSongRecommendations() {
    // Set loading state to true before making the request
    setIsLoading(true); 
    console.log([musicArr])

    try {
      const response = await openai.completions.create({
        model: 'text-davinci-003',
        prompt: generatePrompt(musicArr),
        max_tokens: 200,
        temperature: 0.6,
      });

      // console.log(response)
      console.log(musicArr)
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
      <h1>My Music Recommended List</h1>
      {/* <button className='bg-gray-700 text-white p-2' onClick={()=>(console.log([musicArr]))}>show music Array</button> */}

      {/* Conditionally render a loading indicator */}
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {/* Render your content when not loading */}
            <button className='bg-gray-700 text-white w-fit p-3 my-3'
              onClick={fetchSongRecommendations}
              disabled={musicArr.length === 0}
            >Fetch My Music Lists</button>
          <div>
              <ul>

              {Array.isArray(recommendations) ? (
                recommendations
                    .map(recommendation => recommendation.trim()) 
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
        </div>
      )}
    </div>
  );
}




//   useEffect(() => {
// }

export default SongRecommendations;
