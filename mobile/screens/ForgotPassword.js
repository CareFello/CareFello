import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const ForgotPassword = () => {
  return (
    <View>
      <Text style={styles.container}>ForgotPassword</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    color:'#000',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ForgotPassword