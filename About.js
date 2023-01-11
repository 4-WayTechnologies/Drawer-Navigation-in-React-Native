import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'

const About = () => {
  return (
    <View style={styles.container}>
     
      <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSm52KQjdBLjN4vrOPuRDxN54BjYDGon7A1a6MTX56b9IRr_HmMdfo2oI8VHXGb_RqHJ0&usqp=CAU'}} style={styles.image}/>
    </View>
  )
}

export default About

const styles = StyleSheet.create({
    container:{
        flex:1,
    
    },image:{
        width:'100%',
        height:'100%'
    }
})