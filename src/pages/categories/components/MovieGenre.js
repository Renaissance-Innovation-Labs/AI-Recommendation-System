import React from "react"
import closeicon from '../images/icons/closeIcon.svg'
import { useState } from 'react'
import { useMovieGenre } from "../../../useContext/movieGenreContext"
import { useNavigate } from "react-router-dom"

const MovieGenre = (props) => {

    

    // const [musicGenreData, setMusicGenreData] = useState([
    //     'jazz', 'jazez', 'hiphop', 'rythm', 'blues', 'afrobeat', 'soulmusic', 'gospel', 'metal', 'rock'
    // ])
    const movieGenreData =[
       'Action', 'Commedy', 'Drama', 'Thriller', 'Science Fiction', 'Fantasy', 'Horror', 'Romance', 'Mystery', 'Animation'
    ]

    const [movieArr, setMovieArr] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [buttonClicked, setButtonClicked] = useState(false);
    const [clickedButtons, setClickedButtons] = useState([]);

    const navigate = useNavigate()

    const { setGenreList } = useMovieGenre()
    


    const movieChangeHandler = (event) => {
        event.preventDefault();
        const selectedIndex = event.target.dataset.index;   
       

        if (selectedIndex !== undefined) {
            const index = parseInt(selectedIndex, 10);
            if (!isNaN(index) && index >= 0 && index < movieGenreData.length) {
                if (errorMessage) {
                    setErrorMessage('')
                }

                if (movieArr.includes(movieGenreData[index])) {
                   
                const updatedArr = movieArr.filter((genre) => genre !== movieGenreData[index]);
                    setMovieArr(updatedArr);
                    console.log(updatedArr)
                setErrorMessage('');
            }
            else {
                // If it's not in arr and the limit is not reached, add it
                if (movieArr.length >= 3) {
                    setErrorMessage('You can only select up to 3 genres.');
                    console.log(errorMessage)
                } else {
                    // const selectedGenre = musicGenreData[index];
                    // arr.push(selectedGenre);
                    setMovieArr([...movieArr, movieGenreData[index]]);
                    // console.log(arr)
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
        if (movieArr.length < 1) {
            setErrorMessage('please select at least 2 genres you like, you are allowed to select up to 3');
        }
        if (errorMessage) {
            setErrorMessage('')
        }
        if (movieArr.length < 2) {
            setErrorMessage('please select at least 2 genres you like, you are allowed to select up to 3');
        } 
        else {
            console.log(movieArr);
            setGenreList(movieArr)
            navigate('/MovieCategoryPage')
            props.onHandToggleModal()
            
        }

        if (errorMessage) {
            setErrorMessage('')
        }
       

        // setModalOpen(false);
    }



    
  

    return (


        <>
            <div className="w-full h-screen fixed top-0 left-0 bg-black bg-opacity-70 z-[1000] pointer-events-none overflow-hidden"> 
                
            </div>


            <div className="bg-white w-80 h-auto py-6 fixed top-44 m-auto z-[1000] left-0 right-0 md:w-[600px] opacity-100">
                    <img onClick={props.onHandToggleModal} src={closeicon} alt="close icon" className="w-12 h-12 absolute top-3 right-0 cursor-pointer" />
                <form onSubmit={movieChangeHandler} className="w-full flex flex-col h-full justify-end items-center gap-3 mt-12">

                    
                    
                    {/* Display arr */}
                    <h1 className="text-md font-bold max-w-xx px-2 text-center md:text-xl md:p-3 md:max-w-xl">Select your preferred movie genre and let the cinematic journey begin</h1>
                    <div className="px-6 flex flex-col">
                       
                      {/* Always render an empty placeholder */}
                        <div>
                        <p className={`text-red-500 text-sm mb-6 h-8 md:mb-1 ${errorMessage ? 'visible' : 'invisible'}`}>
                        {errorMessage}
                        </p>
                        </div>
                        
                        <div className="flex flex-row flex-wrap gap-1 md:gap-3 md:mt-3">
                        {movieGenreData.map((movie, index) => (
                            <button
                                
                            onClick={movieChangeHandler}
                            data-index={index}
                            key={index}
                            className={`rounded-lg border-2 border-solid border-slate-900 text-md px-3 py-2 md:px-8 md:py-2 ${
                                movieArr.includes(movieGenreData[index])
                                    ? 'bg-black text-white'
                                    : 'hover:bg-gray-300 hover:text-black'
                            }`}
                            disabled={movieArr.length >= 4}>{movie}</button>
                            
                        ))}
                        </div>
                    </div>

                    <button
                        type="submit"
                        onClick={handleButtonClick}
                        // disabled={movieArr.length < 0}
                        className="rounded-lg text-white bg-black font-bold text-md px-3 py-2 self-end mx-3 md:px-8 md:py-2">Submit Genres
                    </button>
                </form>
            </div>   
            
            
           
        </>

       
    )
}

export default MovieGenre