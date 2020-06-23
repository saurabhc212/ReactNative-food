import { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults ] = useState([]);
    const [errMessage, setErrorMessage] = useState('');
   
    const searchApi = async () =>{
        try{
           const response = await yelp.get('/food');
           setResults(response.data);
        }catch (e){
           setErrorMessage('Something went wrong');
        }
    }
    useEffect(()=>{
       searchApi();
    },[]);
    return [searchApi, results, errMessage];
}