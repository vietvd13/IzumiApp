import { View, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const CustomInput = ({ 
  value, 
  onChangeText, 
  placeholder, 
  secureTextEntry,
  height, 
  borderColor, 
  borderWidth, 
  borderRadius,
  autoFocus = false,
}) => {
  return (
    <View style={[
      styles.container,
      height ? { height: height } : height,
      borderColor ? { 
        borderTopColor: borderColor['borderTopColor'],
        borderRightColor: borderColor['borderRightColor'],
        borderBottomColor: borderColor['borderBottomColor'],
        borderLeftColor: borderColor['borderLeftColor']
      } : { borderColor: '#e8e8e8' },

      borderWidth ? { 
        borderTopWidth: borderWidth['borderTopWidth'],
        borderRightWidth: borderWidth['borderRightWidth'],
        borderBottomWidth: borderWidth['borderBottomWidth'],
        borderLeftWidth: borderWidth['borderLeftWidth']
      } : { borderWidth: 1 },

      borderRadius ? { 
        borderTopRightRadius: borderRadius['borderTopRightRadius'],
        borderBottomRightRadius: borderRadius['borderBottomRightRadius'],
        borderBottomLeftRadius: borderRadius['borderBottomLeftRadius'],
        borderTopLeftRadius: borderRadius['borderTopLeftRadius']
      } : { borderRadius: 5 },
    ]}>
      <TextInput 
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={secureTextEntry}
        autoFocus={autoFocus}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',

    paddingVertical: 10,
    marginVertical: 10,
  },
  input: {
    paddingHorizontal: 10
  }
});

export default CustomInput;