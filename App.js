import React from 'react';
import { Button, View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const App = ({ navigation }) => {
  return (
    <View style={styles.container}>

  <Text style={styles.headingTop}>Covered Topics</Text>

      <View style={styles.buttonsContainer}>



        <TouchableOpacity
          style={styles.button}
          title='Student List'
          onPress={() => navigation.navigate('Student List')}
        >
          <Text style={styles.buttonText}>Student List</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          title='Header & Boxes'
          onPress={() => navigation.navigate('Headers')}
        >
          <Text style={styles.buttonText}>Header & Boxes</Text>
        </TouchableOpacity>



        <TouchableOpacity
          style={styles.button}
          title='FlatList'
          onPress={() => navigation.navigate('Flat list')}
        >
          <Text style={styles.buttonText}>Flat List</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          title='LinkingURL'
          onPress={() => navigation.navigate('Linking OpenURL')}
        >
          <Text style={styles.buttonText}>Linking OpenURL</Text>
        </TouchableOpacity>

      </View></View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    backgroundColor:'black',

  },
  headingTop:{
color:'#fff',
fontSize:30,
textAlign:'center',
fontWeight:'600'
  },
  buttonsContainer: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    marginTop: 10,
    alignItems:'center',
    // borderColor:'red',
    // borderWidth:2
   


  },
  button: {
    backgroundColor: '#53bdeb',
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 6,
    
    width: 200,
    height: 50,
    justifyContent:'center',
    marginTop: 10,
    // borderWidth:2

  },
  buttonText: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign:'center',
    fontSize: 16,
    color: '#fff',
    fontWeight: '600'
  }
});

export default App;
