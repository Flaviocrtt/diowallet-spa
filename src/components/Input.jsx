// eslint-disable-next-line react/prop-types
export default function Input({ type, label, placeholder, name, register, disabled}){
    return (
        <div>
            { label && <label htmlFor={name} className="text-white opacity-90">{label}</label>}
            <input 
                type={type}
                placeholder={placeholder}
                name={name}
                className="rounded p-2 w-full"
                {...register(name)}
                disabled={disabled}
            />
        </div>
    )
}