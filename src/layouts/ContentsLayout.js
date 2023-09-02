import { NavLink, Outlet } from "react-router-dom"


const ContentsLayout = () => {

    return (
        <>
            <h2>Api Rendering</h2>
            
            <nav>
                
            <NavLink to= "home">View Your Playlists</NavLink>
            <NavLink to= "About">View Your Playlists</NavLink>
            
            </nav>
          
            <Outlet/>
        </>
    )
}

export default ContentsLayout