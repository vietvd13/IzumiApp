import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Navbar from '../Navbar';
import SideView from '../SideView';
import Swiper from 'react-native-swiper/src';
import { data } from '../../const/Sides';

const Home = ({ navigation }) => {
  return (
    <View style={styleHome.container}>
      <Navbar />
      <View style={styleHome.zoneView}>
        <View style={styleHome.zoneUser}>
          <Text style={styleHome.displayUsername}>山田太郎</Text>
          <Text style={styleHome.displayUserInfo}>東京team / ドライバー </Text>
        </View>
      </View>

      <View style={styleHome.zoneSwiper}>
        <Swiper
          style={styleHome.wrapper}
          dot={
            <View
              style={{
                backgroundColor: 'rgba(255,255,255,.3)',
                width: 13,
                height: 13,
                borderRadius: 7,
                marginLeft: 7,
                marginRight: 7,
                borderWidth: 1,
                borderColor: '#E5E5E5'
              }}
            />
          }
          activeDot={
            <View
              style={{
                backgroundColor: '#1534A1',
                width: 13,
                height: 13,
                borderRadius: 7,
                marginLeft: 7,
                marginRight: 7,
                borderWidth: 1,
                borderColor: '#E5E5E5'
              }}
            />
          }
          paginationStyle={{
            bottom: -40
          }}
          loop={false}
        >
          <View style={styleHome.slide}>
            <SideView data={data} navigation={navigation} />
          </View>
          <View style={styleHome.slide}>
            <SideView data={data} navigation={navigation} />
          </View>
          <View style={styleHome.slide}>
            <SideView data={data} navigation={navigation} />
          </View>
        </Swiper>
      </View>
      <View style={{ flex: 1 }}></View>
    </View>
  )
};

const styleHome = StyleSheet.create({
  container: {
    flex: 1
  },
  zoneView: {
    flex: 1,
    padding: 10
  },

  zoneUser: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  displayUsername: {
    fontSize: 38,
    fontWeight: '900',
    color: '#00A968',
  },
  displayUserInfo: {
    color: '#00A968',
    fontWeight: '600'
  },

  zoneSwiper: {
    flex: 6,
  },
  wrapper: {

  },
  slide: {
    flex: 1,
    backgroundColor: 'transparent',
    marginHorizontal: 10,
  },
})

export default Home;