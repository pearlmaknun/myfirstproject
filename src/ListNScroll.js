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
