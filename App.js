import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  ImageBackground,
  Keyboard,
  Pressable,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();

const NavigatorScreen = ({navigation}) => {
  return (
    <View>
      <Button
        title="Welcome Screen"
        onPress={() => navigation.navigate('Welcome Screen')}
      />
      <Button
        title="Sign in"
        onPress={() => navigation.navigate('Sign in Screen')}
      />
      <Button
        title="Sign Up"
        onPress={() => navigation.navigate('Sign up Screen')}
      />
      <Button title="OTP" onPress={() => navigation.navigate('OTP Screen')} />
      <Button title="Cart" onPress={() => navigation.navigate('hello')} />
      <Button title="Home" onPress={() => navigation.navigate('hello')} />
      <Button
        title="Buying Records"
        onPress={() => navigation.navigate('hello')}
      />
      <Button
        title="Selling Records"
        onPress={() => navigation.navigate('hello')}
      />
      <Button
        title="Payment Method"
        onPress={() => navigation.navigate('hello')}
      />
      <Button
        title="Add Payment"
        onPress={() => navigation.navigate('hello')}
      />
      <Button title="Settings" onPress={() => navigation.navigate('hello')} />
      <Button
        title="View Retailers Request"
        onPress={() => navigation.navigate('hello')}
      />
    </View>
  );
};
const Hello = () => {
  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
};

