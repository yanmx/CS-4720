import React from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity, Button, ImageBackground, ScrollView,TouchableHighlight, Animated } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation'
import MapView from 'react-native-maps'

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol
} from 'react-native-responsive-screen';

export default class InviteCard extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <View style = {styles.header}>
            <View style={styles.Htitle}>
              <Image style={{margin:10}} source={require('./assets/back.png')} />
              <Text style={styles.HDinDIn}>DinDin</Text>
              <View style={{margin:10}}></View>
            </View>
          </View>

          <View style = {styles.invite}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('InviteCard')}>
              <View style = {styles.card} >
                  <Image style={{width: wp('22%'),height:hp("10")}} source={require('./assets/face4.png')} />
                  <View style = {styles.details}>
                    <Text style = {{fontFamily: 'Helvetica-Bold', fontSize: 15}}>University of Virginia, Charlottesville, VA</Text>
                    <Text>Sunday 17 June - 8:00pm</Text>
                    <Text></Text>
                    <Text style = {{color : 'grey'}}>Hosted by Alma Evans</Text>
                  </View>
                </View>
            </TouchableOpacity>
            
            <View style = {styles.choice}>
                <TouchableHighlight style = {styles.declinebox} onPress={() => this.props.navigation.navigate('HomePage')}>
                  <View style={{flexDirection: "row",justifyContent: "center",alignItems: "center"}}>
                    <Image style={{justifyContent: "center",alignItems: "center",}}  source={require('./assets/no.png')} />
                    <Text style={styles.decline}>Decline</Text>
                  </View>
                </TouchableHighlight>
                <TouchableHighlight style = {styles.declinebox} onPress={() => this.props.navigation.navigate('HomePage')}>
                  <View style={{flexDirection: "row",justifyContent: "center",alignItems: "center"}}>
                    <Image  source={require('./assets/yes.png')} />
                    <Text style={styles.accept}>Accept</Text>
                  </View>
                </TouchableHighlight>
            </View>
          </View>
          <View style = {{width: wp('100%'), height: hp('50%'),}}>
            <MapView
                style={{flex: 1}}
                region={{
                  latitude: 38.033705, 
                  longitude: -78.508009,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421
                }}
                showsUserLocation={true}
                showsPointsOfInterest = {true}
                annotations={[{
                  latitude: 38.033705,
                  longitude: -78.508009,
                  title: 'meet point',
                  subtitle: "1",
                }]}>
                  <MapView.Marker
                      coordinate={{latitude: 38.033705,
                      longitude: -78.508009}}
                      title={"meet point"}
                      description={"description"}
                  />
                </MapView>
            </View>
        </View>
      );
    }
  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: "#F0FFFF"
    },
    header: {
      width: wp('100%'),
      height: hp('10%'),
      backgroundColor: "#FFFFFF"
    },
    HDinDIn:{
      letterSpacing: 0.4,
      textAlign: 'center',
      fontSize: 18,
      fontFamily: 'Helvetica-Bold'
    },
    Htitle:{
      width: wp('100%'),
      height: hp('10%'),
      flexDirection:"row",
      justifyContent: "space-between",
      alignItems:"center"
    },
    invite: {
      width: wp('80%'),
      height: hp('30%'),
      borderRadius: 4,
      backgroundColor: '#FFFFFF',
    },
    card: {
      width: wp('80%'),
      height: hp('24%'),
      flexDirection:"column",
      justifyContent: "space-around",
      alignItems: "center"
    },
    details:{
      flexDirection:"column",
      justifyContent: "center",
      alignItems: "center"
    },
    choice: {
      width: wp('80%'),
      height: hp('6%'),
      backgroundColor: 'green',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    declinebox:{
      width: wp('40%'),
      height:hp("6%"),
      backgroundColor: "white",
      borderWidth: 1,
      borderColor: '#F0F0F0',
    },
    decline:{
      marginLeft: wp("2%"),
      marginTop: hp("1.5%"),
      fontSize: 25,
      fontFamily: "Helvetica",
      color: "red",
      textAlign: "center",
    },
    accept:{
      marginLeft: wp("2%"),
      marginTop: hp("1.5%"),
      fontSize: 25,
      fontFamily: "Helvetica",
      color: "green",
      textAlign: "center",
    },
});