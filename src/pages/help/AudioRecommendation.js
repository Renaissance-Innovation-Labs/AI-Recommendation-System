
// import React, { useState } from 'react';
// import { openai } from '../../config/openaiConfig';

// const AudioRecommendation = () => {
//     const [recommendations, setRecommendations] = useState('');
// //   const [isLoading, setIsLoading] = useState(false);

//   // this is the syntax for sending the message as a string inside the prompt
// // const musicArr = songArr.join(', ')
  
//   const songArr = ["blues", "jazz", "hiphop"]
//   const musicArr = songArr.join(', ')


// }


import { useMusicGenre } from '../../useContext/musicGenreContext.js';

function SongRecommendations() {
  const { songArr } = useMusicGenre();
  console.log(songArr); // Check if songArr is correctly retrieved
  // Rest of your component code
}
export default SongRecommendations







// function generatePrompt(songGenre) {
  //   return `Suggest ten songs based on ${songGenre}`;
  // }

  // async function fetchSongRecommendations() {
  //   const response = await openai.completions.create({
  //     model: 'text-davinci-003',
  //     prompt: generatePrompt("jazz"),
  //     max_tokens: 50, // You can adjust this based on the desired length of the response
  //     temperature: 0.6,
     
  //   });
  //   console.log(response)
  //   setRecommendations(response.data.choices[0].text);
  // }
  