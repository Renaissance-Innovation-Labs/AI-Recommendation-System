// import React, { useState } from 'react';
// import axios from 'axios';
// import openai from '../../config/openaiConfig'; // Import the openai module
// import { OpenAIConfiguration, OpenAIApi } from '../../config/openaiConfig';

// ...


// src/SongRecommendations.js
// import ;

// this is the syntax for sending the message as a string inside the prompt
// const musicArr = songArr.join(', ')

import React, { useEffect, useState } from 'react';
import { openai } from '../../config/openaiConfig';

const SongRecommendations = () => {
  const [recommendations, setRecommendations] = useState('');



  useEffect(() => {
    fetchSongRecommendations();
  }, []);

  function generatePrompt(songGenre) {
    return `Suggest ten songs based on ${songGenre}`;
  }

  async function fetchSongRecommendations() {
    const response = await openai.completions.create({
      model: 'text-davinci-003',
      prompt: generatePrompt("jazz"),
      // max_tokens: 50, // You can adjust this based on the desired length of the response
      temperature: 0.6,
     
    });
    console.log(response)
    setRecommendations(response.data.choices[0].text);
  }

  return (
    <div>
      <h1>Song Recommendations</h1>
      <p>{recommendations}</p>
    </div>
  );
};

export default SongRecommendations;



// ...

// import openai from '../../config/openaiConfig';

// const SongRecommendations = () => {
//   const openai = new OpenAIApi(OpenAIConfiguration);
//    const [recommendations, setRecommendations] = useState([]);

//    const generateRecommendations = async () => {
//      try {
//        const response = await axios.post(
//          'https://api.openai.com/v1/engines/text-davinci-002/completions',
//          {
//            prompt:
//              "Generate 10 song recommendations with titles in the following genres: jazz, r&b.",
//            max_tokens: 100, // Adjust based on the response length you want
//          },
//          {
//            headers: {
//              'Authorization': `Bearer ${OPEN_AI_KEY}`, // Use the API key from your openai module
//            },
//          }
//        );

//        const recommendedSongs = response.data.choices[0].text.split('\n');
//        setRecommendations(recommendedSongs);
//      } catch (error) {
//        console.error('Error generating recommendations:', error);
//      }
//    };

//    return (
//      <div>
//        <h1>Song Recommendations</h1>
//        <button onClick={generateRecommendations}>Generate Recommendations</button>
//        <ul>
//          {recommendations.map((recommendation, index) => (
//            <li key={index}>{recommendation}</li>
//          ))}
//        </ul>
//      </div>
//    );
// };

// export default SongRecommendations;
