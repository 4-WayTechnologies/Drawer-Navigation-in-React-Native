import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View style={styles.container}>
     
      <Image source={{uri:'https://images.unsplash.com/photo-1483232539664-d89822fb5d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80'}} style={styles.image}/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex:1,
    
    },image:{
        width:'100%',
        height:'100%'
    }
})