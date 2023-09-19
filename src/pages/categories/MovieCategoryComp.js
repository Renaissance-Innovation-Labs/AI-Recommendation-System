import movieposter from './images/movieposter.jpg'
import MovieGenre from './components/MovieGenre'
import { useState } from 'react'


const MovieCategoryComp = () => {

    const [isMovieShown, setIsMovieShown] = useState(false)
        
        const handleMovieToggleModal = () => {
            setIsMovieShown(true)
        }
    
        const handledMovieToggleModal = () => {
            setIsMovieShown(!isMovieShown)
    }
    
    // console.log(songArr)
    
        return (
            
            <div className=" group w-full relative h-fit rounded-xl sm:w-72 md:w-96">
                <div>
                    <img src={movieposter} alt='music poster' className='w-full h-fit rounded-xl'/>   
                </div>

                <div className="flex font-bold  w-full h-full absolute top-0 right-0 bottom-0 left-0 cursor-pointer bg-black/50 text-white
             flex-col justify-center items-center gap-6 mx-auto opacity-100 transition duration-300 ease-in-out
             rounded-xl overflow-hidden md:hidden md:group-hover:flex md:opacity-0  md:hover:opacity-100">

    
                   
                <div className=' flex flex-col justify-center items-center sm:w-72 md:w-96 gap-6 '>
                <h1 className='text-3xl sm:text-lg lg:text-3xl'> Movie Catalogue</h1>
    
                        <button onClick={handleMovieToggleModal} className='bg-red-600 px-3 py-3 rounded-lg text-white text-sm w-fit sm:text-xs lg:text-sm'>
                            Show Movie Catalogue
                        </button>
                  </div>
                </div>
                {isMovieShown && (
                  
                    < MovieGenre onHandToggleModal = {handledMovieToggleModal} />
                   )}
            </div>
    
        )
}

export default MovieCategoryComp