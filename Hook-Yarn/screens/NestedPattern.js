import React, { useState } from 'react';
import { SafeAreaView, View , Text, Image, TouchableOpacity, StyleSheet, TextInput, ScrollView } from 'react-native';
import { COLORS, SIZES} from "../assets/themes";

const patterns = [
  { name: 'Beanie', image: require('../assets/Pattern/beanie.jpg') },
  { name: 'Plush Bee', image: require('../assets/Pattern/bee.jpg') },
  { name: 'Chain', image: require('../assets/Pattern/chain.jpg') },
  { name: 'Double Crochet', image: require('../assets/Pattern/dblecrochet.jpg') },
  { name: 'Granny Square', image: require('../assets/Pattern/grannysquare.jpg') },
  { name: 'Love Heart', image: require('../assets/Pattern/heart.jpg') },
];

const PatternScreen = ({navigation}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPatterns = patterns.filter(
    (pattern) => pattern.name.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search patterns"
          onChangeText={(text) => setSearchQuery(text)}
          value={searchQuery}
        />
      </View>
      <ScrollView contentContainerStyle={styles.patternsContainer}>
        {filteredPatterns.map((pattern) => (
          <TouchableOpacity
            key={pattern.name}
            onPress={() => navigation.navigate(pattern.name)}
            style={styles.pattern}
          >
            <Image source={pattern.image} style={styles.image} />
            <Text style={styles.buttonText}>{pattern.name}</Text>
          </TouchableOpacity>
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
  patternsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  pattern: {
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
    paddingTop: 8,
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

export default PatternScreen;

