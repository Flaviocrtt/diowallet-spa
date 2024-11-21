import logo from "../assets/logo.png";
import Input from "../components/Input";
import Button from "../components/Button";
import { BiArrowBack } from "react-icons/bi";

export default function Signup(){

    return (
        <div className="flex flex-col items-center justify-around bg-zinc-900 rounded p-8 w-[35rem] h-[35rem] relative">
            
            <BiArrowBack className="text-white absolute top-3 left-3 text-2xl"/>

            <img src={logo} alt="logo" className="w-44" />
            
            <form className="flex flex-col justify-center gap-4 w-full text-2xl">
                <Input type="text" placeholder="name" name="name" />
                <Input type="email" placeholder="email" name="email"/>
                <Input type="password" placeholder="password" name="password"/>
                <Button type="submit" text="SIGNUP"/>
                <p className="text-white text-2xl">Already have an account? SignIn</p>
            </form> 
            </div>
    )

}