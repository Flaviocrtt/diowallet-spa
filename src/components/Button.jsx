
import { BiPlusCircle, BiMinusCircle } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
// eslint-disable-next-line react/prop-types
export default function Button({type, text, icon, transactionType}){
    let IconConponnent;
    const navigate = useNavigate();

    if(icon==="plus") IconConponnent = BiPlusCircle;
    if(icon==="minus") IconConponnent = BiMinusCircle;

    return (
        <button
            type={type}
            className="px-4 py-2 rounded w-full font-bold text-white text-2xl bg-indigo-600 flex items-center justify-center gap-2"
            onClick={ () => { transactionType && navigate('/transaction/' + transactionType)}} >
            {IconConponnent && <IconConponnent/>}
            {text} 
        </button>
    )
}