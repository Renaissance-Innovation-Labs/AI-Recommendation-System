import gameposter from './images/gameposters.jpg'

const GameCategoryComp = () => {

    return (
        
        <div className="w-full relative h-fit border-2 border-solid border-slate-800 rounded-xl md:w-96">
        <div>
            <img src={gameposter} alt='game poster' className='w-full h-fit rounded-xl'/>   
        </div>
        <div className="font-bold  w-full h-full absolute top-0 right-0 bottom-0 left-0 cursor-pointer bg-black text-white text-3xl
        flex flex-col justify-center items-center gap-6 mx-auto text-opacity-0 bg-opacity-0 transition duration-300 ease-in-out hover:text-opacity-100
         hover:bg-opacity-60 rounded-xl overflow-hidden">
           Game Catalogue
            
            {/* <div className='flex flex-col w-full h-full items-center justify-center gap-6 opacity-0 transition duration-300 ease-in-out hover:opacity-100'> */}
            {/* <h3>Movie Catalogue</h3> */}
            <button className='bg-red-600 px-3 py-3 rounded-lg text-white text-sm
            opacity-0 transition duration-300 ease-in-out hover:opacity-100'>
                    Show Game Catalogue
            </button>
           {/* </div> */}
        </div>
    </div>

    )
}

export default GameCategoryComp