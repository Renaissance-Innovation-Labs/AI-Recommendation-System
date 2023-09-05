import { NavLink, Outlet } from 'react-router-dom'
import worldlogo from '../pages/categories/images/worldlogo.png'
import recomzenguidelogo from '../pages/categories/images/recom-zens-guides.png'
import googleicons from '../pages/categories/images/googleicons.svg'
import Facebookicon from '../pages/categories/images/Facebookicon.svg'
import instagramicon from '../pages/categories/images/instagramicon.js.svg'
import homeicon from '../pages/categories/images/icons8-home.svg'
import Aboutus from '../pages/categories/images/about-us-svgrepo-com (1).svg'


const RootLayout = () => {

    return (
        <div className='font-Roboto'>
            <header>
            <nav className='w-full bg-gray-700  text-white flex flex-row justify-end gap-x-12 h-fit  pr-6'>
            <div className='flex-1 px-2 pt-3 w-12 h-12'>
                <img src={worldlogo} alt='world logo' className='w-12 h-12 rounded-full' />
           </div>
            {/* <div className='flex-1 px-2 pt-3 w-fit h-fit'>
                <img src={recomzenguidelogo} alt='world logo' className='w-44 h-12 rounded-full' />
           </div> */}
                    <NavLink className={'text-2xl focus:bg-gray-700 py-6'} to="Home">
                       <h1 className='hidden md:block'>Home</h1>
                        <img src={homeicon} alt='home icon' className='w-8 h-8  md:hidden' />
                    </NavLink>
                    <NavLink className={'text-2xl focus:bg-gray-700 py-6'} to="About">
                    <h1 className='hidden md:block'>About</h1>
                    <img src={Aboutus} alt='home icon' className='w-8 h-8  md:hidden' />
                    </NavLink>
            </nav>
            </header>
            
        
            
            <main className='w-full py-6 min-h-screen'>
                <Outlet />
            </main>
            
        <footer>
            <div className='w-full bg-gray-700 text-xs text-gray-300 px-2 h-fit md:text-md'>
               
                    <div className='flex flex-row justify-around py-12 items-center gap-6 w-full'>
                        <div className='flex flex-col w-fit p-2 gap-2'>
                            <h2>A creative agency in egypt</h2>
                            <div className='flex flex-row gap-2'>
                            <a href='https://www.google.com'>google</a>.
                            <p>08144444444</p>.
                            <p>Address</p>
                            </div>
                           <h2>One of the very best out there</h2>
                        </div>
                        <div className='hidden md:flex md:flex-row md:gap-2'>
                        <a className='border-b-2 border-b-slate-500' href='https://www.google.com'>google</a>.
                        <a className='border-b-2 border-b-slate-500' href='https://www.facebook.com'>Facebook</a>.
                        <a className='border-b-2 border-b-slate-500' href='https://www.instagram.com'>Instagram</a>
                        </div>
                        <div className='flex flex-row gap-2 md:hidden'>
                            <a href='https://www.google.com'>
                            <img src={googleicons} alt='world logo' className='w-6 h-6 text-white' />
                            </a>
                            <a href='https://www.facebook.com'>
                            <img src={Facebookicon} alt='world logo' className='h-6 w-6' />
                            </a>

                            <a href='https://www.facebook.com'>
                            <img src={instagramicon} alt='world logo' className='h-6 w-6' />
                            </a>
                        </div>
                    </div>
            </div>
        </footer>
        </div>

    )
}

export default RootLayout