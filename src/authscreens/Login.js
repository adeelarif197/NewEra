import React, { Component } from 'react'
import { Text, View ,StyleSheet,SafeAreaView,TextInput,Image} from 'react-native'

export default class Login extends Component {
	render() {
		return (
			<SafeAreaView>
			<View style ={styles.LogoStyle}> 
			<Image source={require('/Users/mudassirsheikh/Desktop/NewEra/NewEra/src/assests/NEW-ERA.png')}
        />
			</View>
			<View style={styles.MainView}>
			<TextInput style={styles.input}/>
			<TextInput style={styles.input}/>
			</View>
				<Text> LOGIN </Text>
			</SafeAreaView>
		)
	}
}
const styles = StyleSheet.create({
	input:{
		borderRadius:2,
		borderWidth: 1,
		
		
		
		
	},
	MainView:{
		// marginTop:'70%',
		// marginHorizontal:'10%'


	},
	LogoStyle:{
		// alignItems:'center',
		height:10,
		width:10

	}

})
