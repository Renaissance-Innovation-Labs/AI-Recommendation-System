import GameCategoryComp from './categories/GameCategoryComp'
import MusicCategoryComp from './categories/MusicCategoryComp'
// import MusicCategoryContainer from './categories/musicCategoryContainer'
import MovieCategoryComp from './categories/MovieCategoryComp'
// import { Link } from 'react-router-dom'



const Home = () => {
    
    return(
        <div className='font-Roboto '>
            {/* <h2>HomePage</h2> */}


            <div className="w-full mt-36 space-y-12 p-3">
                <h1 className="text-center text-4xl max-w-fit items-center mx-auto font-bold md:max-w-5xl font-roboto">
                    Hi there, discover new hobbies matching your favorite genre with <span>Recom-Zen-Guide</span>'s recommender tool.
                </h1>
                <div className="w-full  flex flex-col justify-center items-center gap-6 md:flex-row">
                    
                    <MusicCategoryComp />
                    
                    <GameCategoryComp />

                    <MovieCategoryComp />
                   

                   
               </div>
            </div>

            {/* <Link to="/help">
            <button className='border-2 border-solid border-slate-600 hover:bg-black hover:text-white rounded-xl p-3 w-full mt-24 mx-auto text-center flex flex-col items-center md:w-1/4'>
                My Playlists
            </button>
            </Link> */}
        </div>

        
    )
}

export default Home