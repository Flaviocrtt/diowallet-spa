import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import logo from "../assets/logo.png";
import Button from "../components/Button";
import Input from "../components/Input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import ErrorInput from "../components/ErrorInput";

const signinSchema = z.object({
    email: z.string().nonempty("email é obrigatório").email().toLowerCase(),
    password: z.string().min(4, "digite pelo menos 4 caractaeres")
})

export default function Signin(){
    const {register, 
        handleSubmit, 
        formState: {errors}
    } =  useForm({resolver: zodResolver(signinSchema)});

    function handleSubmitForm(data){
        console.log(data);
        
    }

    return (
        <div className="flex flex-col items-center justify-around bg-zinc-900 rounded p-8 w-[35rem] h-[35rem]">
            <img src={logo} alt="logo" className="w-44" />
            <form onSubmit={handleSubmit(handleSubmitForm)} className="flex flex-col justify-center gap-4 w-full text-2xl">
                
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