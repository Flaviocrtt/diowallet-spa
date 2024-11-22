import logo from "../assets/logo.png";
import Input from "../components/Input";
import Button from "../components/Button";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function Signup(){

    return (
        <div className="flex flex-col items-center justify-around bg-zinc-900 rounded p-8 w-[35rem] h-[35rem] relative">
            <Link to="/signin" className="hover:text-sky-600">
                <BiArrowBack className="text-white absolute top-3 left-3 text-2xl"/>
            </Link>
            <img src={logo} alt="logo" className="w-44" />
            
            <form className="flex flex-col justify-center gap-4 w-full text-2xl">
                <Input type="text" placeholder="name" name="name" />
                <Input type="email" placeholder="email" name="email"/>
                <Input type="password" placeholder="password" name="password"/>
                <Button type="submit" text="SIGNUP"/>
                <p className="text-white text-2xl">Already have an account? <Link to="/signin" className="text-sky-400 hover:text-sky-600">SignIn</Link> </p>
            </form> 
            </div>
    )

}