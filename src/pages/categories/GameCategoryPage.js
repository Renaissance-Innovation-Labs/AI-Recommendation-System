import { useGameGenre } from "../../useContext/gameGenreContext"
import GameRecommendations from '../help/GameRecommendations'
import { Link } from "react-router-dom"



    function GameCategoryPage() {

        const { gameArr } = useGameGenre()

        const showGame = () => {
            console.log(gameArr)
        }

        return (
            <div className="p-3 space-y-6 w-full">
                <div className="w-full space-y-6 md:w-1/2">
                    <h2 className="font-bold text-4xl">Game Lists</h2>
                    <p className="px-1 text-lg">
                        Welcome back to Recom-Zen-Guide! You've already
                        chosen your favorite genres on the home page,
                        and now it's our turn to dial up the groove.
                        Get ready to immerse yourself in a handpicked
                        playlist tailored just for you. It's time to kick
                        back, feel the rhythm, and let the music take you
                        on a one-of-a-kind journey.
                    </p>
                </div>



                <div className="flex flex-col gap-3">
                    <h1 className="font-bold text-slate-600">Your Selected Genres</h1>
                    <div className="flex flex-row gap-3">
                        {gameArr.map((games, index) => (
                            <button
                                data-index={index}
                                key={index}
                                className='border-2 border-solid border-slate-600 p-3 rounded-lg w-36'
                                disabled>{games}</button>
                        ))}
                    </div>
                </div>


             <GameRecommendations />

                <div className="flex flex-col gap-3 md:flex-row">
                    <h1 className="pt-2">Want more recommendations? Try another genre!</h1>
                    <Link to='/home'>
                        <button className="bg-slate-600 text-white p-2 rounded-md md:text-md">Return to HomePage</button>
                    </Link>
                </div>
            </div>
        )
    }

export default GameCategoryPage