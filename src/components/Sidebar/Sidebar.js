import { View, Text } from 'react-native';
import React from 'react';
import { 
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import Home from '../Home';
import Note from '../Note';
import InternalNewsLetter from '../InternalNewsLetter';
import ElectronicLearning from '../ElectronicLearning';
import TransferTable from '../TransferTable';
import PayCheck from '../PayCheck';
import Maintenance from '../Maintenance';
import PL from '../PL';
import Transport from '../Transport';
import Setting from '../Setting';


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
            textTransform: 'uppercase'
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
      <Drawer.Screen name="Note" component={Note} options={{ drawerLabel: 'お知らせ', drawerItemStyle: styleBlackSqueeze }} />
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

export default Sidebar