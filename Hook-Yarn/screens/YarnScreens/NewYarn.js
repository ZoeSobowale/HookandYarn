import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';

export default function AddBallScreen({ navigation }) {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [photo, setPhoto] = useState(null);
  const [title, setTitle] = useState('');
  const [notes, setNotes] = useState('');
  const [brand, setBrand] = useState('');
  const [material, setMaterial] = useState('');
  const [colour, setColour] = useState('');
  const [weight, setWeight] = useState('');
  const [hookSize, setHookSize] = useState('');

  useEffect(() => {
    (async () => {
      const { status } = await Permissions.askAsync(Permissions.CAMERA);
      setHasCameraPermission(status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    if (this.camera) {
      const photo = await this.camera.takePictureAsync({ base64: true });
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

  const saveBall = async () => {
    try {
      const id = await AsyncStorage.getItem('ballId');
      const newId = id ? parseInt(id) + 1 : 1;
      
      const newBall = {
        id: newId,
        title: title,
        brand: brand,
        material: material,
        colour: colour,
        weight: weight,
        hookSize: hookSize,
        notes: notes,
        photo: photo ? photo.base64 : null
      };

      await AsyncStorage.setItem(`ball_${newId}`, JSON.stringify(newBall));
      await AsyncStorage.setItem('ballId', newId.toString());

      navigation.navigate('ViewBallScreen', { id: newId });
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
      <TouchableOpacity style={styles.photoButton} onPress={takePicture}>
          <Text style={styles.photoButtonText}>Take Photo</Text>
      </TouchableOpacity>
      {photo && (
        <Image source={{ uri: `data:image/png;base64,${photo.base64}` }} style={styles.photoPreview} />
      )}
      <View style={styles.ballsContainer}>
        <TextInput
          style={styles.titleInput}
          placeholder="Name:"
          onChangeText={text => setTitle(text)}
          value={title}
        />
        <TextInput
          style={styles.brandInput}
          placeholder="Brand:"
          onChangeText={text => setBrand(text)}
          value={brand}
          multiline={false}
        />
        <TextInput
          style={styles.colourInput}
          placeholder="Colour:"
          onChangeText={text => setColour(text)}
          value={colour}
          multiline={false}
        />
        <TextInput
          style={styles.weightInput}
          placeholder="Weight:"
          onChangeText={text => setWeight(text)}
          value={weight}
          multiline={false}
        />
        <TextInput
          style={styles.materialInput}
          placeholder="Material:"
          onChangeText={text => setMaterial(text)}
          value={material}
          multiline={false}
        />
        <TextInput
          style={styles.hookSizeInput}
          placeholder="Hook Size:"
          onChangeText={text => setHookSize(text)}
          value={hookSize}
          multiline={false}
        />

        <TextInput
          style={styles.notesInput}
          placeholder="Notes"
          onChangeText={text => setNotes(text)}
          value={notes}
          multiline={true}
        />


        <TouchableOpacity style={styles.photoButton} onPress={pickImage}>
          <Text style={styles.photoButtonText}>Add Photo</Text>
        </TouchableOpacity>

      </View>
      <TouchableOpacity style={styles.saveButton} onPress={saveBall}>
        <Text style={styles.saveButtonText}>Save Skien</Text>
      </TouchableOpacity>
    </View>
  );
} 