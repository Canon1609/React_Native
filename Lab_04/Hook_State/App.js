import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  let init = 1;
  const [diceRolls, setDiceRolls] = useState([])
  const [counter , setCounter] = useState(init);
  return (

    <View style={{flex:1,marginTop:30}} >
      <Button
        title="Roll dice!"
        onPress={() => {
          setCounter(counter+1)
          setDiceRolls([...diceRolls, counter])
        }}
      />
      {diceRolls.map((diceRoll, index) => (
        <Text style={{ fontSize: 24 }} key={index}>
          {diceRoll}
        </Text>
      ))}

    <View style={{marginTop:30}}>
    <Button
        title="Roll dice Array!"
        onPress={() => {
          // Tăng mỗi giá trị trong mảng diceRolls lên 2 đơn vị
          setDiceRolls(diceRolls.map(roll => roll + 2))
        }}
      />
      {/* {diceRolls.map((diceRoll, index) => (
        <Text style={{ fontSize: 24 }} key={index}>
          {diceRoll}
        </Text>
      ))} */}
    </View>

    <View style={{flex:1,marginTop:30}}>
    <Button
        title="Reload"
        onPress={() => {
          setCounter(init)
          setDiceRolls([])   
        }}
      />
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
});
