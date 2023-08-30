import { NavLink, Outlet } from 'react-router-dom'

const RootLayout = () => {

    return (
        <div>
            <header>
            <nav className='w-full bg-black text-white flex flex-row justify-end gap-x-12 h-fit  pr-6'>
            <h1 className='flex-1 px-2 py-6 text-2xl'>home direction</h1>
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
            </div>
        </footer>
        </div>

    )
}

export default RootLayout