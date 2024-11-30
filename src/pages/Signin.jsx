import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import logo from "../assets/logo.png";
import Button from "../components/Button";
import Input from "../components/Input";

export default function Signin(){
    const {register, handleSubmit} =  useForm();

    function handleSubmitForm(data){
        console.log(data);
        
    }

    return (
        <div className="flex flex-col items-center justify-around bg-zinc-900 rounded p-8 w-[35rem] h-[35rem]">
            <img src={logo} alt="logo" className="w-44" />
            <form onSubmit={handleSubmit(handleSubmitForm)} className="flex flex-col justify-center gap-4 w-full text-2xl">
                
                <Input type="email" placeholder="email" name="email" register={register}/>
                <Input type="password" placeholder="password" name="password" register={register}/>
                <Button type="submit" text="SIGNIN"/>
                
                <p className="text-white text-2xl">Dont you have account? <Link to="/signup" className="text-sky-400 hover:text-sky-600">Register</Link></p>

            </form> 

        </div>
    )
}