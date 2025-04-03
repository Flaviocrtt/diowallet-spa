
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { GoSignOut } from "react-icons/go";
import Button from '../components/Button';

export default function Home(){
    return (

        <main className="flex flex-col items-center justify-around bg-zinc-900 rounded p-8 w-[35rem] h-[35rem]">
        
            <header className="flex items-center justify-between w-full pb-4">
                <img src={logo} alt="logo" className='w-32'/>
                <div className="flex items-center gap-4 text-white text-2xl">
                    <h1>Olá, Pessoa</h1>
                    <Link to="/signin">
                        <GoSignOut/>
                    </Link>
                </div>
            </header>

            <section className='bg-zinc-300 p-4 w-full h-full rounded flex items-center justify-center'>
                <p>Nenhuma entrada ou saída</p>
            </section>

            <footer className='w-full pt-2 flex gap-2 text-white text-lg font-bold'>
                    <Button text="New Input" type="button" icon="plus"/>
                    <Button text="New Output" type="button" icon="minus"/>
            </footer>

        </main>
    )
}