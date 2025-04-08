import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage(){

    const error = useRouteError();

    return (
        <div className="flex flex-col items-center justify-around bg-zinc-900 rounded p-8 text-white">
            <h1>Error {error.status}</h1>
            <p>{error.message}</p>
            <p>{error.data}</p>
            <Link to="/" className="text-sky-400 hover:text-sky-600">Go to home page</Link>
        </div>
    )
}