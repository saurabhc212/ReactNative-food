import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';

const ResultsDetails = ({result}) => {
    return <View style={styles.container}>
    <Image style={styles.image} source={{uri:result.image_url}} />
    <Text style={styles.name}>{result.name}</Text>
    <Text>{result.rating} Stars, {result.review_count} Review</Text>
    </View>
}

const styles = StyleSheet.create({
  container:{marginLeft:15},
  image:{
      width:250,
      borderRadius:4,
      height:120,
      marginBottom:5
  },
  name:{fontWeight:'bold'},

})
export default ResultsDetails;