import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import React, { useState } from 'react';
import Navbar from '../Navbar';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomInput from '../CustomInput';

const data = [
  {
    date: '2022/03/01',
    message: '今日の集会は延期となります。'
  },
  {
    date: '2022/03/02',
    message: 'TL会議は3/3になります。'
  },
  {
    date: '2022/03/03',
    message: '明日の業務は台風でお休みです。'
  },
  {
    date: '2022/03/03',
    message: '明日の業務は台風でお休みです。'
  },
  {
    date: '2022/03/03',
    message: '明日の業務は台風でお休みです。'
  },
  {
    date: '2022/03/03',
    message: '明日の業務は台風でお休みです。'
  },
  {
    date: '2022/03/03',
    message: '明日の業務は台風でお休みです。'
  },
  {
    date: '2022/03/03',
    message: '明日の業務は台風でお休みです。'
  },
  {
    date: '2022/03/03',
    message: '明日の業務は台風でお休みです。'
  },
  {
    date: '2022/03/03',
    message: '明日の業務は台風でお休みです。'
  },
  {
    date: '2022/03/03',
    message: '明日の業務は台風でお休みです。'
  },
  {
    date: '2022/03/03',
    message: '明日の業務は台風でお休みです。'
  },
  {
    date: '2022/03/03',
    message: '明日の業務は台風でお休みです。'
  },
  {
    date: '2022/03/03',
    message: '明日の業務は台風でお休みです。'
  },
];

const borderRadius = {
  borderTopRightRadius: 20,
  borderBottomRightRadius: 20,
  borderBottomLeftRadius: 20,
  borderTopLeftRadius: 20
}

const Message = ({ data }) => {
  return (
    <View style={styleMessage.conatiner}>
      <Text style={styleMessage.date}>{ data.date }</Text>
      <View style={styleMessage.message}>
        <Text>{ data.message }</Text>
      </View>
    </View>
  )
}

const styleMessage = StyleSheet.create({
  conatiner: {
    marginBottom: 15,
  },
  date: {
    textAlign: 'right',
    fontSize: 11,
    marginBottom: 5
  },
  message: {
    flex: 1,
    borderTopRightRadius: 13,
    borderBottomRightRadius: 13,
    borderBottomLeftRadius: 13,
    backgroundColor: '#BDE6D8',

    padding: 15,
  }
})

const Note = () => {
  const [tab, setTab] = useState('TEAM');

  return (
    <View style={styles.container}>
      <Navbar />
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <View style={styles.headerIcon}>
            <Icon style={styles.iconBack} name="angle-double-left" size={20} color="#1534A1" />
          </View>
          <View style={styles.headerText}>
            <Text style={styles.titleScreen}>お知らせ</Text>
          </View>
        </View>

        <View style={styles.zoneTab}>
          <Pressable style={[styles.tabStyle, tab === 'TEAM' ? styles.tabActive : {}]} onPress={() => setTab('TEAM')}>
            <Text style={[styles.tabText, tab === 'TEAM' ? styles.tabTextActive : {} ]}>Team</Text>
            <View style={styles.messageText}>
              <Text style={styles.textNotify}>1</Text>
            </View>
          </Pressable>
          <Pressable style={[styles.tabStyle, tab === 'IZUMI' ? styles.tabActive : {}]} onPress={() => setTab('IZUMI')}>
            <Text style={[styles.tabText, tab === 'IZUMI' ? styles.tabTextActive : {}]}>Izumi</Text>
            <View style={styles.messageText}>
              <Text style={styles.textNotify}>3</Text>
            </View>
          </Pressable>
        </View>

        <ScrollView style={styles.zoneChat}>
          {
            data.map((item, index) => {
              return (
                <Message data={item} key={`message-no-${index}`} />
              )
            })
          }
        </ScrollView>
      </View>

      <View style={styles.zoneTyping}>
          <CustomInput borderRadius={borderRadius} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
  },

  header: {
    height: 39,
    flexDirection: 'row',
    lineHeight: 39,
  },
  headerIcon: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconBack: {
    fontWeight: 'bold',
    lineHeight: 39,
  },
  headerText: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleScreen: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0FAE71',
  },
  zoneTab: {
    flexDirection: 'row',
    marginTop: 15,
  },
  tabStyle: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: '#E5E5E5'
  },
  tabActive: {
    backgroundColor: '#1534A1'
  },
  tabText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#00000050'
  },
  tabTextActive: {
    color: '#FFF'
  },
  messageText: {
    position: 'absolute',
    top: -15,
    right: 10,

    minWidth: 30,
    minHeight: 30,
    borderRadius: 30,
    lineHeight: 30,

    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',

    color: '#FFF',
    backgroundColor: 'red',
  },
  textNotify: {
    color: '#FFF',
    fontWeight: 'bold'
  },
  zoneChat: {
    flex: 1,
    padding: 10,
  },
  zoneTyping: {
    height: 70,
    marginBottom: 20,
    marginLeft: 10,
    marginRight: 10
  }
})

export default Note;