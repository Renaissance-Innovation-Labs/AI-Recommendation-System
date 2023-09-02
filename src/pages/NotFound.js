import { Link } from "react-router-dom"

const NotFound = () => {

    return (
        <div className="flex flex-col items-start p-6 max-w-3xl gap-6 mt-24">
             <h2 className="text-xl font-bold">
                Page Not Found!!!
            </h2>

            <p className="leading-12">
                Sed ut perspiciatis unde omnis iste natus error sit
                voluptatem accusantium doloremque laudantium, totam
                rem aperiam, eaque ipsa quae ab illo inventore veritatis
                et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
                sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam eius modi
                tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
                suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
                vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae
                consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur
            </p>

            <p>
                Go To <Link to="/home"><span className="text-red-300">HomePage</span></Link>
            </p>

        </div>
    )
}

export default NotFound