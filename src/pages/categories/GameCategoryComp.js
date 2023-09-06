import GameGenre from './components/GameGenre'
import gameposter from './images/gameposters.jpg'
import { useState } from 'react'

const GameCategoryComp = () => {

    const [isShown, setIsShown] = useState(false)

    const handleToggleModal = () => {
        setIsShown(true)
    }

    const handledToggleModal = () => {
        setIsShown(!isShown)
    }

    return (
        
        <div className="group w-full relative h-fit rounded-xl sm:w-72 md:w-96">
            <div>
                <img src={gameposter} alt='game poster' className='w-full h-fit rounded-xl'/>   
            </div>
            {/* <div className="hidden group-hover:flex font-bold  w-full h-full absolute top-0 right-0 bottom-0 left-0 cursor-pointer bg-black/30 text-white
             flex-col justify-center items-center gap-6 mx-auto opacity-0 transition duration-300 ease-in-out hover:opacity-100
             rounded-xl overflow-hidden"> */}
            
            <div className="flex font-bold  w-full h-full absolute top-0 right-0 bottom-0 left-0 cursor-pointer bg-black/50 text-white
             flex-col justify-center items-center gap-6 mx-auto opacity-100 transition duration-300 ease-in-out
             rounded-xl overflow-hidden md:hidden md:group-hover:flex md:opacity-0  md:hover:opacity-100">

               
                <div className=' flex flex-col justify-center items-center gap-6'>
                    <h1 className='text-3xl'> Game Catalogue</h1>

                    <button onClick={handleToggleModal} className='bg-red-600 px-3 py-3 rounded-lg text-white text-sm'>
                        Show Game Catalogue
                    </button>
              </div>
            </div>
            {isShown && (
               
               <GameGenre onHandToggleGameModal = {handledToggleModal} />
               )}
        </div>

    )
}

export default GameCategoryComp