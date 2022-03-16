import { View, StyleSheet, Text } from 'react-native';
import CustomButton from '../../components/CustomButton';
import React from 'react';

import { stylesCSS } from './style';

const MessageSignUpScreen = ({ navigation }) => {
  const onConfirm = () => {
    navigation.push('ChangePasswordScreen');
  }

  return (
    <View style={styles.container}>
      <View style={styles.zoneLogo}>
        <Text style={styles.textLogo}>Izumi</Text>
      </View>

      <View style={styles.zoneDes}>
        <Text style={styles.textDes}>初期設定が完了しました。</Text>
        <Text style={styles.textDes}>登録されたメールアドレスに{"\n"}登録完了メールを送信しています</Text>
        <Text style={styles.textDes}>メールに添付したリンクから{"\n"}パスワード設定をお願い致します。</Text>
      </View>

      <CustomButton text="ログイン画面に戻る" onPress={onConfirm} />

      <View style={{ flex: 1, justifyContent: 'flex-end' }}></View>
    </View>
  )
};

const styles = StyleSheet.create(stylesCSS);

export default MessageSignUpScreen;