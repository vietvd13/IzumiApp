import { Text, StyleSheet, Pressable } from 'react-native';
import React from 'react'

const CustomButton = ({ onPress, text = "Button", type = "default", bgColor, textColor }) => {
  return (
    <Pressable 
        onPress={onPress} 
        style={[
          styles.container, 
          styles[`btn_${type}`],
          bgColor ? { backgroundColor: bgColor } : {},
        ]}
      >
        <Text style={[
          styles.text, 
          styles[`text_${type}`],
          textColor ? { color: textColor } : {},
        ]}>{ text }</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',

    width: '100%',

    padding: 15,
    marginVertical: 5,

    alignItems: 'center',
    borderRadius: 5,
  
    shadowColor: '#171717',
    shadowOffset: {
      width: -2, 
      height: 4
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  text: {
    fontWeight: 'bold',
    color: '#1534A1'
  },
  btn_default: {
    backgroundColor: '#FFF',
  },  
  btn_primary: {
    backgroundColor: '#409EFF',
  },
  btn_success: {
    backgroundColor: '#67C23A',
  },
  btn_warning: {
    backgroundColor: '#E6A23C',
  },
  btn_danger: {
    backgroundColor: '#F56C6C',
  },
  btn_info: {
    backgroundColor: '#909399',
  },
  text_default: {
    color: '#1534A1'
  },
  text_primary: {
    color: '#FFF',
  },
  text_success: {
    color: '#FFF'
  },
  text_warning: {
    color: '#FFF',
  },
  text_danger: {
    color: '#FFF'
  }
})

export default CustomButton;