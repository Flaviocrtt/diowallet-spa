
import { BiPlusCircle, BiMinusCircle } from 'react-icons/bi';
// eslint-disable-next-line react/prop-types
export default function Button({type, text, icon}){
    let IconConponnent;

    if(icon==="plus") IconConponnent = BiPlusCircle;
    if(icon==="minus") IconConponnent = BiMinusCircle;

    return (
        <button
            type={type}
            className="px-4 py-2 rounded w-full font-bold text-white text-2xl bg-indigo-600 flex items-center justify-center gap-2">
            {IconConponnent && <IconConponnent/>}
            {text} 
        </button>
    )
}