import { NavLink, Outlet } from "react-router-dom"


const HelpLayout = () => {

    return (
        <>
            <h2>Api Rendering</h2>
            
            <nav className="border-2 border-solid border-slate-800 py-3 w-36 m-2 hover:bg-black hover:text-white">
                
            <NavLink to= "SongRecommendations">View Your Playlists</NavLink>
            
            </nav>
          
            <Outlet/>
        </>
    )
}

export default HelpLayout