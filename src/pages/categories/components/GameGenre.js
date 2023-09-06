import React from "react"
import closeicon from '../images/icons/closeIcon.svg'
import { useState } from 'react'
import { useGameGenre } from "../../../useContext/gameGenreContext"
import { useNavigate } from "react-router-dom"

const GameGenre = (props) => {

    // const [musicGenreData, setMusicGenreData] = useState([
    //     'jazz', 'jazez', 'hiphop', 'rythm', 'blues', 'afrobeat', 'soulmusic', 'gospel', 'metal', 'rock'
    // ])
    const GameGenreData =[
        'Action', 'Adventure', 'Sports', 'Horror', 'Racing', 'Puzzle', 'Fighting', 'Action Adventure', 'Simulation', 'Platformer'
    ]

    const [gameArr, setGameArr] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [buttonClicked, setButtonClicked] = useState(false);
    const [clickedButtons, setClickedButtons] = useState([]);

    const navigate = useNavigate()

    const { setGenreList } = useGameGenre()



    const gameChangeHandler = (event) => {
        event.preventDefault();
        const selectedIndex = event.target.dataset.index;   
       

        if (selectedIndex !== undefined) {
            const index = parseInt(selectedIndex, 10);
            if (!isNaN(index) && index >= 0 && index < GameGenreData.length) {
                if (errorMessage) {
                    setErrorMessage('')
                }

                if (gameArr.includes(GameGenreData[index])) {
                   
                const updatedArr = gameArr.filter((genre) => genre !== GameGenreData[index]);
                    setGameArr(updatedArr);
                    console.log(updatedArr)
                setErrorMessage('');
            }
            else {
                // If it's not in arr and the limit is not reached, add it
                if (gameArr.length >= 3) {
                    setErrorMessage('You can only select up to 3 genres.');
                    console.log(errorMessage)
                } else {
                    setGameArr([...gameArr, GameGenreData[index]]);
                    setClickedButtons([...clickedButtons, index]);
                    // setSelectionsMade(true);
                }
            }
            }
            // console.log(updatedArr)
        }
    }


    const handleButtonClick = (event) => {
        event.preventDefault()
      
        setButtonClicked(true);
        if (gameArr.length < 1) {
            setErrorMessage('please select at least 2 genres you like, you are allowed to select up to 3');
        }
        if (errorMessage) {
            setErrorMessage('')
        }
        if (gameArr.length < 2) {
            setErrorMessage('please select at least 2 genres you like, you are allowed to select up to 3');
        } 
       
        else {
            console.log(gameArr);
            setGenreList(gameArr)
            navigate('/GameCategoryPage')
            props.onHandToggleGameModal()
        }
       

        // setModalOpen(false);
    }



    
  

    return (


        <>
            <div className="w-full h-screen fixed top-0 left-0 bg-black bg-opacity-70 z-[1000] pointer-events-none overflow-hidden"> 
                
            </div>


            <div className="bg-white w-80 h-auto py-6 fixed top-44 m-auto z-[1000] left-0 right-0 md:w-[600px] opacity-100">
                    <img onClick={props.onHandToggleGameModal} src={closeicon} alt="close icon" className="w-12 h-12 absolute top-3 right-0 cursor-pointer" />
                <form onSubmit={gameChangeHandler} className="w-full flex flex-col h-full justify-end items-center gap-3 mt-12">

                    
                    
                    {/* Display arr */}
                    <h1 className="text-md font-bold max-w-xs px-2 w-full text-center md:text-xl md:p-3">Choose your virtual adventure</h1>
                    <div className="px-6 flex flex-col">
                       
                      {/* Always render an empty placeholder */}
                        <div>
                        <p className={`text-red-500 text-sm h-8 mb-6 md:mb-1 ${errorMessage ? 'visible' : 'invisible'}`}>
                        {errorMessage}
                        </p>
                        </div>
                        
                        <div className="flex flex-row flex-wrap gap-1 md:gap-3 md:mt-3">
                        {GameGenreData.map((game, index) => (
                            <button
                            onClick={gameChangeHandler}
                            data-index={index}
                            key={index}
                            className={`rounded-lg border-2 border-solid border-slate-900 text-md px-3 py-2 md:px-8 md:py-2 ${
                                gameArr.includes(GameGenreData[index])
                                ? 'bg-black text-white'
                                : 'hover:bg-gray-300 hover:text-black'
                            }`}
                            disabled={gameArr.length >= 4}>{game}</button>
                            
                        ))}
                        </div>
                    </div>

                    <button
                        type="submit"
                        onClick={handleButtonClick}
                        disabled={gameArr.length < 0}
                    className="rounded-lg text-white bg-black font-bold text-md px-3 py-2 self-end mx-3 md:px-8 md:py-2">Submit Genres</button>
                </form>
            </div>   
            
            
           
        </>

       
    )
}

export default GameGenre