import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    { name: 'ulfi', key: '1' },
    { name: 'angga', key: '2' },
    { name: 'nur', key: '3' },
    { name: 'agra', key: '4' },
    { name: 'fatimah', key: '5' },
    { name: 'lulu', key: '6' },
    { name: 'tresna', key: '7' },
  ]);

  return (
    <View style={styles.container}>
      <ScrollView>
        {
          // people.map((item) => {
          //   return (
          //     <View key={item.key}>
          //       <Text style={styles.item}>{item.name}</Text>
          //     </View>
          //   )
          // })

          people.map(item => (
            <View key={item.key}>
              <Text style={styles.item}>{item.name}</Text>
            </View>
          ))
        }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24
  }
});

/*
export default function App() {
const [name, setName] = useState("Lu'lu'");
const [age, setAge] = useState("30");

  return (
    <View style={styles.container}>
      <Text>Enter Name:</Text>
      <TextInput
      multiline
      style={styles.input}
      placeholder='e.g. John Doe'
      onChangeText={(val) => setName(val)} />

      <Text>Enter Age:</Text>
      <TextInput
      keyboardType='numeric'
      style={styles.input}
      placeholder='e.g. 99'
      onChangeText={(val) => setAge(val)} />

      <Text>name: {name}, age: {age}</Text>
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
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  }
});
*/

/*
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
*/

/*export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>Hello World!</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.boldText}>This is my first project of React Native</Text>
        <Text>This is my first project of React Native</Text>
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
  header: {
    backgroundColor: 'pink',
    padding: 20
  },
  boldText: {
    fontWeight: 'bold'
  },
  body: {
    backgroundColor: 'yellow',
    padding: 20
  }
});*/
