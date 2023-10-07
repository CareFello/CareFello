import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Dashboard = () => {
  return (
    <View style={styles.container}>
      {/* Upper 30% of the screen (Grey) */}
      <View style={styles.upperBackground}></View>

      {/* Bottom 70% of the screen (Blue) */}
      <View style={styles.lowerBackground}></View>

      {/* Content */}
      <View style={styles.content}>
        {/* Elder's Information */}
        <View style={styles.elderInfo}>
          <Text style={styles.name}>Elder's Name</Text>
          <Text style={styles.age}>Age: 70</Text>
          <Image
            source={require('../assets/e1.png')} // Replace with your elder's photo
            style={styles.photo}
          />
        </View>

        {/* Buttons */}
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Medication</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Daily Routines</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Reports</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  upperBackground: {
    flex: 3, // 30% of the screen
    backgroundColor: '#‍FFFFFF', 
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: '60%', // Adjust as needed
  },
  lowerBackground: {
    flex: 7, // 70% of the screen
    backgroundColor: '#189AB4',
    position: 'absolute',
    top: '40%', // Adjust as needed
    left: 0,
    right: 0,
    bottom: 0,
    borderTopLeftRadius: 50, // Add rounded corners to the upper two corners
    borderTopRightRadius: 50, // Add rounded corners to the upper two corners
  },
  content: {
    flex: 1,
    position: 'relative',
    zIndex: 1, // Content is on top of backgrounds
    marginTop: 60,

  },
  text:{
    color:'grey',

  },
  elderInfo: {
    alignItems: 'center',
    marginTop: 20, // Adjust as needed
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color:'#05445E',
  },
  age: {
    fontSize: 18,
    marginBottom: 10,
    color:'#05445E',
  },
  photo: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginTop: 50,
  },
  buttons: {
    marginTop: 50,
  },
  button: {
    backgroundColor: '#D4F1F4',
    paddingVertical: 25,
    paddingHorizontal: 30,
    borderRadius: 40,
    marginBottom: 30,
    alignItems: 'center',
    alignSelf: 'center',
    width: 300,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color:'#05445E',
  },
});

export default Dashboard;
