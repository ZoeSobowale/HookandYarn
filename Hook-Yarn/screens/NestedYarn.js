import React, { useEffect, useState } from 'react';
import { SafeAreaView, View , Text, Image, TouchableOpacity, StyleSheet, TextInput, ScrollView } from 'react-native';
import { COLORS, SIZES} from "../assets/themes";
import { Button } from 'react-native';



import AsyncStorage from '@react-native-async-storage/async-storage';


// const keys = await AsyncStorage.getAllKeys()



const ProjectScreen = ({navigation}) => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const [data, setData] = useState(null);

  

  
  clearAsyncStorage = async() => {
    AsyncStorage.clear();
  }


  useEffect(() => {
    AsyncStorage.getAllKeys()
    .then((keys)=> AsyncStorage.multiGet(keys)
                    .then((data) => console.log(data)));
  })

  const filteredProjects = data?.filter(
    (project) => project.name.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1
  );

  if (!data) {
    return (
      <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search Yarn"
          onChangeText={(text) => setSearchQuery(text)}
          value={searchQuery}
        />
      </View>

      <View contentContainerStyle={styles.projectsContainer} alignItems={'center'}>  
          <TouchableOpacity
            key={'NewYarn'}
            onPress={() => navigation.navigate('NewYarn')}
            style={styles.project}
          >
            <Image source={require('../assets/AddBtn.png')} style={styles.image}  />
            <Text style={styles.buttonText}>{'New Yarn'}</Text>
          </TouchableOpacity>
      </View>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search projects"
          onChangeText={(text) => setSearchQuery(text)}
          value={searchQuery}
        />
      </View>

      <ScrollView contentContainerStyle={styles.projectsContainer}>
      {filteredProjects.map((item) => (
        <Button
          key={item.id}
          title={item.name}
          onPress={() => navigation.navigate('ViewBallScreen', {id: item.id})}
        />
      ))}

      </ScrollView>


    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: COLORS.lightWhite,
  },
  projectsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  project: {
    alignItems: 'center',
    width: '45%',
    marginBottom: 30,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 30,
    marginBottom: 6,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  searchContainer: {
    height: 50,
    paddingTop:8,
    paddingHorizontal: 16,
    paddingBottom: 8,
    backgroundColor: COLORS.white,
    borderBottomColor: COLORS.gray2,
    borderBottomWidth: 1,
    justifyContent: 'center',
  },
  searchInput: {
    flex: 1,
    backgroundColor: COLORS.gray2,
    borderRadius: 8,
    paddingHorizontal: 16,
  },
  screen:{
    flex:1,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#00000025',
  },
  text:{
      color:'#000',
      fontWeight:'700',
      fontSize:30
  },
  button:{
      backgroundColor:'#0275d8',
      paddingVertical: 5,
      paddingHorizontal: 10
      
  },
  buttonText:{
      textAlign: 'center',
      color:COLORS.black
  }
});

export default ProjectScreen;

