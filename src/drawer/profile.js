import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Icont, Icon } from 'react-native-elements';

import Login from '../views/login/screen1';

const ProfileDrawerItem = StackNavigator({
  Playground: { screen: Login }
},
{
  headerMode: 'none'
}
);

ProfileDrawerItem.navigationOptions = {
drawerLabel: 'Profile',
drawerIcon: ({ tintColor }) => (
  <Icon
    name="person"
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

export default ProfileDrawerItem;

