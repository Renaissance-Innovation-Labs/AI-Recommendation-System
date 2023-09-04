import { NavLink, Outlet } from "react-router-dom"


const HelpLayout = () => {

    return (
        <div className="p-3 space-y-6 w-full">
            <div className="w-full space-y-6 md:w-1/2">
            <h2 className="font-bold text-4xl">Music Lists</h2>
            <p className="px-1 text-lg">
                Sed ut perspiciatis unde omnis iste natus error sit
                voluptatem accusantium doloremque laudantium, totam
                rem aperiam, eaque ipsa quae ab illo inventore veritatis
                et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
                sequi nesciunt. Neque porro quisquam est,
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