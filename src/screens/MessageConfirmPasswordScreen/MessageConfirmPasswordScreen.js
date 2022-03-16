import { View, Text, StyleSheet } from 'react-native';
import CustomButton from '../../components/CustomButton';
import React from 'react';

const MessageConfirmPasswordScreen = ({ navigation }) => {
  const onConfirm = () => {
    navigation.push('SignInScreen');
  }

  return (
    <View style={styles.container}>
      <View style={styles.zoneLogo}>
        <Text style={styles.textLogo}>Izumi</Text>
      </View>

      <View style={styles.zoneDes}>
        <View>
          <Text style={styles.textDes}>パスワードの設定が{"\n"}完了しました。</Text>
        </View>
      </View>
      <CustomButton text="ログイン画面に戻る" onPress={onConfirm} />

      <View style={{ flex: 1, justifyContent: 'flex-end' }} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
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

  zoneDes: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginBottom: 50
  },
  textDes: {
    color: '#1534A1',
    fontSize: 19,
    fontWeight: 'bold',
    marginVertical: 25,
    textAlign: 'center'
  }
})

export default MessageConfirmPasswordScreen;