import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const SpecPat = () => {
  const pattern = {
    title: 'Granny Square',
    image: require('../assets/Pattern/grannysquare.jpg'),
    materials: [
      'Yarn: Any Yarn',
      'Needles: Any Hook that matches the yarn',
    ],
    steps: [
      'To start, chain 5 and join with a slip stitch.',
      'R1:  Chain 3 (counts as 1st dc).  In the loop work 2dc, ch-2, 3dc, ch-2, 3dc, ch-2, 3dc, ch-2, sl st to top of starting ch 3.',
      'R2:  Sl st to next space. Ch 3, 2 dc, ch-2, 3 dc (1st corner made), *ch-1, [3dc, ch-2, 3dc] in next corner*, repeat * to * 2 more times.  Ch 1. Join with a sl st to the top of the 1st ch.',
      'R3:  Sl st to next space, [ch3, 2dc, ch2, 3 dc] in space for corner, *ch1, 3 dc in next space, ch1, in next corner space work 3dc, ch2, 3dc*, repeat * to * twice, ch1, 3dc, ch1, join to top of starting ch3.',
      'To work additional rounds, sl st to next space.  In corners work [3dc, ch 2, 3dc].  In spaces on sides work 3dc.  Work a ch1 in between the dc clusters on the sides.',
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
