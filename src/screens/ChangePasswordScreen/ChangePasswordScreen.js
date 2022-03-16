import { View, Text, StyleSheet, Pressable } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import Icon from 'react-native-vector-icons/FontAwesome';
import React, { useState } from 'react';

const borderPassword = {
  borderColor: {
    borderTopColor: '#e8e8e8',
    borderRightColor: '',
    borderBottomColor: '#e8e8e8',
    borderLeftColor: '',
  },
  borderWidth: {
    borderTopWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 1,
    borderLeftWidth: 0,
  },
  borderRadius: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 0,
  }
}

const ChangePasswordScreen = ({ navigation }) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  }

  const toggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  }

  const onChangePassword = () => {
    navigation.push('MessageConfirmPasswordScreen');
  }

  return (
    <View style={styles.container}>
      <View style={styles.zoneLogo}>
        <Text style={styles.textLogo}>Izumi</Text>
      </View>

      <View style={styles.zoneInput}>
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

        <View style={styles.inputPassword}>
          <View style={styles.iconKey}>
            <Icon style={{lineHeight: 39}} name="lock" size={16} color="#1534A1" />
          </View>
          <CustomInput 
            placeholder="パスワード再入力(確認用)" 
            value={confirmPassword} 
            setValue={setConfirmPassword} 
            secureTextEntry={showConfirmPassword}
            height={41}
            borderColor={borderPassword.borderColor} 
            borderWidth={borderPassword.borderWidth} 
            borderRadius={borderPassword.borderRadius} 
          />
          <Pressable style={styles.iconEye} onPress={toggleConfirmPassword}>
            {
              showPassword ?
              <Icon style={{lineHeight: 39}} name="eye" size={16} color="#1534A1" /> :
              <Icon style={{lineHeight: 39}} name="eye-slash" size={16} color="#1534A1" />
            }
          </Pressable>
        </View>

        <CustomButton text="パスワードを設定" onPress={onChangePassword} />
      </View>

      <View style={{ flex: 1, justifyContent: 'flex-end' }} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },

  zoneLogo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textLogo: {
    fontSize: 64,
    fontWeight: 'bold',
    color: '#1534A1',
  },

  zoneInput: {
    flex: 1,
  },
  inputPassword: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 40,
  },
  iconKey: {
    lineHeight: 41,
    paddingHorizontal: 10,
    backgroundColor: '#FFF',

    borderTopColor: '#e8e8e8',
    borderLeftColor: '#e8e8e8',
    borderBottomColor: '#e8e8e8',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
  },
  iconEye: {
    lineHeight: 41,
    paddingHorizontal: 10,
    backgroundColor: '#FFF',

    borderTopColor: '#e8e8e8',
    borderRightColor: '#e8e8e8',
    borderBottomColor: '#e8e8e8',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
  },
})

export default ChangePasswordScreen