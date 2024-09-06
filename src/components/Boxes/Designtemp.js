import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Designtemp() {
    return (
        <View style={styles.container}>
      
      <View style={styles.boxes}>
      
            <View>
                <Text style={styles.Red}></Text>
                </View>

            <View>
                <Text style={styles.Green}></Text>
                </View>

            <View>
                <Text style={styles.Blue}></Text>
                </View>
            
            <View>
                <Text style={styles.Aqua}></Text>
            </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    flex:0,
 marginLeft:10,
},
boxes:{
    display:'flex',
    flex:-1,
flexDirection:'row',
},
    Red:{
        color:'white',
        backgroundColor:'red',
        width:80,
        height:80,
        borderRadius:2,
        margin:6

    },
    Green:{
        color:'white',
        backgroundColor:'green',
        width:80,
        height:80,
        borderRadius:2,
        margin:6
    },
    Blue:{
        color:'white',
        backgroundColor:'blue',
        width:80,
        height:80,
        borderRadius:2,
        margin:6
    },
    Aqua:{
        color:'white',
        backgroundColor:'aqua',
        width:80,
        height:80,
        borderRadius:2,
        margin:6
    }
})