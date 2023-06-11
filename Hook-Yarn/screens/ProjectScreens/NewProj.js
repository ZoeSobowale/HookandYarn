import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';

export default function AddNoteScreen({ navigation }) {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [photo, setPhoto] = useState(null);
  const [title, setTitle] = useState('');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    (async () => {
      const { status } = await Permissions.askAsync(Permissions.CAMERA);
      setHasCameraPermission(status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    if (this.camera) {
      let photo = await this.camera.takePictureAsync({ base64: true });
      setPhoto(photo);
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true,
    });

    if (!result.cancelled) {
      setPhoto(result);
    }
  };

  const saveNote = async () => {
    try {
      const id = await AsyncStorage.getItem('noteId');
      const newId = id ? parseInt(id) + 1 : 1;
      
      const newNote = {
        id: newId,
        title: title,
        notes: notes,
        photo: photo ? photo.base64 : null
      };

      await AsyncStorage.setItem(`note_${newId}`, JSON.stringify(newNote));
      await AsyncStorage.setItem('noteId', newId.toString());

      navigation.navigate('ViewNoteScreen', { id: newId });
    } catch (error) {
      console.log(error);
    }
  };

  if (hasCameraPermission === null) {
    return <View />;
  }
  if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.cameraPreview} type={type} ref={ref => (this.camera = ref)}>
        <TouchableOpacity
          style={styles.cameraFlipButton}
          onPress={() => setType(type === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back)}>
          <Text style={styles.cameraFlipText}>Flip</Text>
        </TouchableOpacity>
      </Camera>
      {photo && (
        <Image source={{ uri: `data:image/png;base64,${photo.base64}` }} style={styles.photoPreview} />
      )}
      <View style={styles.notesContainer}>
        <TextInput
          style={styles.titleInput}
          placeholder="Title"
          onChangeText={text => setTitle(text)}
          value={title}
        />
        <TextInput
          style={styles.notesInput}
          placeholder="Notes"
          onChangeText={text => setNotes(text)}
          value={notes}
          multiline={true}
        />
        <TouchableOpacity style={styles.photoButton} onPress={takePicture}>
          <Text style={styles.photoButtonText}>Take Photo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.photoButton} onPress={pickImage}>
          <Text style={styles.photoButtonText}>Add Photo</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.saveButton} onPress={saveNote}>
        <Text style={styles.saveButtonText}>Save Note</Text>
      </TouchableOpacity>
    </View>
  );
} 