import { useNavigate, useParams } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { transactionSchema } from "../schemas/transactionSchema";
import Input from "../components/Input";
import ErrorInput from "../components/ErrorInput";
import Button from "../components/Button";
import {createNewTransaction, getTransactionById, updateTransaction } from "../services/transactions";
import { useEffect, useState } from "react";

export default function NewTransaction(){
    const { type } = useParams();
    const { _id } = useParams();
    const navigate = useNavigate();
    const [transaction, setTransaction] = useState({type});
    const [apiError, setApiError] = useState();

    const {
        register, 
        handleSubmit, 
        formState: {errors},
        reset
    } = useForm({
        resolver: zodResolver(transactionSchema),
        defaultValues:{type}
    });

    async function handleSubmitForm(data){       
        
        try{
            if(_id){
                //const body = {...data, type };
                const response = await updateTransaction(_id, data);
                console.log(response);

            }else{
                //const body = {...data, type };
                const response = await createNewTransaction(data);
                console.log(response);
            }
                navigate("/home")
        }catch(error){
            setApiError(error.message);
            console.log(error);
        }        
    }

    async function getTransaction() {
        try {
            const response = await getTransactionById(_id);
            setTransaction(response.data);
            console.log(response.data);
            reset(transaction);
        } catch (error) {
            setApiError(error.message);
            console.log(error);
        }
    }

    useEffect(() => {
        if(_id){
            getTransaction();
        }
    }, []);

//todo: não permite editar o 'select' tipo de transação
    return (
        
    <div className="flex flex-col items-center justify-around bg-zinc-900 rounded p-8 gap-4">
        
        <header className='w-full flex items-center justify-between text-white'>
            <Link to="/" className="hover:text-sky-600 ">
                <BiArrowBack className=" top-3 left-3 text-2xl"/>
            </Link>
            <h1 className="text-2xl text-white font-bold">
                {_id && "Edit transaction"}
                {!_id && "New " + type}
            </h1>
        </header>

        <form onSubmit={handleSubmit(handleSubmitForm)} className="flex flex-col justify-center gap-3 w-full text-2xl">
            {apiError && <ErrorInput text={apiError}/> }
            <Input type="number" placeholder="Value" name="value" register={register} value={transaction.value}/>
            {errors.value && <ErrorInput text={errors.value.message}/> }

            <Input type="text" placeholder="Type a description" name="description" register={register} value={transaction.description} />
            {errors.description && <ErrorInput text={errors.description.message}/> }

            {_id && 
                <select 
                    className="rounded p-2 w-full"
                    name="type" 
                    id="type" 
                    {...register("type")} 
                    value={transaction.type} 
                >
                    <option value="">Select</option>
                    <option value="input">Input</option>
                    <option value="output">Output</option>
                </select>
            }
            <Button type="submit" text="SAVE"/>
        </form>
    </div> 
    )
}
