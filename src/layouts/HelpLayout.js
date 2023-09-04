import { NavLink, Outlet } from "react-router-dom"


const HelpLayout = () => {

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
            
            <nav className="py-3 px-2 w-fit text-xs m-2 flex flex-row gap-2 md:text-lg">
                 <NavLink to= "SongRecommendations">
                <div className="border-2 border-solid border-slate-800 p-2 rounded-md">
                View Your Favorite Songs
                </div> 
                </NavLink>
           
                 <NavLink to= "GameRecommendations">
                <div className="border-2 border-solid border-slate-800 p-2 rounded-md">
                    View Your Favorite Games
                </div>
                </NavLink>

                <NavLink to= "MovieRecommendations">
                <div className="border-2 border-solid border-slate-800 p-2 rounded-md">
                View Your Favorite Movies
                </div>
                </NavLink>
           
            
            </nav>
          
            <Outlet/>
        </div>
    )
}

export default HelpLayout