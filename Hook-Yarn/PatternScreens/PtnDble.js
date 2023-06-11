import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const SpecPat = () => {
  const pattern = {
    title: 'Double Crochet',
    image: require('../assets/Pattern/dblecrochet.jpg'),
    materials: [
      'Yarn: Any Yarn',
      'Needles: Any Hook that matches the yarn',
    ],
    steps: [
      'Step 1: Yarn over from back to front, and insert the hook into the fourth chain from the hook. (Don’t count the loop that’s on the hook.)',
      'Step 2: Yarn over the hook from back to front, and draw the yarn through the center of the chain stitch. You should have three loops on the hook.',
      'Step 3: Yarn over, and draw the yarn through the first two loops on the hook. You should now have two loops on the hook',
      'Step 4: Yarn over again, and draw the yarn through the remaining two loops on the hook.',
    ],
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{pattern.title}</Text>
      <Image source={pattern.image} style={styles.image} />
      <ScrollView style={styles.scrollView}>
        <View style={styles.materialsContainer}>
          <Text style={styles.sectionTitle}>Materials:</Text>
          {pattern.materials.map((material, index) => (
            <Text key={index} style={styles.material}>{material}</Text>
          ))}
        </View>
        <View style={styles.stepsContainer}>
          <Text style={styles.sectionTitle}>Steps:</Text>
          {pattern.steps.map((step, index) => (
            <View key={index} style={styles.step}>
              <Text style={styles.stepNumber}>{index + 1}</Text>
              <Text style={styles.stepText}>{step}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 32,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  image: {
    width: '80%',
    height: 250,
    marginBottom: 16,
  },
  scrollView: {
    width: '90%',
  },
  materialsContainer: {
    width: '80%',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  material: {
    fontSize: 16,
    marginBottom: 4,
  },
  stepsContainer: {
    width: '80%',
  },
  step: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  stepNumber: {
    fontWeight: 'bold',
    marginRight: 8,
  },
  stepText: {
    fontSize: 16,
  },
});

export default SpecPat;
