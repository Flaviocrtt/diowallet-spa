// eslint-disable-next-line react/prop-types
export default function Input({type, placeholder, name}){
    return (
        <input 
            type={type}
            placeholder={placeholder}
            name={name}
            className="rounded p-2 w-full"
        />
    )
}