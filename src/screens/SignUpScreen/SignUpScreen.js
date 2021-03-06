import { View, StyleSheet, ImageBackground, Text, Pressable, TouchableWithoutFeedback, Keyboard } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import Icon from 'react-native-vector-icons/FontAwesome';
import React, { useState } from 'react';

import { stylesCSS, borderUserId, borderPassword } from './style';

const SignUpScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);

  const onSignUp = () => {
    console.log('onSignUp');

    navigation.push('MessageSignUpScreen');
  }

  const togglePassword = () => {
    setShowPassword(!showPassword);
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <ImageBackground
          source={
            require('../../../assets/images/izumi-background.jpg')
          }
          resizeMode='cover'
          style={styles.backgroundImage}
        >
          <View style={styles.zoneLogo}>
            <Text style={styles.textLogo}>Izumi</Text>
          </View>

          <View style={styles.zoneInput}>
            <View style={styles.inputUserId}>
              <View style={styles.iconUser}>
                <Icon style={{lineHeight: 39}} name="user" size={16} color="#1534A1" />
              </View>
              <CustomInput 
                placeholder="ユーザID" 
                value={username} 
                setValue={setUsername}
                height={41}
                borderColor={borderUserId.borderColor} 
                borderWidth={borderUserId.borderWidth} 
                borderRadius={borderUserId.borderRadius}
                autoFocus={true}  
              />
            </View>

            <View style={styles.inputPassword}>
              <View style={styles.iconKey}>
                <Icon style={{lineHeight: 39}} name="lock" size={16} color="#1534A1" />
              </View>
              <CustomInput 
                placeholder="パスワード" 
                value={password} 
                setValue={setPassword} 
                secureTextEntry={showPassword}
                height={41}
                borderColor={borderPassword.borderColor} 
                borderWidth={borderPassword.borderWidth} 
                borderRadius={borderPassword.borderRadius} 
              />
              <Pressable style={styles.iconEye} onPress={togglePassword}>
                {
                  showPassword ?
                  <Icon style={{lineHeight: 39}} name="eye" size={16} color="#1534A1" /> :
                  <Icon style={{lineHeight: 39}} name="eye-slash" size={16} color="#1534A1" />
                }
              </Pressable>
            </View>

            <CustomButton text="登録" onPress={onSignUp} />
          </View>

          <View style={styles.zoneHelper}></View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  )
};

const styles = StyleSheet.create(stylesCSS);

export default SignUpScreen;