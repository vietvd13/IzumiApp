import { View, StyleSheet, ImageBackground, Text, Pressable } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import Icon from 'react-native-vector-icons/FontAwesome';
import React, { useState } from 'react';

import { stylesCSS, borderUserId, borderPassword } from './style'; 

const SignInScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);

  const onSignIn = () => {
    navigation.push('Dashboard')
  }

  const onRegister = () => {
    navigation.push('SignUpScreen');
  }

  const onForgetPassword = () => {
    navigation.push('ForgotPasswordScreen');
  }

  const togglePassword = () => {
    setShowPassword(!showPassword);
  }

  return (
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

          <CustomButton text="ログイン" onPress={onSignIn} />
        </View>

        <View style={styles.zoneHelper}>
          <CustomButton text="初めて使用する場合" onPress={onRegister} />
          <CustomButton text="パスワードを忘れてしまった場合" onPress={onForgetPassword} />
        </View>

      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create(stylesCSS);

export default SignInScreen;