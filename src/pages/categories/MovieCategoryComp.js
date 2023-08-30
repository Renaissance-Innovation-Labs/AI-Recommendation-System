import movieposter from './images/movieposter.jpg'
// import MusicGenre from './components/MusicGenre'

const MovieCategoryComp = () => {

    return (
        
        <div className="w-full relative h-fit border-2 border-solid border-slate-800 rounded-xl md:w-96">
        <div>
            <img src={movieposter} alt='movie poster' className='w-full h-fit rounded-xl'/>   
        </div>
        <div className="font-bold  w-full h-full absolute top-0 right-0 bottom-0 left-0 cursor-pointer bg-black text-white text-3xl
        flex flex-col justify-center items-center gap-6 mx-auto text-opacity-0 bg-opacity-0 transition duration-300 ease-in-out hover:text-opacity-100
         hover:bg-opacity-60 rounded-xl overflow-hidden">
            Movie Catalogue
    
            <button className='bg-red-600 px-3 py-3 rounded-lg text-white text-sm
            opacity-0 transition duration-300 ease-in-out hover:opacity-100'>
                    Show Movie Catalogue
            </button>
        </div>
    </div>
    )
}

export default MovieCategoryComp