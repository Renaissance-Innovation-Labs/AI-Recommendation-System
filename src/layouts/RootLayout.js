import { NavLink, Outlet } from 'react-router-dom'
import worldlogo from '../pages/categories/images/worldlogo.png'


const RootLayout = () => {

    return (
        <div>
            <header>
            <nav className='w-full bg-black text-white flex flex-row justify-end gap-x-12 h-fit  pr-6'>
            <div className='flex-1 w-12 h-12 px-2 pt-3'>
                <img src={worldlogo} alt='world logo' className='w-12 h-12 rounded-full' />
           </div>
            <NavLink className={'text-2xl focus:bg-red-600 py-6 px-3'} to="Home">Home</NavLink>
            <NavLink className={'text-2xl py-6'} to="About">About</NavLink>
            </nav>
            </header>
            
        
            
            <main className='w-full min-h-screen'>
                <Outlet />
            </main>
            
        <footer>
            <div className='w-full bg-black text-white flex flex-row justify-end gap-x-12 h-fit  pr-6'>
                <h1 className='flex-1 px-2 py-6 text-2xl'>home direction</h1>
                <NavLink className={'text-2xl focus:bg-red-600 py-6 px-3'} to="Home">Home</NavLink>
                <NavLink className={'text-2xl py-6'} to="About">About</NavLink>
                    {/* <NavLink className={'text-2xl py-6'} to="ApiLoad">Api page</NavLink> */}
            </div>
        </footer>
        </div>

    )
}

export default RootLayout