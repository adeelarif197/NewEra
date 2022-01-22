import React, { Component } from 'react';
import { View, Text,Image,SafeAreaView, StyleSheet,TouchableOpacity} from 'react-native';

export default class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <SafeAreaView style={styles.MianView}>
      <View style={styles.LogoImage}>
      <Image source= {require('/Users/mudassirsheikh/Desktop/NewEra/NewEra/src/assests/NEW-ERA.png')}/>
       
        <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Login')}} style={styles.TextView}>
        <Text style={styles.TextSize}> Get Started</Text>
        </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
    LogoImage:{
        alignItems:'center'
    },
    TextView:{
       borderRadius:20,
       borderWidth:0,
       padding:12,
       backgroundColor:'#D4A476'


    },
    TextSize:{
        fontSize:25,
        fontWeight:'bold'

    },
    MianView:{
        backgroundColor:'#FCF3CF',
        flex:1,


    }
})
