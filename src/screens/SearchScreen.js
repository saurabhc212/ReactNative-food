import React, { useState } from 'react';
import {Text,StyleSheet, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
 const [term, setTerm] = useState('');
 const [searchApi,results,errMessage] = useResults();
 const filterResultsByPrice = (p1,p2) => {
    return results.filter(result => result.price > p1 && result.price < p2)
 }
    return <>
    <SearchBar
     term={term}
     onTermChange={(newTerm)=>{setTerm(newTerm)}}
     onTermSubmit={()=>searchApi()}
    />
    {errMessage?<Text>{errMessage}</Text>:null}
    <ScrollView>
    <ResultsList  results={filterResultsByPrice(0,35)} title='Cost Effective'/>
    <ResultsList  results={filterResultsByPrice(35,70)} title='Bit Costlier'/>
    <ResultsList  results={filterResultsByPrice(70,100)} title='Big Spender'/>
    <ResultsList  results={filterResultsByPrice(70,100)} title='Big Spender'/>
    </ScrollView>
    </>
}

const styles = StyleSheet.create({
    
})
export default SearchScreen;