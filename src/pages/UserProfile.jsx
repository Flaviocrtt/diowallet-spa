import logo from '../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { GoSignOut } from "react-icons/go";
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { userLogged } from '../services/user';
import dayjs from 'dayjs';
import ErrorInput from '../components/ErrorInput';
import Input from '../components/Input';
import { useForm } from 'react-hook-form';
import { BiArrowBack } from 'react-icons/bi';

export default function UserProfile(){

    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const [apiError, setApiError] = useState(); 
    const { register } = useForm();

    async function getUserLogged() {
        try{
            const response = await userLogged();       
            setUser(response.data);    
        }catch(error){
            if(error.status == 401){
                Cookies.remove('token');
                alert(error.message);
                navigate("/signin");
                return;
            }
            setApiError(error.message);
        }
    }
        
    useEffect(()=> {
        getUserLogged();
    }, []);

    return (
        <div className="flex flex-col items-center justify-around bg-zinc-900 rounded p-8 gap-4">
             <header className='w-full flex items-center justify-between text-white'>
                <Link to="/" className="hover:text-sky-600 ">
                    <BiArrowBack className=" top-3 left-3 text-2xl"/>
                </Link>
                <h1 className='w-full text-center'>User Profile</h1>
            </header>
            <div className='w-full flex items-center justify-center'>
                {apiError && <ErrorInput className='w-full' text={apiError}/> }
            </div>
            <form className='text-white gap-4'> 
                <Input type="text" label="Name" name="name" disabled={true} placeholder={user.name} register={register}/>
                <Input type="text" label="Email" name="email" disabled={true} placeholder={user.email} register={register}/>
                <Input type="text" label="Created At" name="createdAt" disabled={true} 
                    placeholder={dayjs(user.createdAt).format("DD/MM/YY HH:mm")} register={register}/>

            </form>
        </div>
    )
}