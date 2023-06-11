import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cameraPreview: {
    flex: 1,
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  cameraFlipButton: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    margin: 20,
  },
  cameraFlipText: {
    fontSize: 18,
    color: '#000',
  },
  photoPreview: {
    width: 150,
    height: 150,
    marginVertical: 10,
    },
  inputContainer: {
    width: '100%',
    padding: 20,
    },
  titleInput: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    },
  notesInput: {
    fontSize: 16,
    height: 100,
    textAlignVertical: 'top',
    borderColor: '#ccc',
    borderWidth: 1,
    },
  photoButton: {
    backgroundColor: '#0f7ae5',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    },
  photoButtonText: {
    color: '#fff',
    fontSize: 16,
    },
  saveButton: {
    backgroundColor: '#4caf50',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    },
  saveButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
    },
  notes: {
    fontSize: 18,
    marginVertical: 10,
    },
  photo: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    marginVertical: 10,
    },
});
    
    export default styles;