import logo from "../assets/logo.png";
import Button from "../components/Button";
import Input from "../components/Input";

export default function Signin(){
    return (
        <div className="flex flex-col items-center justify-around bg-zinc-900 rounded p-8 w-[35rem] h-[35rem]">
            <img src={logo} alt="logo" className="w-44" />
            <form className="flex flex-col justify-center gap-4 w-full text-2xl">
                
                <Input type="email" placeholder="email" name="email"/>
                <Input type="password" placeholder="password"/>
                <Button type="submit" text="SIGNIN"/>
                
                <p className="text-white text-2xl">Dont you have account? Register</p>

            </form> 

        </div>
    )
}