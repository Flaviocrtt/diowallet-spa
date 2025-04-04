import { useParams } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { transactionSchema } from "../schemas/transactionSchema";
import Input from "../components/Input";
import ErrorInput from "../components/ErrorInput";
import Button from "../components/Button";

export default function NewTransaction(){
    const { type } = useParams();

    const {
        register, 
        handleSubmit, 
        formState: {errors}
    } = useForm({resolver: zodResolver(transactionSchema)});

    function handleSubmitForm(data){
        console.log(data);
    }

    return (
    <div className="flex flex-col items-center justify-around bg-zinc-900 rounded p-8 w-[35rem] h-[35rem] relative">
        <header className="flex items-start">
            <Link to="/home" className="hover:text-sky-600">
                <BiArrowBack className="text-white absolute top-3 left-3 text-2xl"/>
            </Link>
            <h1 className="text-2xl text-white font-bold">New {type}</h1>
        </header>
        <form onSubmit={handleSubmit(handleSubmitForm)} className="flex flex-col justify-center gap-4 w-full text-2xl">

            <Input type="number" placeholder="Value" name="value" register={register}/>
            {errors.value && <ErrorInput text={errors.value.message}/> }

            <Input type="text" placeholder="Type a description" name="description" register={register}/>
            {errors.description && <ErrorInput text={errors.description.message}/> }
            
            <Button type="submit" text="SAVE"/>
        </form>

    </div> 
    )
}
