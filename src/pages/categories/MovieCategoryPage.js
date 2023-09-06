import { useMovieGenre } from "../../useContext/movieGenreContext"
import MovieRecommendations from "../help/MovieRecommendations"
import { Link } from "react-router-dom"
import moviesicon from './images/movieicon.svg'
import moviesicons from './images/icons8-film-24.svg'



    function MovieCategoryPage() {

        const { movieArr } = useMovieGenre()

        const showGame = () => {
            console.log(movieArr)
        }

        return (
            <div className="p-3 space-y-6 w-full">
                <div className="flex flex-col gap-3">
                <div className="w-full space-y-6 md:w-1/2">
                    <h2 className="font-bold text-4xl">Movies Lists</h2>
                    <p className="px-1 text-lg">
                        Welcome to CinemaXperience: Your Personal Film Journey!
                        After selecting your favorite genres, it's our turn to craft
                        a personalized film journey. Sit back, soak in the stories,
                        and let the movies transport you to unforgettable worlds."
                    </p>
                    </div>
                    <img src={moviesicon} alt="movies icon" className="w-72 h-72" />
                </div>



                <div className="flex flex-row gap-3">
                    <img src={moviesicons} alt="movies icon" className="w-6 h-6" />
                    <h1 className="font-bold text-slate-600">Your Selected Genres</h1>
                    </div>
                    <div className="flex flex-row gap-3">
                        {movieArr.map((cinemas, index) => (
                            <button
                                data-index={index}
                                key={index}
                                className='border-2 border-solid border-slate-600 p-3 rounded-lg w-36'
                                disabled>{cinemas}</button>
                        ))}
                    </div>
               


             <MovieRecommendations />

                <div className="flex flex-col gap-3 md:flex-row">
                    <h1 className="pt-2">Want more recommendations? Try another genre!</h1>
                    <Link to='/home'>
                        <button className="bg-slate-600 text-white p-2 md:text-md">Return to HomePage</button>
                    </Link>
                </div>
            </div>
        )
    }

export default MovieCategoryPage