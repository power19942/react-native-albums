/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    View
} from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

export default class raw extends Component {
    render() {
        const url = "http://rallycoding.herokuapp.com/api/music_albums";
        return (
            <View style={{flex:1}}>
                  <Header headerText={'Albums'}/>
                  <AlbumList/>
              </View>
        );
    }
}


AppRegistry.registerComponent('raw', () => raw);
