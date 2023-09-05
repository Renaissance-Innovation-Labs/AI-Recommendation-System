import { NavLink, Outlet } from "react-router-dom"
import { useMusicGenre } from "../useContext/musicGenreContext"
import SongRecommendations from "../pages/help/SongRecommendations"



const MusicCategoriesLayout = () => {

const { songArr } = useMusicGenre()
  
    const showMusic = () => {
        console.log(songArr)
 }

    return (
        <div className="p-3 space-y-6 w-full">
            <div className="w-full space-y-6 md:w-1/2">
            <h2 className="font-bold text-4xl">Music Lists</h2>
            <p className="px-1 text-lg">
                Showing your genre lists is important to help others understand
                your preferences and interests in various forms of media,
                such as books, movies, music, or games. It enables better
                recommendations, fostering meaningful discussions, and connecting
                with like-minded individuals who share your tastes, ultimately
                enhancing your cultural experiences.
            </p>
            </div>

            <div className="flex flex-row gap-3">
            {songArr.map((song, index) => (
                <button
                data-index={index}
                key={index}
                className='bg-black text-white p-3 rounded-lg'
                disabled>{song}</button>    
                ))}
            </div>
            
            <button onClick={showMusic} className="text-white bg-slate-600">show music Array</button>
            
            <nav className="py-3 px-2 w-fit text-xs m-2 flex flex-row gap-2 md:text-lg">
                 <NavLink to= "SongRecommendations">
                <div className="border-2 border-solid border-slate-800 p-2 rounded-md">
              
                </div> 
                </NavLink>
            </nav>
          
            <Outlet/>
        </div>
    )
}

export default MusicCategoriesLayout