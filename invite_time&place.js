import React from 'react';
import { StyleSheet, Text, TextInput,View,Image,Picker,TouchableOpacity,} from 'react-native';
import MapView from 'react-native-maps';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol
} from 'react-native-responsive-screen';


export default class setTimeSpace extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        hour : "09",
        minute: "30",
        AP: "AM",
        location: "Please enter a locaiton."
    };
}
  render() {
    return (
      <View style={styles.container}>
        <View style = {styles.header}>
          <View style={styles.Htitle}>
            <Image style={{margin:10}} source={require('./assets/back.png')} />
            <Text style={styles.HDinDIn}>DinDin</Text>
            <View style={{margin:10}}></View>
          </View>
          <Text style = {{color: "grey"}}>What time is dinner?</Text>
        </View>

        <View style = {styles.time}>
          <Picker
            selectedValue={this.state.hour}
            style={{height: hp('15%'), width: wp('15%')}}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({hour: itemValue})
            }>
            <Picker.Item label="01" value="01" />
            <Picker.Item label="02" value="02" />
            <Picker.Item label="03" value="03" />
            <Picker.Item label="04" value="04" />
            <Picker.Item label="05" value="05" />
            <Picker.Item label="06" value="06" />
            <Picker.Item label="07" value="07" />
            <Picker.Item label="08" value="08" />
            <Picker.Item label="09" value="09" />
            <Picker.Item label="10" value="10" />
            <Picker.Item label="11" value="11" />
            <Picker.Item label="12" value="12" />
          </Picker>
          <Text style = {{fontFamily: 'Helvetica-Bold',fontSize: 30, paddingTop:hp('11%')}}>:</Text>
          <Picker
            selectedValue={this.state.minute}
            style={{height: hp('15%'), width: wp('15%')}}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({minute: itemValue})
            }>
            <Picker.Item label="00" value="00" />
            <Picker.Item label="01" value="01" />
            <Picker.Item label="02" value="02" />
            <Picker.Item label="03" value="03" />
            <Picker.Item label="04" value="04" />
            <Picker.Item label="05" value="05" />
            <Picker.Item label="06" value="06" />
            <Picker.Item label="07" value="07" />
            <Picker.Item label="08" value="08" />
            <Picker.Item label="09" value="09" />
            <Picker.Item label="10" value="10" />
            <Picker.Item label="11" value="11" />
            <Picker.Item label="12" value="12" />
            <Picker.Item label="13" value="13" />
            <Picker.Item label="14" value="14" />
            <Picker.Item label="15" value="15" />
            <Picker.Item label="16" value="16" />
            <Picker.Item label="17" value="17" />
            <Picker.Item label="18" value="18" />
            <Picker.Item label="19" value="19" />
            <Picker.Item label="20" value="20" />
            <Picker.Item label="21" value="21" />
            <Picker.Item label="22" value="22" />
            <Picker.Item label="23" value="23" />
            <Picker.Item label="24" value="24" />
            <Picker.Item label="25" value="25" />
            <Picker.Item label="26" value="26" />
            <Picker.Item label="27" value="27" />
            <Picker.Item label="28" value="28" />
            <Picker.Item label="29" value="29" />
            <Picker.Item label="30" value="30" />
            <Picker.Item label="31" value="31" />
            <Picker.Item label="32" value="32" />
            <Picker.Item label="33" value="33" />
            <Picker.Item label="34" value="34" />
            <Picker.Item label="35" value="35" />
            <Picker.Item label="36" value="36" />
            <Picker.Item label="37" value="37" />
            <Picker.Item label="38" value="38" />
            <Picker.Item label="39" value="39" />
            <Picker.Item label="40" value="40" />
            <Picker.Item label="41" value="41" />
            <Picker.Item label="42" value="42" />
            <Picker.Item label="43" value="43" />
            <Picker.Item label="44" value="44" />
            <Picker.Item label="45" value="45" />
            <Picker.Item label="46" value="46" />
            <Picker.Item label="47" value="47" />
            <Picker.Item label="48" value="48" />
            <Picker.Item label="49" value="49" />
            <Picker.Item label="50" value="50" />
            <Picker.Item label="51" value="51" />
            <Picker.Item label="52" value="52" />
            <Picker.Item label="53" value="53" />
            <Picker.Item label="54" value="54" />
            <Picker.Item label="55" value="55" />
            <Picker.Item label="56" value="56" />
            <Picker.Item label="57" value="57" />
            <Picker.Item label="58" value="58" />
            <Picker.Item label="59" value="59" />
          </Picker>
          <Picker
            selectedValue={this.state.AP}
            style={{height: hp('15%'), width: wp('12%')}}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({AP: itemValue})
            }>
            <Picker.Item label="AM" value="AM" />
            <Picker.Item label="PM" value="PM" />
          </Picker>
        </View>

        <View style = {{width: wp('100%'), height: hp('50%'),position:"absolute",bottom:0}}>
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
        
        <View style = {styles.location}>
            <Text style = {{color: 'grey'}}>Choose a locaiton</Text>
            <View style = {styles.Linput}>
              <Image source={require('./assets/location.png')} />
              <TextInput
                style={{height: hp("15%"),width: wp("70%"),paddingLeft: wp('7%')}}
                onChangeText={(location) => this.setState({location})}
                value={this.state.location}
              />
              <View></View>
            </View>
        </View>

        <TouchableOpacity style = {styles.person} onPress={() => this.props.navigation.navigate('invitePeople')}>
          <Text style={styles.invite}>Invite People</Text>
        </TouchableOpacity>
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
      backgroundColor: "#FFFFFF"
  },
  header: {
    position:"absolute",
    top:0,
    width: wp('100%'),
    height: hp('10%'),
    backgroundColor: "#FFFFFF",
    flex: 1,
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: "center",
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
  time: {
    flex: 1,
    position: 'absolute',
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: "center",
    top:hp('7%'), 
    left:wp('30%')
  },
  location: {
    position: 'absolute',
    top:hp('36%'), 
    height:hp("8%"),
    flex: 1,
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: "center",
    backgroundColor: "white"
  },
  Linput:{
    width: wp('80%'),
    height: hp('10%'),
    flexDirection:"row",
    justifyContent: "space-between",
    alignItems:"center"
  },
  person: {
    width: wp('100%'),
    height:hp("7%"),
    backgroundColor: "#0F8CFF",
    position: "absolute",
    bottom:0
  },
  invite: {
    color:"white",
    textAlign: "center",
    justifyContent: 'center',
    alignItems: 'center',
  },
});