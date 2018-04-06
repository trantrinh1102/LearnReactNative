import _ from 'lodash';
import Expo from 'expo';
import React, { Component } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  TouchableHighlight,
  ListView,
  Dimensions
} from 'react-native';

import {
  Card,
  Text,
  ButtonGroup,
  Tile,
  ListItem,
  Avatar,
} from 'react-native-elements';

// import color from 'HsColors';

import { users } from '../../mock_data/data';

const HEIGHT = Dimensions.get('window').height;

class ListImage extends Component {

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View>
            <Tile
              imageSrc={{
                uri:
                  'https://static1.squarespace.com/static/5477887ae4b07c97883111ab/5478c08fe4b0fa4e5a552532/57e101f3579fb32aef30d4af/1491426124625/Porthmeor+Sunset+21.jpg',
              }}
              title="this is text show on image"
              titleStyle={{ fontSize: 20 }}
              featured
              caption="Tran Trinh"
              activeOpacity={0.5}
              style={styles.image}
              height={HEIGHT * 0.25}
            />
            <View style={{ paddingTop: 20 }}>
              <Tile
                imageSrc={{
                  uri:
                    'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
                }}
                icon={{
                  name: 'heart',
                  type: 'font-awesome',
                  size: 60,
                  color: 'red',
                }}
                featured
                activeOpacity={0.5}
                onPress={() => {
                  'Tile pressed';
                }}
                style={styles.image}
                height={HEIGHT * 0.25}

              />
            </View>
            <View style={{ paddingTop: 20 }}>
              <Tile
                imageSrc={{
                  uri:
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Half_Dome_from_Glacier_Point%2C_Yosemite_NP_-_Diliff.jpg/320px-Half_Dome_from_Glacier_Point%2C_Yosemite_NP_-_Diliff.jpg',
                }}
                title="Half Dome, Yosemite"
                titleStyle={{ fontSize: 20 }}
                activeOpacity={1}
                style={styles.image}
                // contentContainerStyle={{ height: 70 }}
                height={HEIGHT * 0.25}

              >
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}
                >
                  <Text style={{ color: 'green' }}>Visit</Text>
                  <Text style={{ color: 'blue' }}>Find out More</Text>
                </View>
              </Tile>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    height: 50,
    margin: 10,
  }

})

export default ListImage;
