import axios from 'axios';
import Cookies from 'js-cookie';
const BASE_URL = 'http://localhost:5000';

export async function findAllTransactions(){
    const response = axios.get(BASE_URL + '/transaction/list',  {
        headers: {Authorization: 'Bearer ' + Cookies.get('token')}
    });
    return response;
}

export async function createNewTransaction(body){
    const response = axios.post(BASE_URL + '/transaction/create', body, {
        headers: {Authorization: 'Bearer ' + Cookies.get('token')}
    });
    return response;
}