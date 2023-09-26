import { View, Text, Image, Pressable, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from '../constants/colors';
import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox"
import CustomButton from '../components/CustomButton';

const Login = ({ navigation }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'rgba(212, 241, 244, 0.50)' }}>

      <View style={{ marginVertical: 22 }}>
        <Text style={{
          fontSize: 22,
          fontWeight: 'bold',
          marginVertical: 30,
          color: '#05445E',
          textAlign: 'center',
        }}>
          Welcome Back ! 
        </Text>

        <Text style={{
          fontSize: 16,
          color: '#05445E',
          textAlign: 'center',
        }}>Hello again you have been missed!</Text>
      </View>

      <View style={styles.Container}>
        <Image
          source={require("../assets/logo2.png")}
          style={styles.image2}
        />
      </View>

      <View style={{ flex: 1, marginHorizontal: 22 }}>


        <View style={{ marginBottom: 12 }}>
          <Text style={{
            fontSize: 16,
            fontWeight: 400,
            marginVertical: 8,
            color : COLORS.grey,
          }}>Email address</Text>

          <View style={{
            width: "100%",
            height: 48,
            borderColor: COLORS.lightGrey,
            borderWidth: 1,
            borderRadius: 8,
            alignItems: "center",
            justifyContent: "center",
            paddingLeft: 22
          }}>
            <TextInput
              placeholder='Enter your email address'
              placeholderTextColor={COLORS.grey}
              keyboardType='email-address'
              style={{
                width: "100%"
              }}
            />
          </View>
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text style={{
            fontSize: 16,
            fontWeight: 400,
            marginVertical: 8,
            color : COLORS.grey
          }}>Password</Text>

          <View style={{
            width: "100%",
            height: 48,
            borderColor: COLORS.lightGrey,
            borderWidth: 1,
            borderRadius: 8,
            alignItems: "center",
            justifyContent: "center",
            paddingLeft: 22
          }}>
            <TextInput
              placeholder='Enter your password'
              placeholderTextColor={COLORS.grey}
              secureTextEntry={isPasswordShown}
              style={{
                width: "100%"
              }}
            />

            <TouchableOpacity
              onPress={() => setIsPasswordShown(!isPasswordShown)}
              style={{
                position: "absolute",
                right: 12
              }}
            >
              {
                isPasswordShown == true ? (
                  <Ionicons name="eye-off" size={24} color={COLORS.grey} />
                ) : (
                  <Ionicons name="eye" size={24} color={COLORS.grey} />
                )
              }

            </TouchableOpacity>
          </View>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 6 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Checkbox
              style={{ marginRight: 8 }}
              value={isChecked}
              onValueChange={setIsChecked}
              color={isChecked ? COLORS.primary : undefined}
            />

            <Text style={{color : COLORS.grey,}}>Remember Me</Text>
          </View>

          <Pressable
            onPress={() => navigation.navigate("ForgotPassword")}
          >
            <Text style={{
              textDecorationLine: 'underline',
              textAlign: 'right',
              color : COLORS.grey,
            }}>Forgot Password?</Text>
          </Pressable>
        </View>

        <CustomButton
          title="Login"
          filled
          style={{
            marginTop: 18,
            marginBottom: 4,
          }}
        />

      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  Container: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image2: {
    height: 150,
    width: 250,
    position: "absolute",
    top: 15,
  },

});

export default Login