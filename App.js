import React from 'react';
import { Text, View, Image, Dimensions, AppRegistry } from 'react-native';
import Expo, { AppLoading, Asset, Font} from 'expo';
import { DrawerNavigator, DrawerItems } from 'react-navigation';

// import Login from './src/views/login/screen1';

import Login from './src/drawer/login';
import Profile from './src/drawer/profile';
import Components from './src/drawer/components';

const SCREEN_WIDTH = Dimensions.get('window').width;

const CustomDrawerContentComponent = props => (
  <View style={{ flex: 1, backgroundColor: '#43484d' }}>
    <View style={{ marginTop: 40, justifyContent: 'center', alignItems: 'center' }}>
      <Image
        source={require('./src/images/logo.png')}
        style={{ width: SCREEN_WIDTH * 0.57 }}
        resizeMode="contain"
      />
    </View>
    <View style={{ marginLeft: 10 }}>
      <DrawerItems {...props} />
    </View>
  </View>
);


const MainRoot = DrawerNavigator(
  {
    Login: {
      path: '/login',
      screen: Login,
    },
    Profile: {
      path: '/profile',
      screen: Profile,
    },
    Components: {
      path: '/components',
      screen: Components,
    }
  },
  {
    initialRouteName: 'Components',
    contentOptions: {
      activeTintColor: '#548ff7',
      activeBackgroundColor: 'transparent',
      inactiveTintColor: '#ffffff',
      inactiveBackgroundColor: 'transparent',
      labelStyle: {
        fontSize: 15,
        marginLeft: 0,
      },
    },
    drawerWidth: SCREEN_WIDTH * 0.8,
    contentComponent: CustomDrawerContentComponent,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
  }

);
export default class App extends React.Component {
  render() {
    return (
      <MainRoot />
    );
  }
}

AppRegistry.registerComponent('clone-app-element', ()  => App);
