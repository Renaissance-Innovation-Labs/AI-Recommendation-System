// import { NavLink, Outlet } from "react-router-dom"
import { useMusicGenre } from "../../useContext/musicGenreContext"
import SongRecommendations from "../help/SongRecommendations"
import { Link } from "react-router-dom"
import musicImage from './images/music genre popss.svg'
import musicicon from './images/icons8-smart-playlist-24.png'



const MusicCategoriesPage = () => {

const { songArr } = useMusicGenre()
  
    const showMusic = () => {
        console.log(songArr)
 }

    return (
        <div className="p-3 space-y-6 w-full">
        {/* <div className="p-3 space-y-6 w-full flex flex-col items-center justify-center text-center"> */}
            <div className="flex flex-coljustify-start gap-6">
              
            <div className="w-full space-y-6 md:w-1/2">
            <h2 className="font-bold text-4xl">Music Lists</h2>
            <p className="px-1  text-lg">
                Welcome to Recom-Zen-Guide's Music Category Page!
                We've got a handpicked playlist tailored just for you
                Get ready to immerse yourself in a curated groove for a one-of-a-kind journey.
                
                    </p>
                    <img src={musicImage} alt="music genre image" className="w-72 h-72 md:w-fit md:h-fit"/>
            </div>
            </div>

            

            <div className="flex flex-row gap-3">
                <img src={musicicon} alt="playlist icon" className="w-6 h-6" />
            <h1 className="font-bold text-slate-600">Your Selected Genres</h1>
            </div>
            <div className="flex flex-row gap-3">
            {songArr.map((song, index) => (
                <button
                data-index={index}
                key={index}
                className='border-2 border-solid border-slate-600 p-3 rounded-lg w-36'
                disabled>{song}</button>    
                ))}
            </div>
            
            {/* <button onClick={showMusic} className="text-white bg-slate-600">show music Array</button> */}

            <SongRecommendations />
            
            <div className="flex flex-col gap-3 md:flex-row">
            <h1 className="pt-2">Want more recommendations? Try another genre!</h1>
            <Link to= '/home'>
            <button className="bg-slate-700 text-white p-2 rounded-md md:text-md">Return to HomePage</button>
            </Link>
           </div>
        </div>
    )
}

export default MusicCategoriesPage