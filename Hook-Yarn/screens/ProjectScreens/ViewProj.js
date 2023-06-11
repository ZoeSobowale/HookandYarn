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


export default function ViewNoteScreen({ route , navigation}) {
  const [note, setNote] = useState({});

  const handleClearProject = async () => {
    const noteKey = `note_${note.id}`;
    const removed = await removeItemValue(noteKey);
    if (removed) {
      navigation.navigate('NewProject');
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const noteKey = `note_${route.params.id}`;
        const noteJSON = await AsyncStorage.getItem(noteKey);
        const note = JSON.parse(noteJSON);
        if (note) {
          setNote(note);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [route.params.id]);

  return (
    <ScrollView contentContainerStyle={styles.projectsContainer}>
      <Text style={styles.title}>{note.title}</Text>
      <Text style={styles.notes}>{note.notes}</Text>
      {note.photo && <Image source={{ uri: `data:image/png;base64,${note.photo}` }} style={styles.photo} />}
      <Button onPress={handleClearProject} title="Clear Project">
        <Text style={styles.buttonText}>{"Clear Project"}</Text>
      </Button>
    </ScrollView>
  );
}
