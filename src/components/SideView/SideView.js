import { View, Text, StyleSheet, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';

const SideView = ({ navigation, data }) => {
  return (
    <View style={SideViewStyle.container}>
      {
        data.map((row, indexRow) => {
          return (
            <View style={SideViewStyle.row} key={`row-${indexRow}`}>
              {
                row.map((item, indexItem) => {
                  return (
                    <View style={SideViewStyle.item} key={`item-${indexRow}-${indexItem}`}>
                      <Pressable style={SideViewStyle.icon} onPress={() => navigation.jumpTo(item.link)}>
                        <Icon style={{lineHeight: 30}} name={item.icon} size={31} color="#1534A1" />
                        {
                          item.message !== null ?
                          <View style={SideViewStyle.badge}>
                            <Text style={{ color: '#FFF', fontWeight: 'bold' }}>{ item.message }</Text>
                          </View> : <View></View>
                        }
                      </Pressable>
                      <View>
                        <Text style={SideViewStyle.text}>{ item.text }</Text>
                      </View>
                    </View>
                  )
                })
              }
            </View>
          )
        })
      }
    </View>
  )
};

const SideViewStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flex: 1,
    flexDirection: 'row'
  },
  item: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  icon: {
    alignItems: 'center',
    justifyContent: 'center',

    width: 70,
    height: 70,
    borderRadius: 70,
    backgroundColor: '#FFF',
    marginBottom: 15,

    shadowColor: '#171717',
    shadowOffset: {
      width: -2, 
      height: 4
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  badge: {
    position: 'absolute',
    top: 0,
    right: -5,
    backgroundColor: 'red',
    minWidth: 25,
    minHeight: 25,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontWeight: 'bold'
  }
})

export default SideView;