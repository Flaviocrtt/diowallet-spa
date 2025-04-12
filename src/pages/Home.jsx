import logo from '../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { GoSignOut } from "react-icons/go";
import { MdOutlineDelete } from "react-icons/md";
import Button from '../components/Button';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { userLogged } from '../services/user';
import { deleteTransaction, findAllTransactions } from '../services/transactions';
import dayjs from 'dayjs';
import ErrorInput from '../components/ErrorInput';

export default function Home(){

    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const [transactions, setTransactions] = useState([]);
    const [balance, setBalance] = useState(0); 
    const [apiError, setApiError] = useState(); 

    function validateToken(){
        const token  = Cookies.get('token');      
        if(!token) navigate("/signin")
    }

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

    async function getAllTransactions() {
        try{
            const response = await findAllTransactions();
            setTransactions(response.data);
            calculateBalance(response.data);
        }catch(error){
            console.log(error);
        }
    }

    async function deleteCurrentTransaction(id) {
        try {
            await deleteTransaction(id)
            getAllTransactions();
        } catch (error) {
            setApiError(error.message);
        }
    }

    function calculateBalance(transactions) {
        let total = 0;
        transactions.map((e) => (e.type=="input")
            ? total+=e.value 
            : total-=e.value
        );
        
        setBalance(total);
    }
        
    useEffect(()=> {
        validateToken();
        getUserLogged();
        getAllTransactions();
    }, []);

    return (

        <main className="flex flex-col items-center justify-around bg-zinc-900 rounded p-8 w-[35rem] h-[35rem]">
        
            <header className="flex items-center justify-between w-full pb-4">
                <img src={logo} alt="logo" className='w-32'/>
                <div className="flex items-center gap-4 text-white text-2xl">
                    <Link to="/userprofile">
                        <h1>Olá, {user.name}</h1>
                    </Link>
                    <Link to="/signin">
                        <GoSignOut/>
                    </Link>
                </div>
            </header>
            <div className='w-full flex items-center justify-center'>
                {apiError && <ErrorInput className='w-full' text={apiError}/> }
            </div>
            <section className='bg-zinc-300 p-4 w-full h-full rounded flex items-center justify-center'>  
                { transactions.length ? (
                    <ul className='w-full h-full flex flex-col justify-between'>
                        <div className='h-[17rem] overflow-auto p-3'>
                            {transactions.map((transaction, index) => (
                                <div key={index} className='flex justify-between items-start w-full gap-1'>  
                                    <Link to={"/transaction/edit/" + transaction._id} className='w-full' >
                                        <li className='flex justify-between items-start w-full'>
                                    
                                            <span className='flex items-center gap-2'>
                                                <span className='text-zinc-500'>
                                                    {dayjs(transaction.createdAt).format("DD/MM/YY")}
                                                </span>
                                                {transaction.description}
                                            </span>
                                            <span className={
                                                    (transaction.type === 'input')
                                                    ?"text-green-500"
                                                    :"text-red-500"
                                                }>
                                                {transaction.value}
                                            </span>
                                        </li>
                                    </Link>
                                    <MdOutlineDelete 
                                        className='h-full self-center cursor-pointer'
                                        onClick={() => {if(confirm("Delete this transaction?")) deleteCurrentTransaction(transaction._id)}}
                                    />
                                </div>
                            ) )}
                        </div>
                        <li className='flex justify-between items-start w-full'>
                            <span>Total</span>
                            <span className={
                                (balance > 0 )
                                ?"text-green-500"
                                :"text-red-500"}>
                                {balance}
                            </span>
                            
                            </li>
                    </ul>
                ) : (
                    <p>Nenhuma transação encontrada</p>
                )}
                    </section>

            <footer className='w-full pt-2 flex gap-2 text-white text-lg font-bold'>
                    <Button text="New Input" type="button" icon="plus" transactionType="input"/>
                    <Button text="New Output" type="button" icon="minus" transactionType="output"/>
            </footer>

        </main>
    )
}