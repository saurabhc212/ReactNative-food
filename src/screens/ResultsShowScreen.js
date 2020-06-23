import React, { useState, useEffect } from 'react';
import {Text,StyleSheet,View,FlatList,Image} from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({navigation}) => {
    const [result,setResult] = useState([]);
    const id = navigation.getParam('id');
    const getResult = async (id) => {
        const response = await yelp.get('/food');
        setResult(response.data);
    }
    useEffect(()=>{getResult()},[]);
    if(result.length === 0){
        return null;
    }
    return <View>
    <Text>{id}</Text>
    <FlatList 
     data={result}    
     keyExtractor={(item)=>item.name}
     renderItem={({item})=>{
       return <Image style={styles.img} source={{uri:item.image_url}} />
     }}
    />
    </View>
}

const styles = StyleSheet.create({
 img:{
     height:300,
     width:200
 }
})
export default ResultsShowScreen;