import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const PtnBee = () => {
  const pattern = {
    title: 'Bee',
    image: require('../assets/Pattern/bee.jpg'),
    materials: [
      'Yarn: 1/4 oz each of Yellow, Black and Ivory color yarn',
      'Needles: US G6/4mm crochet hook',
      '6mm safety eyes',
      'Stitch marker',
      'Tapestry needle',
    ],
    steps: [
      'R1:  6 sc into ring (6 sts)',
      'R2:  2 sc in ea st around (12 st)',
      'R3:  *sc in next st, 2 sc in next st, repeat from * around (18 st)',
      'R4-5:  sc around (18 st)  Change to black in very last stitch.',
      'R6-7:  With black, sc around.   Change to yellow in last stitch',
      'R8-11:  With yellow, sc around (18 st) Change to black in last stitch',
      'R12:  With black, sc around. (18 st)',
      'Take time out to insert safety eyes.  The safety eyes go between rounds 2 & 3 and there are about 7 stitches in between. Stuff bee body with toy stuffing and continue stuffing as you finish up the body.',
      'R13: *sc in next st, sc next 2 st together.  Repeat from * around (12)',
      'R14:  sc next 2 st together (6)',
      'R15:  sc next 2 st together (3). Fasten off, leaving a long strand for sewing. Make sure bee is firmly stuffed, then thread the yarn end onto the tapestry needle. Weave opening closed. Fasten off and weave in end.',
      'With ivory color yarn, make a magic ring.',
      'R1:  Inside the ring, work the following:  sc, hdc, dc, 3 tr, dc, hdc, sc.  Cut yarn, leaving some length for sewing, using an invisible join, attach the end and start of the wing together. Weave in end to make join secure, then sew the wing onto the top of the body. Repeat for the 2nd wing.',
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

export default PtnBee;
