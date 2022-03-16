import { View, StyleSheet, ImageBackground, Text } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import Icon from 'react-native-vector-icons/FontAwesome';
import React, { useState } from 'react';

import { stylesCSS, borderUserId } from './style';

const ForgotPasswordScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');

  const onForgotPassword = () => {
    navigation.push('ChangePasswordScreen')
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

          <CustomButton text="パスワード再発行" onPress={onForgotPassword} />
        </View>

        <View style={styles.zoneHelper}></View>
      </ImageBackground>
    </View>
  )
};

const styles = StyleSheet.create(stylesCSS);

export default ForgotPasswordScreen;