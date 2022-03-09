import { View, StyleSheet, ImageBackground, Text, Pressable } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import Icon from 'react-native-vector-icons/FontAwesome';
import React, { useState } from 'react';

const borderUserId = {
  borderColor: {
    borderTopColor: '#e8e8e8',
    borderRightColor: '#e8e8e8',
    borderBottomColor: '#e8e8e8',
    borderLeftColor: '',
  },
  borderWidth: {
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 0,
  },
  borderRadius: {
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 0,
  }
}

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


const SignInScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);

  const onSignIn = () => {
    console.log('onSignIn');
  }

  const onRegister = () => {
    console.log('onRegister');
  }

  const onForgetPassword = () => {
    console.log('onForgetPassword');
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
  },

  zoneLogo: {
    flex: 1,
    alignItems: 'center',
    marginTop: 90,
  },
  textLogo: {
    fontSize: 64,
    fontWeight: 'bold',
    color: '#1534A1',
  },

  zoneInput: {
    flex: 1,
  },
  inputUserId: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  iconUser: {
    height: 41,
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

  zoneHelper: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 20
  }
})

export default SignInScreen;