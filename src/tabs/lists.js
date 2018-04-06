import Expo from 'expo';
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import ListImage from '../views/list/listImage';

const ListsTabView = ({ navigation }) => (
  <ListImage navigation={navigation} />
)
const ListsTab = StackNavigator({
  Lists: {
    screen: ListsTabView,
    path: '/',
    navigationOptions: ({ navigation }) => ({
      title: "Lists",
      headerLeft: (
        <Icon
          name="menu"
          size={30}
          type="entypo"
          style={{ paddingLeft: 10 }}
          onPress={() => navigation.navigate('DrawerOpen')}
        />
      ),
    }),
  }
});

export default ListsTab;

