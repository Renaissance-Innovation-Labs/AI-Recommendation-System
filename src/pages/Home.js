import GameCategoryComp from './categories/GameCategoryComp'
import MusicCategoryComp from './categories/MusicCategoryComp'
import MovieCategoryComp from './categories/MovieCategoryComp'


const Home = () => {
    
    return(
        <div>
            {/* <h2>HomePage</h2> */}


            <div className="w-full border-2 border-solid border-slate-800 mt-36 space-y-12 p-3">
                <h1 className="text-center text-3xl max-w-lg items-center mx-auto font-bold">Hello there, please select at least two genres from each category card</h1>
                <div className="w-full  flex flex-col justify-center items-center gap-6 md:flex-row">
                    
                    <MusicCategoryComp />
                    
                    <GameCategoryComp />

                    <MovieCategoryComp />
                   

                   
               </div>
            </div>
        </div>
    )
}

export default Home