const WelcomeScreen = () => {
  return (
    <View style={styles.Background}>
      <View style={styles.WelcomeContainer}>
        <Text style={styles.Headings}>Comercio</Text>
        <Text style={styles.SubHeadings}>
          The most innovative marketplace. Everything available at your
          fingertips.
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          marginBottom: '10%',
        }}>
        <TouchableOpacity>
          <View
            style={{
              backgroundColor: '#3B3A41',
              width: 150,
              height: 50,
              padding: 10,
              borderTopRightRadius: 10,
              borderBottomRightRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: '50%',
            }}>
            <Text
              style={{
                color: '#FFFFFF',
                fontFamily: 'Outfit-Bold',
                fontSize: 16,
              }}>
              Sign in
            </Text>
          </View>
        </TouchableOpacity>

        <View
          style={{
            backgroundColor: 'white',
            width: 150,
            height: 50,
            padding: 10,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            left: 50,
          }}>
          <TouchableOpacity>
            <Text
              style={{
                color: '#393840',
                fontFamily: 'Outfit-Bold',
                textAlign: 'center',
                fontSize: 16,
              }}>
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const SignInScreen = ({navigation}) => {
  return (
    <View style={styles.Background}>
      <TouchableOpacity
        onPress={() => navigation.dispatch(StackActions.pop(1))}>
        <View style={{marginLeft: '5%', marginTop: '5%'}}>
          <Ionicons name={'arrow-back-sharp'} size={25} color={'white'} />
        </View>
      </TouchableOpacity>
      <View
        style={{
          margin: '5%',
          marginLeft: '10%',
        }}>
        <Text
          style={{color: '#FFFFFF', fontFamily: 'Outfit-Bold', fontSize: 37}}>
          Let's sign you in.
        </Text>
        <Text
          style={{color: '#FFFFFF', fontFamily: 'Outfit-Light', fontSize: 37}}>
          Welcome back. You've been missed!
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '12%',
        }}>
        <View style={{marginBottom: '10%'}}>
          <TextInput
            style={{
              width: 313,
              height: 50,
              padding: 13,
              paddingLeft: 25,
              fontSize: 16,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: '#393840',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'Outfit-Regular',
              color: '#CB8D78',
            }}
            placeholder={'Email or username'}
            placeholderTextColor={'#CB8D78'}
          />
        </View>
        <View>
          <TextInput
            style={{
              width: 313,
              height: 50,
              padding: 13,
              paddingLeft: 25,
              fontSize: 16,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: '#393840',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'Outfit-Regular',
              color: '#CB8D78',
            }}
            placeholder={'Password'}
            placeholderTextColor={'#CB8D78'}
            secureTextEntry={true}
          />
        </View>
      </View>
      <TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            margin: 15,
            marginTop: '54%',
          }}>
          <Text
            style={{
              color: '#CB8D78',
              fontFamily: 'Outfit-Regular',
              fontSize: 18,
            }}>
            Don't have an account?{' '}
          </Text>
          <Text
            style={{
              color: '#FFFFFF',
              fontFamily: 'Outfit-Regular',
              fontSize: 18,
            }}>
            Register
          </Text>
        </View>
      </TouchableOpacity>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginBottom: '10%',
        }}>
        <TouchableOpacity>
          <View
            style={{
              backgroundColor: 'white',
              width: 313,
              height: 50,
              padding: 10,
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: '#393840',
                fontFamily: 'Outfit-Bold',
                textAlign: 'center',
                fontSize: 16,
              }}>
              Sign in
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const SignUpScreen = ({navigation}) => {
  return (
    <View style={styles.Background}>
      <TouchableOpacity
        onPress={() => navigation.dispatch(StackActions.pop(1))}>
        <View style={{marginLeft: '5%', marginTop: '5%'}}>
          <Ionicons name={'arrow-back-sharp'} size={25} color={'white'} />
        </View>
      </TouchableOpacity>
      <View
        style={{
          margin: '5%',
          marginLeft: '10%',
        }}>
        <Text
          style={{color: '#FFFFFF', fontFamily: 'Outfit-Bold', fontSize: 37}}>
          Let's sign you up.
        </Text>
        <Text
          style={{color: '#FFFFFF', fontFamily: 'Outfit-Light', fontSize: 37}}>
          Welcome.
        </Text>
        <Text
          style={{color: '#FFFFFF', fontFamily: 'Outfit-Light', fontSize: 34}}>
          A new journey starts!
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '8%',
        }}>
        <View style={{marginBottom: '7%'}}>
          <TextInput
            style={{
              width: 313,
              height: 50,
              padding: 13,
              paddingLeft: 25,
              fontSize: 16,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: '#393840',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'Outfit-Regular',
              color: '#CB8D78',
            }}
            placeholder={'Name'}
            placeholderTextColor={'#CB8D78'}
          />
        </View>
        <View style={{marginBottom: '7%'}}>
          <TextInput
            style={{
              width: 313,
              height: 50,
              padding: 13,
              paddingLeft: 25,
              fontSize: 16,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: '#393840',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'Outfit-Regular',
              color: '#CB8D78',
            }}
            placeholder={'Email'}
            placeholderTextColor={'#CB8D78'}
          />
        </View>
        <View>
          <TextInput
            style={{
              width: 313,
              height: 50,
              padding: 13,
              paddingLeft: 25,
              fontSize: 16,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: '#393840',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'Outfit-Regular',
              color: '#CB8D78',
            }}
            placeholder={'Password'}
            placeholderTextColor={'#CB8D78'}
            secureTextEntry={true}
          />
        </View>
      </View>
      <TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            margin: 15,
            marginTop: '43%',
          }}>
          <Text
            style={{
              color: '#CB8D78',
              fontFamily: 'Outfit-Regular',
              fontSize: 18,
            }}>
            Already have an account?{' '}
          </Text>
          <Text
            style={{
              color: '#FFFFFF',
              fontFamily: 'Outfit-Regular',
              fontSize: 18,
            }}>
            Login
          </Text>
        </View>
      </TouchableOpacity>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginBottom: '10%',
        }}>
        <TouchableOpacity>
          <View
            style={{
              backgroundColor: 'white',
              width: 313,
              height: 50,
              padding: 10,
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: '#393840',
                fontFamily: 'Outfit-Bold',
                textAlign: 'center',
                fontSize: 16,
              }}>
              Sign up
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const OTPScreen = ({navigation}) => {
  return (
    <View style={styles.Background}>
      <TouchableOpacity
        onPress={() => navigation.dispatch(StackActions.pop(1))}>
        <View style={{marginLeft: '5%', marginTop: '5%'}}>
          <Ionicons name={'arrow-back-sharp'} size={25} color={'white'} />
        </View>
      </TouchableOpacity>
      <View
        style={{
          margin: '5%',
          marginLeft: '13%',
        }}>
        <Text
          style={{color: '#FFFFFF', fontFamily: 'Outfit-Bold', fontSize: 37}}>
          Enter OTP
        </Text>
        <Text
          style={{color: '#FFFFFF', fontFamily: 'Outfit-Light', fontSize: 20}}>
          A 4-digit code has been sent to
        </Text>
        <Text
          style={{color: '#FFFFFF', fontFamily: 'Outfit-Light', fontSize: 20}}>
          +92-33069420137
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View style={{margin: '2%'}}>
          <TextInput
            style={{
              width: 54,
              height: 47,
              padding: 13,
              textAlign: 'center',
              fontSize: 16,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: '#393840',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'Outfit-Regular',
              color: '#CB8D78',
            }}
            placeholder={'1'}
            placeholderTextColor={'#CB8D78'}
          />
        </View>
        <View style={{margin: '2%'}}>
          <TextInput
            style={{
              width: 54,
              height: 47,
              padding: 13,
              textAlign: 'center',
              fontSize: 16,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: '#393840',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'Outfit-Regular',
              color: '#CB8D78',
            }}
            placeholder={'3'}
            placeholderTextColor={'#CB8D78'}
          />
        </View>
        <View style={{margin: '2%'}}>
          <TextInput
            style={{
              width: 54,
              height: 47,
              padding: 13,
              textAlign: 'center',
              fontSize: 16,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: '#393840',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'Outfit-Regular',
              color: '#CB8D78',
            }}
            placeholder={'3'}
            placeholderTextColor={'#CB8D78'}
          />
        </View>
        <View style={{margin: '2%'}}>
          <TextInput
            style={{
              width: 54,
              height: 47,
              padding: 13,
              textAlign: 'center',
              fontSize: 16,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: '#393840',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'Outfit-Regular',
              color: '#CB8D78',
            }}
            placeholder={'7'}
            placeholderTextColor={'#CB8D78'}
          />
        </View>
      </View>
      <TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            margin: 15,
            marginTop: '5%',
            marginRight: '14%',
          }}>
          <Text
            style={{
              color: '#CB8D78',
              fontFamily: 'Outfit-Regular',
              fontSize: 16,
            }}>
            Resend OTP!
          </Text>
        </View>
      </TouchableOpacity>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: '80%',
        }}>
        <TouchableOpacity>
          <View
            style={{
              backgroundColor: 'white',
              width: 285,
              height: 50,
              padding: 10,
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: '#393840',
                fontFamily: 'Outfit-Bold',
                textAlign: 'center',
                fontSize: 16,
              }}>
              Submit
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="navigatorScreen" component={NavigatorScreen} />
        <Stack.Screen
          name="Welcome Screen"
          component={WelcomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Sign in Screen"
          component={SignInScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Sign up Screen"
          component={SignUpScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OTP Screen"
          component={OTPScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Details" component={Hello} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  Background: {
    backgroundColor: '#101010',
    height: '100%',
  },
  //Welcome Screen
  Headings: {
    color: '#FFFFFF',
    fontFamily: 'Outfit-Bold',
    fontSize: 30,
  },
  SubHeadings: {
    color: '#FFFFFF',
    fontFamily: 'Outfit-Light',
    fontSize: 22,
  },
  WelcomeContainer: {
    flex: 1,
    justifyContent: 'center',
    margin: 12,
    marginTop: '-30%',
  },
});

export default App;
