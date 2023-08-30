import React from "react"
import closeicon from '../images/icons/closeIcon.svg'
import { useState } from 'react'

const MusicGenre = (props) => {

    // const [musicGenreData, setMusicGenreData] = useState([
    //     'jazz', 'jazez', 'hiphop', 'rythm', 'blues', 'afrobeat', 'soulmusic', 'gospel', 'metal', 'rock'
    // ])
    const musicGenreData =[
        'jazz', 'jazez', 'hiphop', 'rythm', 'blues', 'afrobeat', 'soulmusic', 'gospel', 'metal', 'rock'
    ]

    const [arr, setArr] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    
    // const musicChangedHandle = (event) => {
    //     event.preventDefault()
    //     console.log(event.target.value, "HELLO")
    // }



    const musicChangeHandler = (event) => {
        event.preventDefault();
        const selectedIndex = event.target.dataset.index;   
       

        if (selectedIndex !== undefined) {
            const index = parseInt(selectedIndex, 10);
            if (!isNaN(index) && index >= 0 && index < musicGenreData.length) {
                // Check if the index is already in the arr
                if (arr.includes(musicGenreData[index])) {
                    setErrorMessage('Genre already selected.'); // Display a message if already selected.
                }
                else {
                    // If it's not in arr and the limit is not reached, add it
                    if (arr.length >= 3) {
                        setErrorMessage('You can only select up to 3 genres.');
                        console.log(errorMessage)
                    } else {
                        const selectedGenre = musicGenreData[index];
                        arr.push(selectedGenre);
                        // arr.push(index);
                        setArr([...arr]);
                        console.log(arr)
                    }
                }
            }
        }
    }
    
  

    return (


        <>
            <div className="w-full h-screen fixed top-0 left-0 bg-black bg-opacity-70 z-[1000] pointer-events-none overflow-hidden"> 
                
            </div>


            <div className="bg-white w-80 h-96 fixed top-44 m-auto z-[1000] left-0 right-0 md:w-[600px] opacity-100">
                    <img onClick={props.onHandToggleModal} src={closeicon} alt="close icon" className="w-12 h-12 absolute top-3 right-0" />
                <form onSubmit={(event)=> event.preventDefault()} className="w-full flex flex-col h-full justify-end items-center gap-6 pb-12">

                    
                    
                    {/* Display arr */}
                   
                    <div className="p-6 flex flex-col gap-6">

                    <p className="text-red-500 flex flex-col">{errorMessage}</p>
                        {/* <div className="flex flex-col">
                            {arr.map((index) => (
                                <p key={index}>{musicGenreData[index]}</p>
                            ))}
                         </div> */}
                        
                        <div className="flex flex-row flex-wrap gap-1 md:gap-3">
                        {musicGenreData.map((music, index) => (
                            <button onClick={musicChangeHandler} data-index={index} key={index} className="rounded-lg border-2 border-solid border-slate-900 text-green-1 text-md hover:bg-black hover:text-white px-3 py-2 md:px-8 md:py-2"
                            disabled={arr.includes(index) || arr.length >= 4}>{music}</button>
                            
                        ))}
                        </div>
                    </div>

                    <button
                        type="submit"
                        onClick={()=>(console.log("hello"))}
                    className="rounded-lg border-2 border-solid border-slate-900 text-green-1 text-md hover:bg-black
                     hover:text-white px-3 py-2 md:px-8 md:py-2">Submit Genres</button>
                </form>
            </div>   
            
            
           
        </>

       
    )
}

export default MusicGenre