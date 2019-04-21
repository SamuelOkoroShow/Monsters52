
import React, { Component } from 'react';
import { View, Text, StatusBar, TouchableOpacity} from 'react-native';

export default class index extends Component{
	constructor(){
		super()
		console.log("Index View")
	}
  
  	render (){
  		return(<View style={{flex:1, backgroundColor:'#333'}}>
  		<Text style={{fontSize:40, color:'#ddd'}}>Hello World</Text>
  		</View>)
  	}
}