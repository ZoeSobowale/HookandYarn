import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const SpecPat = () => {
  const pattern = {
    title: 'Chain',
    image: require('../assets/Pattern/chain.jpg'),
    materials: [
      'Yarn: Any Yarn',
      'Needles: Any Hook that matches the yarn',
    ],
    steps: [
      'Step 1: Start with a slip knot on your crochet hook.',
      'Step 2: Yarn over the hook',
      'Step 3: Draw a loop of yarn back through the loop on the hook. You have completed your first ch stitch.',
      'Step 4: Yarn over and draw a loop through the loop on the hook for each new chain stitch.',
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
