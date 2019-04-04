import React from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity, Button, ImageBackground, ScrollView,TouchableHighlight, Animated } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation'
import InviteCard from "./inviteCard.js"
import setTimeSpace from "./invite_time&place"
// import { Card } from 'react-native-paper';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol
} from 'react-native-responsive-screen';
// var FBLoginButton = require('./FBLoginButton');
// const FBSDK = require('react-native-fbsdk');
// const {
//   LoginManager,
// } = FBSDK;
// LoginManager.logInWithReadPermissions(['public_profile']).then(
//   function(result) {
//     if (result.isCancelled) {
//       alert('Login was cancelled');
//     } else {
//       alert('Login was successful with permissions: '
//         + result.grantedPermissions.toString());
//     }
//   },
//   function(error) {
//     alert('Login failed with error: ' + error);
//   }
// );

// class Login extends Component {
//   render() {
//     return (
//       <View style={styles.fb}>
//         <Text style={styles.fb_label}>Please login with your Facebook account</Text>
//         <FBLoginButton />
//       </View>
//     );
//   }
// }
getMonth = function(a){
  a = (a+12)%12
  dict = {
    0: "January",
    1: "February",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6:  "July",
    7:  "August",
    8:  "September",
    9: "October",
    10: "November",
    11: "December"
  }
  return dict[a]
}

getWeekday = function(a){
  a = (a+7)%7
  dict = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6:  "Saturday",
  }
  return dict[a]
}

var month = new Date().getMonth()
class Logo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {fadeIn1: new Animated.Value(1),
                  fadeIn2: new Animated.Value(1),
                  fadeIn3: new Animated.Value(1),
                 };
 }

 fadeIn1() {
  this.state.fadeIn1.setValue(1)                  
  Animated.timing(
    this.state.fadeIn1,           
    {
      toValue: 0,                   
      duration: 500,              
    }
  ).start(() => this.fadeOut1());                        
}

  fadeOut1() {
    this.state.fadeIn1.setValue(0)
    Animated.timing(                  
      this.state.fadeIn1,            
      {
        toValue: 1,                   
        duration: 500,              
      }
    ).start(() => this.fadeIn2());                        
  }

  fadeIn2() {
    this.state.fadeIn2.setValue(1)                  
    Animated.timing(
      this.state.fadeIn2,           
      {
        toValue: 0,                   
        duration: 500,              
      }
    ).start(() => this.fadeOut2());                        
  }
  
  fadeOut2() {
    this.state.fadeIn2.setValue(0)
    Animated.timing(                  
      this.state.fadeIn2,            
      {
        toValue: 1,                   
        duration: 500,              
      }
    ).start(() => this.fadeIn3());                        
  }

  fadeIn3() {
    this.state.fadeIn3.setValue(1)                  
    Animated.timing(
      this.state.fadeIn3,           
      {
        toValue: 0,                   
        duration: 500,              
      }
    ).start(() => this.fadeOut3());                        
  }
  
  fadeOut3() {
    this.state.fadeIn3.setValue(0)
    Animated.timing(                  
      this.state.fadeIn3,            
      {
        toValue: 1,                   
        duration: 500,              
      }
    ).start();                        
  }
  
  tick() {
    setInterval(()=> {this.fadeIn1()}, 3000)
  }

  componentDidMount() {
    loc(this);
    this.tick();
  }
  
  componentWillUnMount() {
    rol();
  }

  // }

  render() {
    return (
      <View style={styles.container}>
      <Image style={styles.illustration} source={require('./assets/Group.png')} >
      </Image>
      <Animated.View style={{position:'absolute',top:hp('26%'), left:wp('13%'),opacity: this.state.fadeIn1}}>
        <Image style={styles.face1} source={require('./assets/face1.png')} />
        </Animated.View>
      <Animated.View style={{position:'absolute',top:hp('15%'), left:wp('63%'),opacity: this.state.fadeIn2}}>
        <Image style={styles.face1} source={require('./assets/face2.png')} />
        </Animated.View>
      <Animated.View style={{position:'absolute',top:hp('35%'), left:wp('60%'),opacity: this.state.fadeIn3}}>
        <Image style={styles.face1} source={require('./assets/face3.png')} />
        </Animated.View>
      
        {/* <Text style={styles.title}>{I18n.t('DinDin')}</Text> */}
        
        <Text style={styles.title}>DinDin</Text>
        <Text style={styles.sub}>Connecting food lovers</Text>
        <TouchableOpacity style = {styles.start} onPress={() => this.props.navigation.navigate('HomePage')}>
          {/* <Image  source={require('./assets/getStarted.png')}/> */}
          <Text style={styles.getStarted}>Get Started</Text>
        </TouchableOpacity>
        {/* <Button
          title="Get Started"
          backgroundColor = "#0F8CFF"
          type = "Solid"
          onPress={() => this.props.navigation.navigate('HomePage')}
        /> */}
        {/* <Image style = {styles.start} source={require('./assets/getStarted.png')}/> */}
      
      </View>
    );
  }
}

