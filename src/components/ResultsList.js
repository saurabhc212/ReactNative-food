import React from 'react';
import { Text, StyleSheet, View, FlatList, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import ResultsDetails from './ResultsDetails';

const ResultsList = ({title, results, navigation }) => {
    if(!results.length){
        return null;
    }
    return <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <FlatList 
      horizontal
      data={results}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(result) => result.id}
      renderItem={({item}) =>{
      return (
          <TouchableOpacity onPress={() => navigation.navigate('ResultsShow', { id:item.id })}>
            <ResultsDetails result={item}/>
          </TouchableOpacity>
      )
      }}
    />
    </View>
}

const styles = StyleSheet.create({
   title:{
       fontSize:18,
       fontWeight:'bold',
       marginLeft:15,
       marginBottom:5
   },
   container:{
       marginBottom:10
   }
})
export default withNavigation(ResultsList);