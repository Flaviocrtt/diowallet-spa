import logo from "../assets/logo.png";
import Input from "../components/Input";
import Button from "../components/Button";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import ErrorInput from "../components/ErrorInput";

const signupSchema = z.object({
    name: z.string().min(2).trim(),
    email: z.string().nonempty("email é obrigatório").email().toLowerCase(),
    password: z.string().min(4, "digite pelo menos 4 caractaeres"),
    confirmPassword: z.string(),
}).refine((data) => data.password == data.confirmPassword,{
    message: "as senhas não correspondem",
    path:["confirmPassword"]
} )

export default function Signup(){

       const {register, 
           handleSubmit, 
           formState: {errors}
       } =  useForm({resolver: zodResolver(signupSchema)});
   

    function handleSubmitForm(data){
        console.log(data);
        
    }

    return (
        <div className="flex flex-col items-center justify-around bg-zinc-900 rounded p-8 w-[35rem] h-[35rem] relative">
            <Link to="/signin" className="hover:text-sky-600">
                <BiArrowBack className="text-white absolute top-3 left-3 text-2xl"/>
            </Link>
            <img src={logo} alt="logo" className="w-44" />
            
            <form onSubmit={handleSubmit(handleSubmitForm)} className="flex flex-col justify-center gap-4 w-full text-2xl">
                <Input type="text" placeholder="name" name="name" register={register}/>
                {errors.name && <ErrorInput text={errors.name.message}/> }
                <Input type="email" placeholder="email" name="email" register={register}/>
                {errors.email && <ErrorInput text={errors.email.message}/> }
                <Input type="password" placeholder="password" name="password" register={register}/>
                {errors.password && <ErrorInput text={errors.password.message}/> }
                <Input type="password" placeholder="confirm password" name="confirmPassword" register={register}/>
                {errors.confirmPassword && <ErrorInput text={errors.confirmPassword.message}/> }
                <Button type="submit" text="SIGNUP"/>
                <p className="text-white text-2xl">Already have an account? <Link to="/signin" className="text-sky-400 hover:text-sky-600">SignIn</Link> </p>
            </form> 
            </div>
    )

}