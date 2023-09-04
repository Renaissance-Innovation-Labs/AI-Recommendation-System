import musicposter from './images/musicposter.jpg'
import MusicGenre from './components/MusicGenre'
import { useState } from 'react'
// import { MusicGenreContext } from "../../../useContext/musicGenreContext.js"
// import { songArr } from './components/MusicGenre'
// import MusicGenre from './components/MusicGenre'

const MusicCategoryComp = () => {

    const [isShown, setIsShown] = useState(false)

    const handleToggleModal = () => {
        setIsShown(true)
    }

    const handledToggleModal = () => {
        setIsShown(!isShown)
    }

    return (
        
        <div className=" group w-full relative h-fit rounded-xl md:w-96">
            <div>
                <img src={musicposter} alt='music poster' className='w-full h-fit rounded-xl'/>   
            </div>


            <div className="hidden group-hover:flex font-bold  w-full h-full absolute top-0 right-0 bottom-0 left-0 cursor-pointer bg-black/30 text-white
             flex-col justify-center items-center gap-6 mx-auto opacity-0 transition duration-300 ease-in-out hover:opacity-100
             rounded-xl overflow-hidden">

               
                <div className=' flex flex-col justify-center items-center gap-6'>
                    <h1 className='text-3xl'> Music Catalogue</h1>

                    <button onClick={handleToggleModal} className='bg-red-600 px-3 py-3 rounded-lg text-white text-sm'>
                        Show Music Catalogue
                    </button>
              </div>
            </div>
            {isShown && (
                
                    <MusicGenre onHandToggleModal={handledToggleModal} />
                
               )}
        </div>

    )
}

export default MusicCategoryComp