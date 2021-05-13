import axios from 'axios';


const url = 'http://www.example.com/api/get/1';


export const fetchData = async() => {
    try{
        const data = await axios.get(url);
        return data;
    }catch(error){
        return error;
    }
}