class HomePage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style = {styles.header}>
            <View style={styles.Htitle}>
              <Image style={{margin:10}} source={require('./assets/sidemenu.png')} />
              <Text style={styles.HDinDIn}>DinDin</Text>
              <Image style={{margin:10}} source={require('./assets/search.png')} />
            </View>
            <View style={styles.months}>
              <Text style={styles.month}>{getMonth(new Date().getMonth() - 2)}</Text>
              <Text style={styles.month}>{getMonth(new Date().getMonth() - 1)}</Text>
              <Text style={styles.Cmonth}>{getMonth(new Date().getMonth())}</Text>
              <Text style={styles.month}>{getMonth(new Date().getMonth() + 1)}</Text>
              <Text style={styles.month}>{getMonth(new Date().getMonth() + 2)}</Text>
            </View>
          </View>

        <View style = {styles.invite}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('InviteCard')}>
            <View style = {styles.card} >
                <Image style={{margin:20}} source={require('./assets/face4.png')} />
                <View style = {styles.details}>
                  <Text>Alma Evans</Text>
                  <Text>Sunday 17 June - 8:00pm</Text>
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

        <ScrollView>
          <View style = {styles.event}>
            <Text style={styles.Edate}>   {getWeekday(new Date().getDay())} {new Date().getDate()} {getMonth(new Date().getMonth())}</Text>
            <TouchableOpacity style ={ {justifyContent: "space-around",alignItems: "center",}} onPress={() => this.props.navigation.navigate('setTimeSpace')}>
              <Image  source={require('./assets/addEvent.png')} />
            </TouchableOpacity>
          </View>
          <View style = {styles.event}>
            <Text style={styles.Edate}>   {getWeekday(new Date().getDay()+1)} {new Date().getDate()+1} {getMonth(new Date().getMonth())}</Text>
            <TouchableOpacity style ={ {justifyContent: "space-around",alignItems: "center",}} onPress={() => this.props.navigation.navigate('setTimeSpace')}>
              <Image  source={require('./assets/addEvent.png')} />
            </TouchableOpacity>          </View>
          <View style = {styles.event}>
            <Text style={styles.Edate}>   {getWeekday(new Date().getDay()+2)} {new Date().getDate()+2} {getMonth(new Date().getMonth())}</Text>
            <TouchableOpacity style ={ {justifyContent: "space-around",alignItems: "center",}} onPress={() => this.props.navigation.navigate('setTimeSpace')}>
              <Image  source={require('./assets/addEvent.png')} />
            </TouchableOpacity>          </View>
        </ScrollView>
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
  },
  fb: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  fb_label: {
    fontSize: 16,
    fontWeight: 'normal',
    marginBottom: 48,
  },
  illustration: {
    // flex: 1,
    // justifyContent: 'center',
    position: "absolute",
    top: hp('12%'),
  },
  title: {
    paddingTop: hp("40%"),
    fontSize: 29,
    fontFamily: "Helvetica",
    color: "black",
    textAlign: "center",
  },
  sub: {
    width: wp('100%'),
    height: hp('18%'),
    fontSize: 14,
    fontFamily: "Helvetica",
    color: "black",
    textAlign: "center"
  },
  start: {
    width: wp('100%'),
    height:hp("7%"),
    backgroundColor: "#0F8CFF",
    position: "absolute",
    bottom:0
  },
  getStarted: {
    color:"white",
    textAlign: "center",
    justifyContent: 'center',
    alignItems: 'center',
  },
  invite: {
    width: wp('80%'),
    height: hp('20%'),
    backgroundColor: 'steelblue',
    borderRadius: 4
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
  card: {
    width: wp('80%'),
    height: hp('14%'),
    flexDirection:"row",
    // justifyContent: "space-between",
  },
  header: {
    width: wp('100%'),
    height: hp('15%'),
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
  month:{
    width: wp('20%'),
    height: hp('5%'),
    color: "#D8D8D8",
    fontSize: 14,
    fontFamily: "Helvetica",
    textAlign:"center"
  },
  months:{
    width: wp('100%'),
    height: hp('5%'),
    flexDirection:"row",
    justifyContent: "space-between",
  },
  Cmonth:{
    width: wp('20%'),
    height: hp('5%'),
    fontSize: 14,
    fontFamily: "Helvetica",
    textAlign:"center"
  },
  details:{
    flexDirection:"column",
    justifyContent: "center",
    alignItems: "center"
  },
  event:{
    width: wp('100%'),
    height: hp('20%'),
    flexDirection:"column",
    justifyContent: "center",
    alignItems: "center"
  },
  Edate:{
    width: wp('100%'),
    height: hp('5%'),
    fontSize: 14,
    color: "black",
    fontFamily: "Helvetica",
    textAlign:"left",
    borderWidth: 1,
    borderColor: '#F0F0F0',
    textAlignVertical: "center"
  },
  Edetail:{
    width: wp('100%'),
    height: hp('15%'),
    borderWidth: 1,
    borderColor: '#F0F0F0',
    justifyContent: "space-around",
    alignItems: "center"
  },
  face1:{
    // marginLeft: wp("70%"),
    marginTop: hp("1%")

  }
  
  
});

const RootStack = createStackNavigator(
  {
    Home: {
      screen: Logo,
    },
    HomePage: {
      screen: HomePage,
    },
    InviteCard: {
      screen: InviteCard,
    },
    setTimeSpace: {
      screen: setTimeSpace
    }
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
