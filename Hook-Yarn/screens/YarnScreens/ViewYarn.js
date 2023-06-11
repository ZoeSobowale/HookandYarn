import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';
import { Button } from 'react-native';


const removeItemValue = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch (exception) {
    return false;
  }
};


export default function ViewBallScreen({ route , navigation}) {
  const [ball, setBall] = useState({});

  const handleClearYarn = async () => {
    const ballKey = `ball_${ball.id}`;
    const removed = await removeItemValue(ballKey);
    if (removed) {
      navigation.navigate('NewYarn');
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const ballKey = `ball_${route.params.id}`;
        const ballJSON = await AsyncStorage.getItem(ballKey);
        const ball = JSON.parse(ballJSON);
        if (ball) {
          setBall(ball);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [route.params.id]);

  return (
    <ScrollView contentContainerStyle={styles.yarnsContainer}>
      <Text style={styles.title}>{ball.title}</Text>
      <Text style={styles.notes}>Brand: {ball.brand}</Text>

      <Text style={styles.details}>Materials: {ball.material}</Text>
      <Text style={styles.details}>Colour: {ball.colour}</Text>
      <Text style={styles.details}>Weight: {ball.weight}</Text>
      <Text style={styles.details}>Hook Size: {ball.hookSize}</Text>

      <Text style={styles.notes}>Notes</Text>
      <Text style={styles.details}>{ball.notes}</Text>






 
      {ball.photo && <Image source={{ uri: `data:image/png;base64,${ball.photo}` }} style={styles.photo} />}
      <Button onPress={handleClearYarn} title="Clear Yarn">
        <Text style={styles.buttonText}>{"Clear Yarn"}</Text>
      </Button>
    </ScrollView>
  );
}
