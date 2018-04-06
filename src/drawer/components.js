import Expo from 'expo';
import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
// import { Icon } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import ButtonsTab from '../tabs/buttons';
import ListsTab from '../tabs/lists';
import InputTab from '../tabs/buttons';
import FontsTab from '../tabs/buttons';

const Components = TabNavigator(
  {
    ButtonsTab: {
      screen: ButtonsTab,
      path: '/buttons',
      navigationOptions: {
        tabBarLabel: 'Buttons',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            // name={focused ? 'star' : 'star-outlined'}
            name='star'
            size={20}
            type="material-community"
            color={tintColor}
            iconStyle={{padding: 1,}}
          />
        ),
      },
    },
    ListsTab: {
      screen: ListsTab,
      path: '/lists',
      navigationOptions: {
        tabBarLabel: 'Lists',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon name="list" size={20} type="entypo" color={tintColor} />
        ),
      },
    },
    InputTab: {
      screen: InputTab,
      path: '/input',
      navigationOptions: {
        tabBarLabel: 'Input',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name='search'
            size={20}
            type="font-awesome"
            color={tintColor}
          />
        ),
      },
    },
    News: {
      screen: InputTab,
      path: '/input',
      navigationOptions: {
        tabBarLabel: 'newspaper',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name='instagram'
            size={20}
            type="font-awesome"
            color={tintColor}
          />
        ),
      },
    },
    FontsTab: {
      screen: FontsTab,
      path: '/fonts',
      navigationOptions: {
        tabBarLabel: 'Settings',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name='cog'
            size={20}
            iconStyle={{margin: 2,}}
            type="font-awesome"
            color={tintColor}
          />
        ),
      },
    },
  },
  {
    initialRouteName: 'ListsTab',
    animationEnabled: false,
    swipeEnabled: true,
    // Android's default option displays tabBars on top, but iOS is bottom
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: '#e91e63',
      // Android's default showing of icons is false whereas iOS is true
      showIcon: true,
    },
  }
);

Components.navigationOptions = {
  drawerLabel: 'Components',
  drawerIcon: ({ tintColor }) => (
    <Icon
      name="cog"
      size={30}
      iconStyle={{
        width: 30,
        height: 30
      }}
      type="material"
      color={tintColor}
    />
  ),
};

// Workaround to avoid crashing when you come back on Components screen
// and you were not on the Buttons tab
export default StackNavigator(
  {
    ComponentsTabs: { screen: Components },
  },
  {
    headerMode: 'none',
  }
);
