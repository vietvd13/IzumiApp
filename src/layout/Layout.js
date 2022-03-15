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
            fontSize: 25,
            fontWeight: 'bold',
            color: '#1534A1',
            textTransform: 'uppercase',
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
          marginRight: 0
        },
        drawerContentStyle: {
          flex: 1
        } 
      }} 
      initialRouteName="Note"
      drawerContent={(props) => <ListSidebar {...props} />}
    >
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
    fontSize: 25,
    fontWeight: 'bold',
    color: '#1534A1',
    textTransform: 'uppercase',
  }
});

export default Layout;