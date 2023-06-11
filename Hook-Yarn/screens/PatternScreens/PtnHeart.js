import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const SpecPat = () => {
  const pattern = {
    image: require('../../assets/Pattern/heart.jpg'),
    materials: [
      'Yarn: Worsted weight yarn',
      'Needles:  H (5.0mm) hook',
      'Stitch marker',
      'Tapestry needle',
    ],
    steps: [
      'Start with a magic ring',
      'Round 1: Ch 2. Into the magic ring, make 3 tr, 4 dc, tr, 4 dc, 3 tr. Ch 2, and sl st into magic ring.',
      'Round 2: Continue in joined rounds, working into the stitches of the previous round',
      ' Sc in ch-2 sp, (2 hdc and 1dc) in next st, 3 dc in next st, 2 dc in next st, dc in next 4 sts, (dc, tr, dc) in next st, dc in next 4 sts, 2 dc in next st, 3 dc in next st, (1 dc and 2 hdc) in next st, sc in ch-2 sp, sl st in sl st from the previous rnd.',
      'Round 3: Continue working in the round. Sc in first 2 sts. (2 sc in the next st, 1 sc in the next st) three times, sc in next 6 sts, (sc, hdc, sc) in next st, sc in next 6 sts, (1 sc in the next st, 2 sc in the next st) three times, sc in next 2 sts',
      'Cut yarn and join with an invisible join. Tighten up the magic ring one more time, and weave in the ends.',
    ],
  };

  return (
    <View style={styles.container}>
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
