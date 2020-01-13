import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
    const [name, setName] = useState("Lu'lu'");
    const [person, setPerson] = useState({ name: "Marjan", age: 21})
    
    const clickHandler = () => {
      setName('Aqila');
      setPerson({ name: 'Alin', age: 19})
    }
    
      return (
        <View style={styles.container}>
          <Text>My name is {name}</Text>
          <Text>Her brother name is {person.name} and his age is {person.age}</Text>
          <View style={styles.buttonContainer}>
            <Button title='update state' onPress={clickHandler} />
          </View>
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      buttonContainer: {
        marginTop: 20
      }
    });