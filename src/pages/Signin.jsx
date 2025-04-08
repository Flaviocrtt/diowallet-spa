import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import logo from "../assets/logo.png";
import Button from "../components/Button";
import Input from "../components/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import ErrorInput from "../components/ErrorInput";
import { signinSchema } from "../schemas/signinSchema";
import { signin } from "../services/user";
import Cookies from 'js-cookie';
import { useEffect, useState } from "react";


export default function Signin(){

    const navigate = useNavigate();
    const [apiError, setApiError] = useState(); 
    const {register, 
        handleSubmit, 
        formState: {errors}
    } =  useForm({resolver: zodResolver(signinSchema)});

    async function handleSubmitForm(data){
        try{
            const token = await signin(data);
            Cookies.set('token', token.data, {expires: 1})
            navigate("/home");
        }catch(error){
            setApiError(error.message);
            console.log(error);
        } 
    }

    useEffect(() => {
        Cookies.remove('token');
    });

    return (
        <div className="flex flex-col items-center justify-around bg-zinc-900 rounded p-8 w-[35rem] h-[35rem]">
            <img src={logo} alt="logo" className="w-44" />
            <form onSubmit={handleSubmit(handleSubmitForm)} className="flex flex-col justify-center gap-3 w-full text-2xl">
                {apiError && <ErrorInput text={apiError}/> }
                <Input type="email" placeholder="email" name="email" register={register}/>
                {errors.email && <ErrorInput text={errors.email.message}/>}             
                <Input type="password" placeholder="password" name="password" register={register}/>
                {errors.password && <ErrorInput text={errors.password.message}/>}             
                <Button type="submit" text="SIGNIN"/>
                
                <p className="text-white text-2xl">Do not you have an account? <Link to="/signup" className="text-sky-400 hover:text-sky-600">Register</Link></p>
            </form> 
        </div>
    )
}