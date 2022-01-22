import React, { Component } from 'react';
import { View, Text,Image,SafeAreaView, StyleSheet,TouchableOpacity,TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
GoogleSignin.configure();

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Email: '',
      Password: '',
      loading: false,

    };
  }
  
  render() {
    return (
      <SafeAreaView style={styles.MianView}>
      <View style={styles.LogoImage}>
      <Image source= {require('/Users/mudassirsheikh/Desktop/NewEra/NewEra/src/assests/NEW-ERA-3.png')}/>
	  </View>
	  <View style={styles.InputView}>
    
       <TextInput style={styles.InputField} onChangeText={(val)=>this.setState({Email:val})}/>
       <Icon name = 'email-outline' size ={30} color={'black'} style={styles.IconStyle}/>
	   <TextInput style={styles.InputField} onChangeText={(val)=>this.setState({Password:val})}/>
	   <Icon name = 'lock-outline' size ={30} color={'black'} style={styles.IconStyle}/>
     </View>
    

        <TouchableOpacity style={styles.Button}>
        <Text style={styles.TextSize}> Login</Text>
        </TouchableOpacity>

        <View style={styles.LineProperty}>
       <Text>_____________________OR_____________________ </Text>
     </View>

     <View>
     
        <TouchableOpacity style={styles.GoogleButton}>
        <Image source={require('/Users/mudassirsheikh/Desktop/NewEra/NewEra/src/assests/download.png')} style={styles.Googleimage}/>
        <View style={{justifyContent:'center',alignItems: 'center'}}><Text style = {styles.TextGoogle}> Continue with google </Text></View>
        </TouchableOpacity>
        </View>
        <View>
     
     <TouchableOpacity style={styles.GoogleButton}>
     <Image source={require('/Users/mudassirsheikh/Desktop/NewEra/NewEra/src/assests/gm.png')} style={styles.Googleimage}/>
     <View style={{justifyContent:'center',alignItems: 'center'}}><Text style = {styles.TextGoogle}> Continue with Email </Text></View>
     </TouchableOpacity>
     </View>
     <View>
     
     <TouchableOpacity style={styles.GoogleButton}>
     <Image source={require('/Users/mudassirsheikh/Desktop/NewEra/NewEra/src/assests/Mobile.png')} style={styles.Googleimage}/>
     <View style={{justifyContent:'center',alignItems: 'center'}}><Text style = {styles.TextGoogle}> Continue with Mobile</Text></View>
     </TouchableOpacity>
     </View>
        
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
    LogoImage:{
        alignItems:'center',
        marginTop: -35,
        height: hp('70%'), // 70% of height device screen
        width: wp('80%'),
        marginLeft: hp('5')
    },
    Button:{
       borderRadius:20,
       borderWidth:0,
       padding:hp('1'),
       backgroundColor:'#D4A476',
	   alignItems:'center',
	   marginHorizontal: hp('10%'),
     marginVertical: hp('33%')
	  

    },
    TextSize:{
        fontSize: hp('3%'),
        fontWeight:'bold'

    },
    MianView:{
        backgroundColor:'white',
        flex:1,
        backgroundColor:'#FCF3CF'


    },
	InputField:{
		borderRadius:20,
		borderWidth:2,
		marginHorizontal:20,
		padding:10,
		marginVertical:15,
    paddingLeft:50,
    

	},
	InputView:{
		marginVertical:-250,
    
	},
  IconStyle:{
    marginLeft:30,
    marginTop:-50

  },
  GoogleButton:{
    borderRadius:10,
    borderWidth:0,
    marginHorizontal:'7%',
    flexDirection:'row',
    padding: hp('0.5%'),
    backgroundColor: '#3498DB',
    marginTop: hp('2%'),

   
    

  },
  LineProperty:{
    marginTop:-250,
    marginLeft:20

  },
  Googleimage:{
    height: hp('4%'), // 70% of height device screen
    width: wp('8%'),
    backgroundColor:'white',
    borderRadius: 15,
    marginHorizontal: hp('2%'),
    marginTop: 3,
    marginLeft: 10
    

  },
  TextGoogle:{
    fontSize: hp('2.3%'),
    fontWeight: 'bold',
    color:'white'

    
  },

	
})
