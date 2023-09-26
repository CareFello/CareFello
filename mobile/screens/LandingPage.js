import { SafeAreaView, View, Image, Text, StyleSheet } from 'react-native';
import React from 'react';
import CustomButton from '../components/CustomButton';

const LandingPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.half, styles.upperBackground]}>
        <View style={styles.Container}>
          <Text style={styles.text}>First and foremost it’s about giving back to people that helped our fight.</Text>
        </View>

        <View style={styles.Container}>
          <Image
            source={require("../assets/welcome-img.png")}
            style={styles.image1}
          />
        </View>
      </View>

      <View style={[styles.half, styles.lowerBackground]}>
        <View style={styles.Container}>
          <Image
            source={require("../assets/logo.png")}
            style={styles.image2}
          />
        </View>
        <View style={styles.Container}>
          <CustomButton
            title="Get Started"
            onPress={() => navigation.navigate("Login")}
            style={styles.button}
          />
        </View>

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  half: {
    flex: 1,
  },
  upperBackground: {
    backgroundColor: '#189AB4',
  },
  lowerBackground: {
    backgroundColor: '#D4F1F4',
  },
  Container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    lineHeight: 24,
    height: 125,
    width: 300,
    position: "absolute",
    top: 110,
  },
  image1: {
    height: 125,
    width: 250,
    position: "absolute",
    top: 62,
  },
  image2: {
    height: 110,
    width: 225,
    position: "absolute",
    top: 50,
  },
  button: {
    width: "75%",  // Set the width to 75%
    marginBottom: 60,
  }
});

export default LandingPage;
