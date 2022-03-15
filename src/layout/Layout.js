import { View, Pressable, Text, StyleSheet } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { 
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { 
  NavigationContainer,
  DrawerActions
} from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

const Navbar = () => {
  const navigation = useNavigation();

  const onToggle = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  }

  const onLogout = () => {
    console.log('onLogout');
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

const ListSidebar = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <View style={{ 
          flex: 1,
          height: 50,
          alignItems: 'center',
          justifyContent: 'center',
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
  return (
    <Drawer.Navigator 
      screenOptions={{ headerShown: false }} 
      initialRouteName="Note"
      drawerContent={(props) => <ListSidebar {...props} />}
    >
      <Drawer.Screen name="Note" component={NoteScreen} />
    </Drawer.Navigator>
  )
}

const Layout = () => {
  return (
    <NavigationContainer independent={true}>
      <Sidebar />
    </NavigationContainer>
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