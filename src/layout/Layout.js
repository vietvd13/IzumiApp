import { View, Pressable, Text, StyleSheet } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { 
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { 
  DrawerActions
} from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import Swiper from 'react-native-swiper/src';


const Navbar = () => {
  const navigation = useNavigation();

  const onToggle = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  }

  const onLogout = () => {
    navigation.push('SignInScreen');
  }

  return (
    <View style={NavbarStyle.container}>
      <Pressable style={NavbarStyle.zoneIcon} onPress={onToggle}>
        <Icon style={{lineHeight: 39}} name="bars" size={20} color="#1534A1" />
      </Pressable>
      <View style={NavbarStyle.zoneText}>
        <Text style={NavbarStyle.displayLogo}>Izumi</Text>
      </View>
      <Pressable style={NavbarStyle.zoneIcon} onPress={onLogout}>
        <Icon style={{lineHeight: 39}} name="sign-out" size={20} color="#1534A1" />
      </Pressable>
    </View>
  )
}

const NoteScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <Navbar />
      <View style={{ flex: 1, padding: 10 }}>
        <Text>お知らせ</Text>
      </View>
    </View>
  )
}

const InternalNewsLetter = () => {
  return (
    <View style={{ flex: 1 }}>
      <Navbar />
      <View style={{ flex: 1, padding: 10 }}>
        <Text>社内報</Text>
      </View>
    </View>
  )
}

const ElectronicLearning = () => {
  return (
    <View style={{ flex: 1 }}>
      <Navbar />
      <View style={{ flex: 1, padding: 10 }}>
        <Text>Eラーニング</Text>
      </View>
    </View>
  )
}

const TransferTable = () => {
  return (
    <View style={{ flex: 1 }}>
      <Navbar />
      <View style={{ flex: 1, padding: 10 }}>
        <Text>シフト表</Text>
      </View>
    </View>
  )
}

const PayCheck = () => {
  return (
    <View style={{ flex: 1 }}>
      <Navbar />
      <View style={{ flex: 1, padding: 10 }}>
        <Text>給与明細</Text>
      </View>
    </View>
  )
}

const Maintenance = () => {
  return (
    <View style={{ flex: 1 }}>
      <Navbar />
      <View style={{ flex: 1, padding: 10 }}>
        <Text>整備</Text>
      </View>
    </View>
  )
}

const PL = () => {
  return (
    <View style={{ flex: 1 }}>
      <Navbar />
      <View style={{ flex: 1, padding: 10 }}>
        <Text>P/L</Text>
      </View>
    </View>
  )
}

const Transport = () => {
  return (
    <View style={{ flex: 1 }}>
      <Navbar />
      <View style={{ flex: 1, padding: 10 }}>
        <Text>車両</Text>
      </View>
    </View>
  )
}

const Setting = () => {
  return (
    <View style={{ flex: 1 }}>
      <Navbar />
      <View style={{ flex: 1, padding: 10 }}>
        <Text>設定</Text>
      </View>
    </View>
  )
}

const SideView = ({ navigation, data}) => {
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
                        <Icon style={{lineHeight: 30}} name={item.icon} size={25} color="#1534A1" />
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
});

const data = [
  [
    {
      icon: 'envelope',
      text: 'お知らせ',
      message: '1',
      link: 'Note'
    },
    {
      icon: 'file-text',
      text: '社内報',
      message: null,
      link: 'InternalNewsLetter'
    },
    {
      icon: 'mortar-board',
      text: 'E-ラーニング',
      message: '25',
      link: 'ElectronicLearning'
    }
  ],
  [
    {
      icon: 'calendar',
      text: 'シフト表',
      message: '5',
      link: 'TransferTable'
    }, 
    {
      icon: 'yen',
      text: '給与明細',
      message: null,
      link: 'PayCheck'
    }, 
    {
      icon: 'wrench',
      text: '整備',
      message: null,
      link: 'Maintenance'
    }
  ],
  [
    {
      icon: 'bar-chart',
      text: 'P/L',
      message: null,
      link: 'PL'
    },
    {
      icon: 'automobile',
      text: '車両',
      message: '10',
      link: 'Transport'
    }, 
    {
      icon: 'gears',
      text: '設定',
      message: null,
      link: 'Setting'
    }
  ]
]

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
}

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
});

const ListSidebar = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <View style={{ 
          flex: 1,
          height: 50,
          alignItems: 'center',
          justifyContent: 'center',
          marginLeft: 10,
          marginRight: 10,
        }}>
          <Text style={{
            fontSize: 35,
            fontWeight: 'bold',
            color: '#1534A1',
          }}>Izumi</Text>
        </View>
      </View>

      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  )
}

const Drawer = createDrawerNavigator();

const Sidebar = () => {
  const styleWhite = { 
    backgroundColor: '#FFF', 
    marginLeft: 0, 
    marginRight: 0, 
    borderRadius: 0
  }

  const styleBlackSqueeze = {
    backgroundColor: '#F1F5FA', 
    marginLeft: 0, 
    marginRight: 0, 
    borderRadius: 0
  }

  return (
    <Drawer.Navigator 
      screenOptions={{ 
        headerShown: false,
        drawerActiveTintColor: '#1534A1',
        drawerLabelStyle: {
          fontWeight: 'bold',
          flex: 1,
          textAlign: 'center',
          paddingLeft: 32,
        },
        drawerContentStyle: {
          flex: 1,
        },
      }} 
      initialRouteName="Home"
      drawerContent={(props) => <ListSidebar {...props} />}
    >
      <Drawer.Screen name="Home" component={Home} options={{ drawerLabel: 'ダッシュボード', drawerItemStyle: styleWhite }} />
      <Drawer.Screen name="Note" component={NoteScreen} options={{ drawerLabel: 'お知らせ', drawerItemStyle: styleBlackSqueeze }} />
      <Drawer.Screen name="InternalNewsLetter" component={InternalNewsLetter} options={{ drawerLabel: '社内報', drawerItemStyle: styleWhite }} />
      <Drawer.Screen name="ElectronicLearning" component={ElectronicLearning} options={{ drawerLabel: 'Eラーニング', drawerItemStyle: styleBlackSqueeze }} />
      <Drawer.Screen name="TransferTable" component={TransferTable} options={{ drawerLabel: 'シフト表', drawerItemStyle: styleWhite }} />
      <Drawer.Screen name="PayCheck" component={PayCheck} options={{ drawerLabel: '給与明細', drawerItemStyle: styleBlackSqueeze }} />
      <Drawer.Screen name="Maintenance" component={Maintenance} options={{ drawerLabel: '整備', drawerItemStyle: styleWhite }} />
      <Drawer.Screen name="PL" component={PL} options={{ drawerLabel: 'P/L', drawerItemStyle: styleBlackSqueeze }} />
      <Drawer.Screen name="Transport" component={Transport} options={{ drawerLabel: '車両', drawerItemStyle: styleWhite }} />
      <Drawer.Screen name="Setting" component={Setting} options={{ drawerLabel: '設定', drawerItemStyle: styleBlackSqueeze }} />
    </Drawer.Navigator>
  )
}

const Layout = () => {
  return (
    <Sidebar />
  )
}

const NavbarStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },

  zoneIcon: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  zoneText: {
    flex: 1,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  displayLogo: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#1534A1',
  }
});

export default Layout;