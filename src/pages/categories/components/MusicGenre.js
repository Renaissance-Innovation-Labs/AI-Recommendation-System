import React from "react"
import closeicon from '../images/icons/closeIcon.svg'
import { useState } from 'react'
import { useMusicGenre } from "../../../useContext/musicGenreContext"

const MusicGenre = (props) => {
    const musicGenreData =[
        'jazz', 'classical', 'hiphop', 'rythm&blues', 'pop', 'afrobeat', 'Reggae', 'gospel', 'metal', 'rock'
    ]

    const [songArr, setSongArr] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [buttonClicked, setButtonClicked] = useState(false);
    const [clickedButtons, setClickedButtons] = useState([]);

    const { setGenreList } = useMusicGenre()



    const musicChangeHandler = (event) => {
        event.preventDefault();
        const selectedIndex = event.target.dataset.index;   
       

        if (selectedIndex !== undefined) {
            const index = parseInt(selectedIndex, 10);
            if (!isNaN(index) && index >= 0 && index < musicGenreData.length) {
                if (songArr.includes(musicGenreData[index])) {
                   
                const updatedArr = songArr.filter((genre) => genre !== musicGenreData[index]);
                    setSongArr(updatedArr);
                    console.log(updatedArr)
                setErrorMessage('');
                // setErrorMessage('Genre already selected.'); // Display a message if already selected.
            }
            else {
                // If it's not in arr and the limit is not reached, add it
                if (songArr.length >= 3) {
                    setErrorMessage('You can only select up to 3 genres.');
                    console.log(errorMessage)
                } else {
                    setSongArr([...songArr, musicGenreData[index]]);
                    setClickedButtons([...clickedButtons, index]);
                }
            }
            }
            // console.log(updatedArr)
        }
    }


    const handleButtonClick = (event) => {
        event.preventDefault()
      
        setButtonClicked(true);
        if (songArr.length < 2) {
            setErrorMessage('please select the genres you like');
           
            console.log(errorMessage)
        } else {
            console.log(songArr);
            setGenreList(songArr)
            props.onHandToggleModal()
        }
        if (errorMessage) {
            setErrorMessage('')
        }

        // setModalOpen(false);
    }



    
  

    return (

        <>
        {/* <MusicGenreContext.provider value = {songArr}> */}
            <div className="w-full h-screen fixed top-0 left-0 bg-black bg-opacity-70 z-[1000] pointer-events-none overflow-hidden"> 
                
            </div>


            <div className="bg-white w-80 h-auto py-6 fixed top-44 m-auto z-[1000] left-0 right-0 md:w-[600px] opacity-100">
                    <img onClick={props.onHandToggleModal} src={closeicon} alt="close icon" className="w-12 h-12 absolute top-3 right-0 cursor-pointer" />
                <form onSubmit={musicChangeHandler} className="w-full flex flex-col h-full justify-end items-center gap-3 mt-12">

                    
                    
                    {/* Display arr */}
                    <h1 className="text-md font-bold max-w-xs px-2 text-center md:text-xl md:p-3">Pick Your Favorite Genres: What Tunes Ignite Your Soul?</h1>
                    <div className="px-6 flex flex-col">
                       
                      {/* Always render an empty placeholder */}
                        <div>
                        <p className={`text-red-500 text-sm h-8 ${errorMessage ? 'visible' : 'invisible'}`}>
                        {errorMessage}
                        </p>
                        </div>
                        
                        <div className="flex flex-row flex-wrap gap-1 md:gap-3 md:mt-3">
                        {musicGenreData.map((music, index) => (
                            <button
                                
                            onClick={musicChangeHandler}
                            data-index={index}
                            key={index}
                            className={`rounded-lg border-2 border-solid border-slate-900 text-md px-3 py-2 md:px-8 md:py-2 ${
                                songArr.includes(musicGenreData[index])
                                    ? 'bg-black text-white'
                                    : 'hover:bg-gray-300 hover:text-black'
                            }`}
                            disabled={songArr.length >= 4}>{music}</button>
                            
                        ))}
                        </div>
                    </div>

                    <button
                        type="submit"
                        onClick={handleButtonClick}
                        disabled={buttonClicked || songArr.length < 2}
                    className="rounded-lg text-white bg-black font-bold text-md px-3 py-2 self-end mx-3 md:px-8 md:py-2">Submit Genres</button>
                </form>
            </div>   

    </>
    )
}

export default MusicGenre