import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Octicons from 'react-native-vector-icons/Octicons';
import antDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
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
import AntDesign from 'react-native-vector-icons/AntDesign';

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
        title="Choose Payment Method"
        onPress={() => navigation.navigate('Choose Payment Method Screen')}
      />
      <Button
        title="Add Payment Method"
        onPress={() => navigation.navigate('Add Payment Method Screen')}
      />
      <Button title="Settings" onPress={() => navigation.navigate('hello')} />
      <Button
        title="View Retailers Request"
        onPress={() => navigation.navigate('View Request Screen')}
      />
    </View>
  );
};
const WelcomeScreen = ({navigation}) => {
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
        <TouchableOpacity onPress={() => navigation.navigate('Sign in Screen')}>
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
          <TouchableOpacity
            onPress={() => navigation.navigate('Sign up Screen')}>
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
      <TouchableOpacity onPress={() => navigation.navigate('Sign up Screen')}>
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
      <TouchableOpacity onPress={() => navigation.navigate('Sign in Screen')}>
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
        <TouchableOpacity onPress={() => navigation.navigate('OTP Screen')}>
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
const ViewRequestScreen = ({navigation}) => {
  return (
    <ScrollView style={styles.Background}>
      <View>
        <TouchableOpacity
          onPress={() => navigation.dispatch(StackActions.pop(1))}>
          <View
            style={{marginLeft: '5%', marginTop: '5%', flexDirection: 'row'}}>
            <Ionicons name={'arrow-back-sharp'} size={25} color={'white'} />
            <Text
              style={{
                color: '#FFFFFF',
                fontFamily: 'Outfit-Bold',
                fontSize: 24,
                marginLeft: '20%',
              }}>
              View Requests
            </Text>
          </View>
        </TouchableOpacity>
        <View
          style={{
            margin: '5%',
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: '10%',
          }}>
          <Text
            style={{
              color: '#FFFFFF',
              fontFamily: 'Outfit-Regular',
              fontSize: 16,
            }}>
            4 NEW REQUESTS
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {/*View request card 1*/}
          <View
            style={{
              width: 261,
              height: 215,
              padding: 13,
              borderWidth: 1,
              borderColor: '#393840',
              alignItems: 'center',
              borderRadius: 10,
            }}>
            <View style={{flexDirection: 'row', marginLeft: '-42%'}}>
              <View
                style={{
                  backgroundColor: '#E56033',
                  width: 36,
                  height: 36,
                  borderRadius: 36,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  style={{height: 34, width: 34, borderRadius: 34}}
                  source={require('./assets/images/S0mple.jpg')}
                />
              </View>
              <View style={{marginLeft: '5%'}}>
                <Text
                  style={{
                    color: '#FFFFFF',
                    fontFamily: 'Outfit-Bold',
                    fontSize: 13,
                  }}>
                  The King
                </Text>
                <View style={{flexDirection: 'row'}}>
                  <AntDesign name={'staro'} size={12} color={'gold'} />
                  <AntDesign
                    name={'staro'}
                    size={12}
                    style={{marginLeft: '1%'}}
                    color={'gold'}
                  />
                  <AntDesign
                    name={'staro'}
                    size={12}
                    style={{marginLeft: '1%'}}
                    color={'gold'}
                  />
                  <AntDesign
                    name={'staro'}
                    size={12}
                    style={{marginLeft: '1%'}}
                    color={'gold'}
                  />
                  <AntDesign
                    name={'staro'}
                    size={12}
                    style={{marginLeft: '1%'}}
                    color={'gold'}
                  />
                </View>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={{margin: '3.5%', marginLeft: '-20%'}}>
                <Text
                  style={{
                    color: '#FFFFFF',
                    fontFamily: 'Outfit-Regular',
                    fontSize: 10,
                  }}>
                  Shop Name
                </Text>
                <Text
                  style={{
                    color: '#CB8D78',
                    fontFamily: 'Outfit-Regular',
                    fontSize: 10,
                  }}>
                  Sheesh Shop
                </Text>
              </View>
              <View style={{margin: '3.5%', marginLeft: '15%'}}>
                <Text
                  style={{
                    color: '#FFFFFF',
                    fontFamily: 'Outfit-Regular',
                    fontSize: 10,
                  }}>
                  Shop Type
                </Text>
                <Text
                  style={{
                    color: '#CB8D78',
                    fontFamily: 'Outfit-Regular',
                    fontSize: 10,
                  }}>
                  Cash and carry
                </Text>
              </View>
            </View>
            <View
              style={{flexDirection: 'row', margin: '5%', marginLeft: '-26%'}}>
              <Octicons name={'location'} size={20} color={'#FFFFFF'} />

              <View style={{marginLeft: '3.5%'}}>
                <Text
                  style={{
                    color: '#FFFFFF',
                    fontFamily: 'Outfit-Regular',
                    fontSize: 12,
                  }}>
                  Block 6 Gulberg,Lahore
                </Text>
                <Text
                  style={{
                    color: '#CB8D78',
                    fontFamily: 'Outfit-Regular',
                    fontSize: 10,
                  }}>
                  #457, 2nd Floor
                </Text>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity>
                <View
                  style={{
                    width: 111,
                    height: 50,
                    padding: 13,
                    margin: '2%',
                    textAlign: 'center',
                    borderRadius: 10,
                    borderWidth: 1,
                    borderColor: '#393840',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontFamily: 'Outfit-Regular',
                      color: '#CB8D78',
                    }}>
                    Decline
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    width: 111,
                    height: 50,
                    padding: 13,
                    margin: '2%',
                    textAlign: 'center',
                    borderRadius: 10,
                    borderWidth: 1,
                    borderColor: '#393840',
                    backgroundColor: '#E56033',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontFamily: 'Outfit-Regular',
                      color: '#FFFFFF',
                    }}>
                    Accept
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          {/*View request card 2*/}
          <View
            style={{
              width: 261,
              height: 215,
              padding: 13,
              borderWidth: 1,
              borderColor: '#393840',
              alignItems: 'center',
              borderRadius: 10,
              marginTop: '4%',
            }}>
            <View style={{flexDirection: 'row', marginLeft: '-42%'}}>
              <View
                style={{
                  backgroundColor: '#E56033',
                  width: 36,
                  height: 36,
                  borderRadius: 36,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  style={{height: 34, width: 34, borderRadius: 34}}
                  source={require('./assets/images/S0mple.jpg')}
                />
              </View>
              <View style={{marginLeft: '5%'}}>
                <Text
                  style={{
                    color: '#FFFFFF',
                    fontFamily: 'Outfit-Bold',
                    fontSize: 13,
                  }}>
                  The King
                </Text>
                <View style={{flexDirection: 'row'}}>
                  <AntDesign name={'staro'} size={12} color={'gold'} />
                  <AntDesign
                    name={'staro'}
                    size={12}
                    style={{marginLeft: '1%'}}
                    color={'gold'}
                  />
                  <AntDesign
                    name={'staro'}
                    size={12}
                    style={{marginLeft: '1%'}}
                    color={'gold'}
                  />
                  <AntDesign
                    name={'staro'}
                    size={12}
                    style={{marginLeft: '1%'}}
                    color={'gold'}
                  />
                  <AntDesign
                    name={'staro'}
                    size={12}
                    style={{marginLeft: '1%'}}
                    color={'gold'}
                  />
                </View>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={{margin: '3.5%', marginLeft: '-20%'}}>
                <Text
                  style={{
                    color: '#FFFFFF',
                    fontFamily: 'Outfit-Regular',
                    fontSize: 10,
                  }}>
                  Shop Name
                </Text>
                <Text
                  style={{
                    color: '#CB8D78',
                    fontFamily: 'Outfit-Regular',
                    fontSize: 10,
                  }}>
                  Sheesh Shop
                </Text>
              </View>
              <View style={{margin: '3.5%', marginLeft: '15%'}}>
                <Text
                  style={{
                    color: '#FFFFFF',
                    fontFamily: 'Outfit-Regular',
                    fontSize: 10,
                  }}>
                  Shop Type
                </Text>
                <Text
                  style={{
                    color: '#CB8D78',
                    fontFamily: 'Outfit-Regular',
                    fontSize: 10,
                  }}>
                  Cash and carry
                </Text>
              </View>
            </View>
            <View
              style={{flexDirection: 'row', margin: '5%', marginLeft: '-26%'}}>
              <Octicons name={'location'} size={20} color={'#FFFFFF'} />

              <View style={{marginLeft: '3.5%'}}>
                <Text
                  style={{
                    color: '#FFFFFF',
                    fontFamily: 'Outfit-Regular',
                    fontSize: 12,
                  }}>
                  Block 6 Gulberg,Lahore
                </Text>
                <Text
                  style={{
                    color: '#CB8D78',
                    fontFamily: 'Outfit-Regular',
                    fontSize: 10,
                  }}>
                  #457, 2nd Floor
                </Text>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity>
                <View
                  style={{
                    width: 111,
                    height: 50,
                    padding: 13,
                    margin: '2%',
                    textAlign: 'center',
                    borderRadius: 10,
                    borderWidth: 1,
                    borderColor: '#393840',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontFamily: 'Outfit-Regular',
                      color: '#CB8D78',
                    }}>
                    Decline
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    width: 111,
                    height: 50,
                    padding: 13,
                    margin: '2%',
                    textAlign: 'center',
                    borderRadius: 10,
                    borderWidth: 1,
                    borderColor: '#393840',
                    backgroundColor: '#E56033',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontFamily: 'Outfit-Regular',
                      color: '#FFFFFF',
                    }}>
                    Accept
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          {/*View request card 3*/}
          <View
            style={{
              width: 261,
              height: 215,
              padding: 13,
              borderWidth: 1,
              borderColor: '#393840',
              alignItems: 'center',
              borderRadius: 10,
              marginTop: '4%',
            }}>
            <View style={{flexDirection: 'row', marginLeft: '-42%'}}>
              <View
                style={{
                  backgroundColor: '#E56033',
                  width: 36,
                  height: 36,
                  borderRadius: 36,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  style={{height: 34, width: 34, borderRadius: 34}}
                  source={require('./assets/images/S0mple.jpg')}
                />
              </View>
              <View style={{marginLeft: '5%'}}>
                <Text
                  style={{
                    color: '#FFFFFF',
                    fontFamily: 'Outfit-Bold',
                    fontSize: 13,
                  }}>
                  The King
                </Text>
                <View style={{flexDirection: 'row'}}>
                  <AntDesign name={'staro'} size={12} color={'gold'} />
                  <AntDesign
                    name={'staro'}
                    size={12}
                    style={{marginLeft: '1%'}}
                    color={'gold'}
                  />
                  <AntDesign
                    name={'staro'}
                    size={12}
                    style={{marginLeft: '1%'}}
                    color={'gold'}
                  />
                  <AntDesign
                    name={'staro'}
                    size={12}
                    style={{marginLeft: '1%'}}
                    color={'gold'}
                  />
                  <AntDesign
                    name={'staro'}
                    size={12}
                    style={{marginLeft: '1%'}}
                    color={'gold'}
                  />
                </View>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={{margin: '3.5%', marginLeft: '-20%'}}>
                <Text
                  style={{
                    color: '#FFFFFF',
                    fontFamily: 'Outfit-Regular',
                    fontSize: 10,
                  }}>
                  Shop Name
                </Text>
                <Text
                  style={{
                    color: '#CB8D78',
                    fontFamily: 'Outfit-Regular',
                    fontSize: 10,
                  }}>
                  Sheesh Shop
                </Text>
              </View>
              <View style={{margin: '3.5%', marginLeft: '15%'}}>
                <Text
                  style={{
                    color: '#FFFFFF',
                    fontFamily: 'Outfit-Regular',
                    fontSize: 10,
                  }}>
                  Shop Type
                </Text>
                <Text
                  style={{
                    color: '#CB8D78',
                    fontFamily: 'Outfit-Regular',
                    fontSize: 10,
                  }}>
                  Cash and carry
                </Text>
              </View>
            </View>
            <View
              style={{flexDirection: 'row', margin: '5%', marginLeft: '-26%'}}>
              <Octicons name={'location'} size={20} color={'#FFFFFF'} />

              <View style={{marginLeft: '3.5%'}}>
                <Text
                  style={{
                    color: '#FFFFFF',
                    fontFamily: 'Outfit-Regular',
                    fontSize: 12,
                  }}>
                  Block 6 Gulberg,Lahore
                </Text>
                <Text
                  style={{
                    color: '#CB8D78',
                    fontFamily: 'Outfit-Regular',
                    fontSize: 10,
                  }}>
                  #457, 2nd Floor
                </Text>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity>
                <View
                  style={{
                    width: 111,
                    height: 50,
                    padding: 13,
                    margin: '2%',
                    textAlign: 'center',
                    borderRadius: 10,
                    borderWidth: 1,
                    borderColor: '#393840',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontFamily: 'Outfit-Regular',
                      color: '#CB8D78',
                    }}>
                    Decline
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    width: 111,
                    height: 50,
                    padding: 13,
                    margin: '2%',
                    textAlign: 'center',
                    borderRadius: 10,
                    borderWidth: 1,
                    borderColor: '#393840',
                    backgroundColor: '#E56033',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontFamily: 'Outfit-Regular',
                      color: '#FFFFFF',
                    }}>
                    Accept
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          {/*View request card 4*/}
          <View
            style={{
              width: 261,
              height: 215,
              padding: 13,
              borderWidth: 1,
              borderColor: '#393840',
              alignItems: 'center',
              borderRadius: 10,
              marginTop: '4%',
            }}>
            <View style={{flexDirection: 'row', marginLeft: '-42%'}}>
              <View
                style={{
                  backgroundColor: '#E56033',
                  width: 36,
                  height: 36,
                  borderRadius: 36,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  style={{height: 34, width: 34, borderRadius: 34}}
                  source={require('./assets/images/S0mple.jpg')}
                />
              </View>
              <View style={{marginLeft: '5%'}}>
                <Text
                  style={{
                    color: '#FFFFFF',
                    fontFamily: 'Outfit-Bold',
                    fontSize: 13,
                  }}>
                  The King
                </Text>
                <View style={{flexDirection: 'row'}}>
                  <AntDesign name={'staro'} size={12} color={'gold'} />
                  <AntDesign
                    name={'staro'}
                    size={12}
                    style={{marginLeft: '1%'}}
                    color={'gold'}
                  />
                  <AntDesign
                    name={'staro'}
                    size={12}
                    style={{marginLeft: '1%'}}
                    color={'gold'}
                  />
                  <AntDesign
                    name={'staro'}
                    size={12}
                    style={{marginLeft: '1%'}}
                    color={'gold'}
                  />
                  <AntDesign
                    name={'staro'}
                    size={12}
                    style={{marginLeft: '1%'}}
                    color={'gold'}
                  />
                </View>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={{margin: '3.5%', marginLeft: '-20%'}}>
                <Text
                  style={{
                    color: '#FFFFFF',
                    fontFamily: 'Outfit-Regular',
                    fontSize: 10,
                  }}>
                  Shop Name
                </Text>
                <Text
                  style={{
                    color: '#CB8D78',
                    fontFamily: 'Outfit-Regular',
                    fontSize: 10,
                  }}>
                  Sheesh Shop
                </Text>
              </View>
              <View style={{margin: '3.5%', marginLeft: '15%'}}>
                <Text
                  style={{
                    color: '#FFFFFF',
                    fontFamily: 'Outfit-Regular',
                    fontSize: 10,
                  }}>
                  Shop Type
                </Text>
                <Text
                  style={{
                    color: '#CB8D78',
                    fontFamily: 'Outfit-Regular',
                    fontSize: 10,
                  }}>
                  Cash and carry
                </Text>
              </View>
            </View>
            <View
              style={{flexDirection: 'row', margin: '5%', marginLeft: '-26%'}}>
              <Octicons name={'location'} size={20} color={'#FFFFFF'} />

              <View style={{marginLeft: '3.5%'}}>
                <Text
                  style={{
                    color: '#FFFFFF',
                    fontFamily: 'Outfit-Regular',
                    fontSize: 12,
                  }}>
                  Block 6 Gulberg,Lahore
                </Text>
                <Text
                  style={{
                    color: '#CB8D78',
                    fontFamily: 'Outfit-Regular',
                    fontSize: 10,
                  }}>
                  #457, 2nd Floor
                </Text>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity>
                <View
                  style={{
                    width: 111,
                    height: 50,
                    padding: 13,
                    margin: '2%',
                    textAlign: 'center',
                    borderRadius: 10,
                    borderWidth: 1,
                    borderColor: '#393840',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontFamily: 'Outfit-Regular',
                      color: '#CB8D78',
                    }}>
                    Decline
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    width: 111,
                    height: 50,
                    padding: 13,
                    margin: '2%',
                    textAlign: 'center',
                    borderRadius: 10,
                    borderWidth: 1,
                    borderColor: '#393840',
                    backgroundColor: '#E56033',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontFamily: 'Outfit-Regular',
                      color: '#FFFFFF',
                    }}>
                    Accept
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
const ChoosePaymentScreen = ({navigation}) => {
  return (
    <View style={styles.Background}>
      <TouchableOpacity
        onPress={() => navigation.dispatch(StackActions.pop(1))}>
        <View style={{marginLeft: '5%', marginTop: '5%', flexDirection: 'row'}}>
          <Ionicons name={'arrow-back-sharp'} size={25} color={'white'} />
          <Text
            style={{
              color: '#FFFFFF',
              fontFamily: 'Outfit-SemiBold',
              fontSize: 24,
              marginLeft: '15%',
              marginTop: '-1%',
            }}>
            Choose Payment
          </Text>
        </View>
      </TouchableOpacity>
      <View
        style={{
          margin: '5%',
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: '0%',
        }}>
        <Text
          style={{
            color: '#FFFFFF',
            fontFamily: 'Outfit-Regular',
            fontSize: 13,
          }}>
          List of all your credit cards
        </Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <View
          style={{
            height: 161,
            width: 261,
            borderRadius: 20,
            backgroundColor: '#FFFFFF',
            alignItems: 'center',
            margin: '7%',
          }}>
          <Image
            source={require('./assets/images/paymentPicture.png')}
            style={{width: 227, height: 161}}
          />
        </View>
        <View
          style={{
            height: 161,
            width: 261,
            borderRadius: 27,
            backgroundColor: '#2F2121',
            alignItems: 'center',
            margin: '7%',
          }}>
          <Image
            source={require('./assets/images/Mastercard.png')}
            style={{height: 25, width: 45, marginLeft: '75%', marginTop: '10%'}}
          />
          <View
            style={{
              flexDirection: 'row',
              marginTop: '10%',
              marginLeft: '7.5%',
            }}>
            <View>
              <Text
                style={{
                  color: '#FFFFFF',
                  fontFamily: 'Outfit-Regular',
                  fontSize: 13,
                }}>
                3254-6754-0001-5654
              </Text>
            </View>
            <View style={{marginLeft: '20%'}}>
              <Text
                style={{
                  color: '#FFFFFF',
                  fontFamily: 'Outfit-Regular',
                  fontSize: 13,
                  marginLeft: '10%',
                }}>
                12/24
              </Text>
              <Text
                style={{
                  color: '#E56033',
                  fontFamily: 'Outfit-Regular',
                  fontSize: 10,
                }}>
                Valid Thru
              </Text>
            </View>
          </View>
          <View
            style={{
              height: 40,
              width: 262,
              backgroundColor: '#E5B8EC',
              borderBottomRightRadius: 27,
              borderBottomLeftRadius: 27,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '4.3%',
              flexDirection: 'row',
            }}>
            <Text
              style={{
                color: '#FFFFFF',
                fontFamily: 'Outfit-Regular',
                fontSize: 16,
                marginRight: '50%',
              }}>
              John Deaf
            </Text>
            <TouchableOpacity>
              <Octicons name={'pencil'} size={18} color={'black'} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              height: 8,
              width: 8,
              borderRadius: 8,
              backgroundColor: '#E56033',
              marginRight: '3%',
            }}
          />
          <View
            style={{
              height: 8,
              width: 8,
              borderRadius: 8,
              backgroundColor: '#9F9494',
              marginRight: '3%',
            }}
          />
          <View
            style={{
              height: 8,
              width: 8,
              borderRadius: 8,
              backgroundColor: '#9F9494',
              marginRight: '3%',
            }}
          />
          <View
            style={{
              height: 8,
              width: 8,
              borderRadius: 8,
              backgroundColor: '#9F9494',
            }}
          />
        </View>
        <TouchableOpacity>
          <View
            style={{
              width: 261,
              height: 50,
              marginTop: '25%',
              borderRadius: 51,
              borderWidth: 1,
              borderColor: '#E56033',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontFamily: 'Outfit-Regular',
                color: '#FFFFFF',
                fontSize: 16,
              }}>
              Select
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={{flexDirection: 'row', margin: '7%'}}>
            <AntDesign
              name={'pluscircleo'}
              size={10}
              color={'#FFFFFF'}
              style={{marginTop: '2%'}}
            />
            <Text
              style={{
                fontFamily: 'Outfit-Regular',
                color: '#FFFFFF',
                fontSize: 13,
                marginLeft: ' 5%',
              }}>
              Add a new payment method
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const AddPaymentScreen = ({navigation}) => {
  return (
    <View style={styles.Background}>
      <TouchableOpacity
        onPress={() => navigation.dispatch(StackActions.pop(1))}>
        <View style={{marginLeft: '5%', marginTop: '5%', flexDirection: 'row'}}>
          <Ionicons name={'arrow-back-sharp'} size={25} color={'white'} />
          <Text
            style={{
              color: '#FFFFFF',
              fontFamily: 'Outfit-SemiBold',
              fontSize: 24,
              marginLeft: '10%',
              marginTop: '-1%',
            }}>
            Add Payment Method
          </Text>
        </View>
      </TouchableOpacity>
      <View
        style={{
          margin: '5%',
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: '0%',
        }}>
        <Text
          style={{
            color: '#FFFFFF',
            fontFamily: 'Outfit-Regular',
            fontSize: 13,
          }}>
          Provide your credit card information
        </Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <View
          style={{
            height: 161,
            width: 261,
            borderRadius: 20,
            backgroundColor: '#FFFFFF',
            alignItems: 'center',
            margin: '7%',
          }}>
          <Image
            source={require('./assets/images/paymentPicture.png')}
            style={{width: 227, height: 161}}
          />
        </View>
        <View
          style={{
            width: '67%',
            height: '17%',
            marginTop: '10%',
          }}>
          <Text
            style={{
              color: '#FFFFFF',
              fontFamily: 'Outfit-SemiBold',
              fontSize: 16,
            }}>
            Card number
          </Text>
          <View
            style={{
              height: 41,
              width: 261,
              borderWidth: 1,
              borderColor: '#393840',
              borderRadius: 67,
              marginTop: '3%',
              justifyContent: 'center',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={require('./assets/images/Mastercard.png')}
                style={{
                  height: 25,
                  width: 45,
                  marginLeft: '4%',
                }}
              />
              <TextInput
                style={{
                  color: '#FFFFFF',
                  fontFamily: 'Outfit-Regular',
                  fontSize: 13,
                  marginLeft: '4.5%',
                  marginRight: '1%',
                  width: '65%',
                }}
                placeholder={'3254-6754-0001-5654'}
                placeholderTextColor={'#FFFFFF'}
                inputMode={'numeric'}
                maxLength={16}
              />
              <Ionicons name={'ios-keypad-outline'} size={12} color={'white'} />
            </View>
          </View>
        </View>
        <View
          style={{
            width: '67%',
            height: '15%',
          }}>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                color: '#FFFFFF',
                fontFamily: 'Outfit-SemiBold',
                fontSize: 16,
                marginRight: '38%',
              }}>
              Expiration date
            </Text>
            <Text
              style={{
                color: '#FFFFFF',
                fontFamily: 'Outfit-SemiBold',
                fontSize: 16,
              }}>
              CVV
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: '3%',
            }}>
            <View
              style={{
                height: 41,
                width: 65,
                borderWidth: 1,
                borderColor: '#393840',
                borderRadius: 67,
                marginTop: '3%',
                justifyContent: 'center',
                marginRight: '4%',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <TextInput
                  style={{
                    color: '#FFFFFF',
                    fontFamily: 'Outfit-Regular',
                    fontSize: 13,
                    marginLeft: '4%',
                  }}
                  placeholder={'05'}
                  placeholderTextColor={'#FFFFFF'}
                  inputMode={'numeric'}
                  maxLength={2}
                />
                <View style={{marginLeft: '8%'}}>
                  <SimpleLineIcons name={'arrow-up'} size={6} color={'white'} />
                  <SimpleLineIcons
                    name={'arrow-down'}
                    size={6}
                    color={'white'}
                    style={{marginTop: '-10%'}}
                  />
                </View>
              </View>
            </View>
            <Text
              style={{
                color: '#FFFFFF',
                fontFamily: 'Outfit-Regular',
                fontSize: 16,
                marginTop: '7%',
                marginRight: '4%',
              }}>
              /
            </Text>
            <View
              style={{
                height: 41,
                width: 86,
                borderWidth: 1,
                borderColor: '#393840',
                borderRadius: 67,
                marginTop: '3%',
                justifyContent: 'center',
                marginRight: '7%',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <TextInput
                  style={{
                    color: '#FFFFFF',
                    fontFamily: 'Outfit-Regular',
                    fontSize: 13,
                    marginLeft: '4%',
                  }}
                  placeholder={'2027'}
                  placeholderTextColor={'#FFFFFF'}
                  inputMode={'numeric'}
                  maxLength={4}
                />
                <View style={{marginLeft: '8%'}}>
                  <SimpleLineIcons name={'arrow-up'} size={6} color={'white'} />
                  <SimpleLineIcons
                    name={'arrow-down'}
                    size={6}
                    color={'white'}
                    style={{marginTop: '-10%'}}
                  />
                </View>
              </View>
            </View>
            <View
              style={{
                height: 41,
                width: 65,
                borderWidth: 1,
                borderColor: '#393840',
                borderRadius: 67,
                marginTop: '3%',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <TextInput
                  style={{
                    color: '#FFFFFF',
                    fontFamily: 'Outfit-Regular',
                    fontSize: 13,
                    marginLeft: '4%',
                  }}
                  placeholder={'843'}
                  placeholderTextColor={'#FFFFFF'}
                  inputMode={'numeric'}
                  maxLength={3}
                />
                <TouchableOpacity>
                  <Ionicons
                    name={'ios-keypad-outline'}
                    size={12}
                    color={'white'}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <TouchableOpacity>
          <View
            style={{
              width: 261,
              height: 50,
              marginTop: '20%',
              borderRadius: 51,
              borderWidth: 1,
              borderColor: '#E56033',
              backgroundColor: '#E56033',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontFamily: 'Outfit-Regular',
                color: '#FFFFFF',
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
        {/*<Stack.Screen*/}
        {/*  name="OTP Screen"*/}
        {/*  component={OTPScreen}*/}
        {/*  options={{headerShown: false}}*/}
        {/*/>*/}
        {/*<Stack.Screen*/}
        {/*  name="OTP Screen"*/}
        {/*  component={OTPScreen}*/}
        {/*  options={{headerShown: false}}*/}
        {/*/>*/}
        {/*<Stack.Screen*/}
        {/*  name="OTP Screen"*/}
        {/*  component={OTPScreen}*/}
        {/*  options={{headerShown: false}}*/}
        {/*/>*/}
        {/*<Stack.Screen*/}
        {/*  name="OTP Screen"*/}
        {/*  component={OTPScreen}*/}
        {/*  options={{headerShown: false}}*/}
        {/*/>*/}
        <Stack.Screen
          name="Choose Payment Method Screen"
          component={ChoosePaymentScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Add Payment Method Screen"
          component={AddPaymentScreen}
          options={{headerShown: false}}
        />
        {/*<Stack.Screen*/}
        {/*  name="OTP Screen"*/}
        {/*  component={OTPScreen}*/}
        {/*  options={{headerShown: false}}*/}
        {/*/>*/}
        <Stack.Screen
          name="View Request Screen"
          component={ViewRequestScreen}
          options={{headerShown: false}}
        />
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
