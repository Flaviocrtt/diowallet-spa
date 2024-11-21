// eslint-disable-next-line react/prop-types
export default function Button({type, text}){
    return (
        <button
            type={type}
            className="px-4 py-2 rounded w-full font-bold text-white text-2xl">
            {text}
        </button>
    )
}