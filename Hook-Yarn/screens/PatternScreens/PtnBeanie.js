import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const PtnBeanie = () => {
  const pattern = {
    image: require('../../assets/Pattern/beanie.jpg'),
    materials: [
      'Yarn: 4.25 oz #5 Bulky weight yarn',
      'Needles: US L 11/8 mm crochet hook',
      'Scissors',
      'Tapestry needle',
    ],
    steps: [
      'R1: Hdc in 3rd chain from hook and in each chain across row (35 st)',
      'R2-30:  ch 2 (does not count as a stitch), hdc in the back loop across row (35 st).',
      'At the end of row 30, the hat is a rectangle of ribbed crochet that measures approximately 13″ wide by 20″ tall',
      'Chain 1 and turn work. Take the bottom of work and fold up so that the starting edge is on top of the row to be worked.',
      'The seam is worked by slip stitching the two ends together as follows:  Insert crochet hook into starting chain and then into the back loop of the next stitch to be worked.  Slip stitch together.',
      'Continue to slip stitch both ends together across row, making sure to work the slip stitches loosely and not too tight so that the hat remains stretchy.  Note that this is the WRONG side of the work.',
      'At the end of the row, cut yarn (leaving a long strand for cinching the top) and fasten off.',
      'Now the work is in a tube with the wrong side facing out.  Rotate work and thread the fastened off yarn end on to a yarn needle.  Work a running stitch with the yarn around the open end to gather the top.',
      'Pull yarn tight and tie a knot to secure.  The end from the start of the project should be there too and you can tie those 2 ends together too into a knot.',
      'There will still be a small hole at the top, so continue to use the threaded yarn needle to make stitches to close up the hole.  When done, knot the yarn again and then weave in all the ends.',
      'Turn the hat right side out and fold up the brim.  Or skip the fold up brim for a slouchy hat look instead! Put the cozy bit of goodness on your head and marvel at your amazingness!',
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
    fontSize: 15,
  },
});

export default PtnBeanie;

