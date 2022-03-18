import { View, Text, StyleSheet, Pressable, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import React, { useState, useRef } from 'react';
import Navbar from '../Navbar';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomInput from '../CustomInput';

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
});

const Notification = ({ data, index }) => {
  const bgWhite = {
    backgroundColor: '#FFF'
  };

  const bgBlue = {
    backgroundColor: '#F1F5FA'
  }

  return (
    <View style={[styleNotification.container, index % 2 !== 0 ? bgWhite : bgBlue]}>
      <View style={styleNotification.notification}>
        <Text>{ data.message }</Text>
      </View>
      <View style={styleNotification.date}>
        <Text>{ data.date }</Text>
      </View>
    </View>
  )
}

const styleNotification = StyleSheet.create({
  container: {
    padding: 15
  },
  notification: {
    marginBottom: 10,
  },
  date: {
    flex: 1,
    color: '#000',
    opacity: 0.5,
    fontSize: 11,
    alignSelf: 'flex-end'
  }
})

const Note = () => {
  const data = [
    {
      date: '2022-03-01',
      message: '今日の集会は延期となります。'
    },
    {
      date: '2022-03-02',
      message: 'TL会議は3/3になります。'
    },
    {
      date: '2022-03-03',
      message: '明日の業務は台風でお休みです。'
    },
  ];

  const scrollMessage = useRef();
  const scrollNotification = useRef();
  const [tab, setTab] = useState('TEAM');
  const [newMessage, setNewMessage] = useState('');
  const [listMessage, setListMessage] = useState(data);

  function onSendMessage() {
    if (newMessage) {
      const addMessage = {
        message: newMessage,
        date: new Date().toISOString().slice(0, 10),
      }

      setListMessage((listMessage) => [...listMessage, addMessage]);
      
      setNewMessage('');
    }
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
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
          <Pressable style={[styles.tabStyle, tab === 'TEAM' ? styles.tabActive : {}]} onPress={() => {
            setTab('TEAM');
            setNewMessage('');
          }}>
            <Text style={[styles.tabText, tab === 'TEAM' ? styles.tabTextActive : {} ]}>Team</Text>
            <View style={styles.messageText}>
              <Text style={styles.textNotify}>1</Text>
            </View>
          </Pressable>
          <Pressable style={[styles.tabStyle, tab === 'IZUMI' ? styles.tabActive : {}]} onPress={() => {
            setTab('IZUMI');
            setNewMessage('');
          }}>
            <Text style={[styles.tabText, tab === 'IZUMI' ? styles.tabTextActive : {}]}>Izumi</Text>
            <View style={styles.messageText}>
              <Text style={styles.textNotify}>3</Text>
            </View>
          </Pressable>
        </View>

        <View style={{ flex: 1 }}>
          {
            tab === 'TEAM' ? 
            <View style={{ flex: 1 }}>
              <ScrollView style={styles.zoneChat} ref={scrollMessage} onContentSizeChange={() => scrollMessage.current.scrollToEnd({ animated: true })}>
                {
                  listMessage && listMessage.map((item, index) => {
                    return (
                      <Message data={item} key={`message-no-${index + 1}`} />
                    )
                  })
                }
              </ScrollView>

              <View style={styles.zoneTyping}>
                <View style={styles.zoneInput}>
                  <View style={styles.inputMessage}>
                    <CustomInput value={newMessage} onChangeText={setNewMessage} height={41} autoFocus={true} />
                  </View>
                  <Pressable style={styles.iconSend} onPress={onSendMessage}>
                    <Icon style={{lineHeight: 41}} name="send" size={16} color="#1534A1" />
                  </Pressable>
                </View>
              </View>
            </View> : <View></View>
          }

          {
            tab === 'IZUMI' ?
            <View style={{ flex: 1 }}>
              <ScrollView ref={scrollNotification} onContentSizeChange={() => scrollNotification.current.scrollToEnd({ animated: true })}>
                {
                  listMessage && listMessage.map((item, index) => {
                    return (
                      <Notification data={item} index={index + 1} key={`notification-no-${index + 1}`} />
                    )
                  })
                }
              </ScrollView>
            </View> : <View></View>
          }
        </View>
      </View>
    </KeyboardAvoidingView>
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
    padding: 10,
    flexGrow: 1,
  },
  zoneTyping: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 45,
  },
  zoneInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },  
  inputMessage: {
    flex: 1,
  },
  iconSend: {
    height: 41,
    width: 41,
    paddingHorizontal: 10,
  }
})

export default Note;