'use strict'
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
export default class ScreenOne extends React.Component {
  render(){
    return(
      <View style={{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
      }}>
        <Text>{ 'Screen One' }</Text>

        <TouchableOpacity
          onPress={ () => this.props.navigation.navigate('ScreenTwo') }
          style={{
            padding:20,
            borderRadius:20,
            backgroundColor:'yellow',
            marginTop:20
          }}>
          <Text>{'Go to next screen'}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={
            () => this.props.navigation.navigate('DrawerOpen')
          }
          style={{
            padding:20,
            borderRadius:20,
            backgroundColor:'green',
            marginTop:20
          }}>
          <Text>{'Open menu'}</Text>
        </TouchableOpacity>

      </View>
    )
  }
}
