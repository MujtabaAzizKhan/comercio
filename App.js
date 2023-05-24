import 'react-native-gesture-handler';
import NumericInput from 'react-native-numeric-input';
import DropDownPicker from 'react-native-dropdown-picker';
import React, { useState, useEffect } from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
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

const NavigatorScreen = ({ navigation }) => {
  return (
    <View>
      <ScrollView>
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
        <Button title="Cart" onPress={() => navigation.navigate('Cart Screen')} />
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
        <Button
          title={'Add Products (manually)'}
          onPress={() => navigation.navigate('Add Products (manually)')}
        />
        <Button
          title={'Add To History Manually'}
          onPress={() => navigation.navigate('Add To History Manually')}
        />

        <Button
          title={'Selling History'}
          onPress={() => navigation.navigate('Selling History')}
        />

        <Button
          title={'Shopping History'}
          onPress={() => navigation.navigate('Shopping History')}
        />

        <Button
          title={'Add Products'}
          onPress={() => navigation.navigate('Add Products')}
        />

        <Button
          title={'Add To History'}
          onPress={() => navigation.navigate('Add To History')}
        />

        <Button
          title={'Add Products (Barcode)'}
          onPress={() => navigation.navigate('Add Products (Barcode)')}
        />

        <Button
          title={'Add To History (Image)'}
          onPress={() => navigation.navigate('Add To History (Image)')}
        />

      </ScrollView>

    </View>
  );
};
const WelcomeScreen = ({ navigation }) => {
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
const SignInScreen = ({ navigation }) => {
  return (
    <View style={styles.Background}>
      <TouchableOpacity
        onPress={() => navigation.dispatch(StackActions.pop(1))}>
        <View style={{ marginLeft: '5%', marginTop: '5%' }}>
          <Ionicons name={'arrow-back-sharp'} size={25} color={'white'} />
        </View>
      </TouchableOpacity>
      <View
        style={{
          margin: '5%',
          marginLeft: '10%',
        }}>
        <Text
          style={{ color: '#FFFFFF', fontFamily: 'Outfit-Bold', fontSize: 37 }}>
          Let's sign you in.
        </Text>
        <Text
          style={{ color: '#FFFFFF', fontFamily: 'Outfit-Light', fontSize: 37 }}>
          Welcome back. You've been missed!
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '12%',
        }}>
        <View style={{ marginBottom: '10%' }}>
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
const SignUpScreen = ({ navigation }) => {
  return (
    <View style={styles.Background}>
      <TouchableOpacity
        onPress={() => navigation.dispatch(StackActions.pop(1))}>
        <View style={{ marginLeft: '5%', marginTop: '5%' }}>
          <Ionicons name={'arrow-back-sharp'} size={25} color={'white'} />
        </View>
      </TouchableOpacity>
      <View
        style={{
          margin: '5%',
          marginLeft: '10%',
        }}>
        <Text
          style={{ color: '#FFFFFF', fontFamily: 'Outfit-Bold', fontSize: 37 }}>
          Let's sign you up.
        </Text>
        <Text
          style={{ color: '#FFFFFF', fontFamily: 'Outfit-Light', fontSize: 37 }}>
          Welcome.
        </Text>
        <Text
          style={{ color: '#FFFFFF', fontFamily: 'Outfit-Light', fontSize: 34 }}>
          A new journey starts!
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '8%',
        }}>
        <View style={{ marginBottom: '7%' }}>
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
        <View style={{ marginBottom: '7%' }}>
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
const OTPScreen = ({ navigation }) => {
  return (
    <View style={styles.Background}>
      <TouchableOpacity
        onPress={() => navigation.dispatch(StackActions.pop(1))}>
        <View style={{ marginLeft: '5%', marginTop: '5%' }}>
          <Ionicons name={'arrow-back-sharp'} size={25} color={'white'} />
        </View>
      </TouchableOpacity>
      <View
        style={{
          margin: '5%',
          marginLeft: '13%',
        }}>
        <Text
          style={{ color: '#FFFFFF', fontFamily: 'Outfit-Bold', fontSize: 37 }}>
          Enter OTP
        </Text>
        <Text
          style={{ color: '#FFFFFF', fontFamily: 'Outfit-Light', fontSize: 20 }}>
          A 4-digit code has been sent to
        </Text>
        <Text
          style={{ color: '#FFFFFF', fontFamily: 'Outfit-Light', fontSize: 20 }}>
          +92-33069420137
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View style={{ margin: '2%' }}>
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
        <View style={{ margin: '2%' }}>
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
        <View style={{ margin: '2%' }}>
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
        <View style={{ margin: '2%' }}>
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
const ViewRequestScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.Background}>
      <View>
        <TouchableOpacity
          onPress={() => navigation.dispatch(StackActions.pop(1))}>
          <View
            style={{ marginLeft: '5%', marginTop: '5%', flexDirection: 'row' }}>
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
            <View style={{ flexDirection: 'row', marginLeft: '-42%' }}>
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
                  style={{ height: 34, width: 34, borderRadius: 34 }}
                  source={require('./assets/images/S0mple.jpg')}
                />
              </View>
              <View style={{ marginLeft: '5%' }}>
                <Text
                  style={{
                    color: '#FFFFFF',
                    fontFamily: 'Outfit-Bold',
                    fontSize: 13,
                  }}>
                  The King
                </Text>
                <View style={{ flexDirection: 'row' }}>
                  <AntDesign name={'staro'} size={12} color={'gold'} />
                  <AntDesign
                    name={'staro'}
                    size={12}
                    style={{ marginLeft: '1%' }}
                    color={'gold'}
                  />
                  <AntDesign
                    name={'staro'}
                    size={12}
                    style={{ marginLeft: '1%' }}
                    color={'gold'}
                  />
                  <AntDesign
                    name={'staro'}
                    size={12}
                    style={{ marginLeft: '1%' }}
                    color={'gold'}
                  />
                  <AntDesign
                    name={'staro'}
                    size={12}
                    style={{ marginLeft: '1%' }}
                    color={'gold'}
                  />
                </View>
              </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ margin: '3.5%', marginLeft: '-20%' }}>
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
              <View style={{ margin: '3.5%', marginLeft: '15%' }}>
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
              style={{ flexDirection: 'row', margin: '5%', marginLeft: '-26%' }}>
              <Octicons name={'location'} size={20} color={'#FFFFFF'} />

              <View style={{ marginLeft: '3.5%' }}>
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
            <View style={{ flexDirection: 'row' }}>
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
            <View style={{ flexDirection: 'row', marginLeft: '-42%' }}>
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
                  style={{ height: 34, width: 34, borderRadius: 34 }}
                  source={require('./assets/images/S0mple.jpg')}
                />
              </View>
              <View style={{ marginLeft: '5%' }}>
                <Text
                  style={{
                    color: '#FFFFFF',
                    fontFamily: 'Outfit-Bold',
                    fontSize: 13,
                  }}>
                  The King
                </Text>
                <View style={{ flexDirection: 'row' }}>
                  <AntDesign name={'staro'} size={12} color={'gold'} />
                  <AntDesign
                    name={'staro'}
                    size={12}
                    style={{ marginLeft: '1%' }}
                    color={'gold'}
                  />
                  <AntDesign
                    name={'staro'}
                    size={12}
                    style={{ marginLeft: '1%' }}
                    color={'gold'}
                  />
                  <AntDesign
                    name={'staro'}
                    size={12}
                    style={{ marginLeft: '1%' }}
                    color={'gold'}
                  />
                  <AntDesign
                    name={'staro'}
                    size={12}
                    style={{ marginLeft: '1%' }}
                    color={'gold'}
                  />
                </View>
              </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ margin: '3.5%', marginLeft: '-20%' }}>
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
              <View style={{ margin: '3.5%', marginLeft: '15%' }}>
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
              style={{ flexDirection: 'row', margin: '5%', marginLeft: '-26%' }}>
              <Octicons name={'location'} size={20} color={'#FFFFFF'} />

              <View style={{ marginLeft: '3.5%' }}>
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
            <View style={{ flexDirection: 'row' }}>
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
            <View style={{ flexDirection: 'row', marginLeft: '-42%' }}>
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
                  style={{ height: 34, width: 34, borderRadius: 34 }}
                  source={require('./assets/images/S0mple.jpg')}
                />
              </View>
              <View style={{ marginLeft: '5%' }}>
                <Text
                  style={{
                    color: '#FFFFFF',
                    fontFamily: 'Outfit-Bold',
                    fontSize: 13,
                  }}>
                  The King
                </Text>
                <View style={{ flexDirection: 'row' }}>
                  <AntDesign name={'staro'} size={12} color={'gold'} />
                  <AntDesign
                    name={'staro'}
                    size={12}
                    style={{ marginLeft: '1%' }}
                    color={'gold'}
                  />
                  <AntDesign
                    name={'staro'}
                    size={12}
                    style={{ marginLeft: '1%' }}
                    color={'gold'}
                  />
                  <AntDesign
                    name={'staro'}
                    size={12}
                    style={{ marginLeft: '1%' }}
                    color={'gold'}
                  />
                  <AntDesign
                    name={'staro'}
                    size={12}
                    style={{ marginLeft: '1%' }}
                    color={'gold'}
                  />
                </View>
              </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ margin: '3.5%', marginLeft: '-20%' }}>
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
              <View style={{ margin: '3.5%', marginLeft: '15%' }}>
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
              style={{ flexDirection: 'row', margin: '5%', marginLeft: '-26%' }}>
              <Octicons name={'location'} size={20} color={'#FFFFFF'} />

              <View style={{ marginLeft: '3.5%' }}>
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
            <View style={{ flexDirection: 'row' }}>
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
            <View style={{ flexDirection: 'row', marginLeft: '-42%' }}>
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
                  style={{ height: 34, width: 34, borderRadius: 34 }}
                  source={require('./assets/images/S0mple.jpg')}
                />
              </View>
              <View style={{ marginLeft: '5%' }}>
                <Text
                  style={{
                    color: '#FFFFFF',
                    fontFamily: 'Outfit-Bold',
                    fontSize: 13,
                  }}>
                  The King
                </Text>
                <View style={{ flexDirection: 'row' }}>
                  <AntDesign name={'staro'} size={12} color={'gold'} />
                  <AntDesign
                    name={'staro'}
                    size={12}
                    style={{ marginLeft: '1%' }}
                    color={'gold'}
                  />
                  <AntDesign
                    name={'staro'}
                    size={12}
                    style={{ marginLeft: '1%' }}
                    color={'gold'}
                  />
                  <AntDesign
                    name={'staro'}
                    size={12}
                    style={{ marginLeft: '1%' }}
                    color={'gold'}
                  />
                  <AntDesign
                    name={'staro'}
                    size={12}
                    style={{ marginLeft: '1%' }}
                    color={'gold'}
                  />
                </View>
              </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ margin: '3.5%', marginLeft: '-20%' }}>
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
              <View style={{ margin: '3.5%', marginLeft: '15%' }}>
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
              style={{ flexDirection: 'row', margin: '5%', marginLeft: '-26%' }}>
              <Octicons name={'location'} size={20} color={'#FFFFFF'} />

              <View style={{ marginLeft: '3.5%' }}>
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
            <View style={{ flexDirection: 'row' }}>
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
const ChoosePaymentScreen = ({ navigation }) => {
  return (
    <View style={styles.Background}>
      <TouchableOpacity
        onPress={() => navigation.dispatch(StackActions.pop(1))}>
        <View style={{ marginLeft: '5%', marginTop: '5%', flexDirection: 'row' }}>
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
      <View style={{ alignItems: 'center' }}>
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
            style={{ width: 227, height: 161 }}
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
            style={{ height: 25, width: 45, marginLeft: '75%', marginTop: '10%' }}
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
            <View style={{ marginLeft: '20%' }}>
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
        <View style={{ flexDirection: 'row' }}>
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
          <View style={{ flexDirection: 'row', margin: '7%' }}>
            <AntDesign
              name={'pluscircleo'}
              size={10}
              color={'#FFFFFF'}
              style={{ marginTop: '2%' }}
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

const AddPaymentScreen = ({ navigation }) => {
  return (
    <View style={styles.Background}>
      <TouchableOpacity
        onPress={() => navigation.dispatch(StackActions.pop(1))}>
        <View style={{ marginLeft: '5%', marginTop: '5%', flexDirection: 'row' }}>
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
      <View style={{ alignItems: 'center' }}>
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
            style={{ width: 227, height: 161 }}
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
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
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
          <View style={{ flexDirection: 'row' }}>
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
                <View style={{ marginLeft: '8%' }}>
                  <SimpleLineIcons name={'arrow-up'} size={6} color={'white'} />
                  <SimpleLineIcons
                    name={'arrow-down'}
                    size={6}
                    color={'white'}
                    style={{ marginTop: '-10%' }}
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
                <View style={{ marginLeft: '8%' }}>
                  <SimpleLineIcons name={'arrow-up'} size={6} color={'white'} />
                  <SimpleLineIcons
                    name={'arrow-down'}
                    size={6}
                    color={'white'}
                    style={{ marginTop: '-10%' }}
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
const CartScreen = ({ navigation }) => {
  return (
    <View style={styles.Background}>
      <View style={{ marginLeft: '5%', marginTop: '5%', flexDirection: 'row' }}>
        <TouchableOpacity
          onPress={() => navigation.dispatch(StackActions.pop(1))}>
          <Ionicons name={'arrow-back-sharp'} size={25} color={'white'} />
        </TouchableOpacity>
        <Text
          style={{
            color: '#FFFFFF',
            fontFamily: 'Outfit-SemiBold',
            fontSize: 24,
            marginLeft: '31.5%',
            marginTop: '-1%',
          }}>
          CART
        </Text>
        <Image
          source={require('./assets/images/ShoppingCart.png')}
          style={{ height: 25, width: 25, marginLeft: '1%', marginTop: '0.25%' }}
        />
      </View>

      <View
        style={{
          margin: '5%',
          marginTop: '2%',
          marginLeft: '17%',
          width: '66.5%',
          backgroundColor: '#E56033',
          height: '0.25%',
        }}
      />

      <View style={{ alignItems: 'center' }}>
        <View
          style={{
            width: '67%',
          }}>
          {/*1st listing*/}
          <View
            style={{
              height: 78,
              width: 261,
              borderWidth: 1,
              borderColor: '#393840',
              borderRadius: 7,
              marginVertical: '8%',
              justifyContent: 'center',
            }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image
                source={require('./assets/images/rtx4090.png')}
                style={{
                  height: 50,
                  width: 70,
                  marginLeft: '4%',
                }}
              />
              <View
                style={{
                  flexDirection: 'column',
                  marginLeft: '4%',
                  marginRight: '10%',
                }}>
                <Text
                  style={{
                    color: '#FFFFFF',
                    fontFamily: 'Outfit-Bold',
                    fontSize: 13,
                  }}>
                  RTX 4090
                </Text>
                <Text
                  style={{
                    color: '#FFFFFF',
                    fontFamily: 'Outfit-Regular',
                    fontSize: 10,
                  }}>
                  Rs 14,00,000
                </Text>
              </View>
              <AntDesign name={'pluscircleo'} size={20} color={'white'} />
              <Text
                style={{
                  color: '#FFFFFF',
                  fontFamily: 'Outfit-Bold',
                  fontSize: 15,
                  marginHorizontal: '4%',
                }}>
                2
              </Text>
              <AntDesign name={'minuscircleo'} size={20} color={'white'} />
            </View>
          </View>
          {/*2nd listing*/}
          <View
            style={{
              height: 78,
              width: 261,
              borderWidth: 1,
              borderColor: '#393840',
              borderRadius: 7,
              marginVertical: '8%',
              justifyContent: 'center',
            }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image
                source={require('./assets/images/rtx4090.png')}
                style={{
                  height: 50,
                  width: 70,
                  marginLeft: '4%',
                }}
              />
              <View
                style={{
                  flexDirection: 'column',
                  marginLeft: '4%',
                  marginRight: '10%',
                }}>
                <Text
                  style={{
                    color: '#FFFFFF',
                    fontFamily: 'Outfit-Bold',
                    fontSize: 13,
                  }}>
                  RTX 4090
                </Text>
                <Text
                  style={{
                    color: '#FFFFFF',
                    fontFamily: 'Outfit-Regular',
                    fontSize: 10,
                  }}>
                  Rs 14,00,000
                </Text>
              </View>
              <AntDesign name={'pluscircleo'} size={20} color={'white'} />
              <Text
                style={{
                  color: '#FFFFFF',
                  fontFamily: 'Outfit-Bold',
                  fontSize: 15,
                  marginHorizontal: '4%',
                }}>
                2
              </Text>
              <AntDesign name={'minuscircleo'} size={20} color={'white'} />
            </View>
          </View>
          {/*3rd listing*/}
          <View
            style={{
              height: 78,
              width: 261,
              borderWidth: 1,
              borderColor: '#393840',
              borderRadius: 7,
              marginVertical: '8%',
              justifyContent: 'center',
            }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image
                source={require('./assets/images/rtx4090.png')}
                style={{
                  height: 50,
                  width: 70,
                  marginLeft: '4%',
                }}
              />
              <View
                style={{
                  flexDirection: 'column',
                  marginLeft: '4%',
                  marginRight: '10%',
                }}>
                <Text
                  style={{
                    color: '#FFFFFF',
                    fontFamily: 'Outfit-Bold',
                    fontSize: 13,
                  }}>
                  RTX 4090
                </Text>
                <Text
                  style={{
                    color: '#FFFFFF',
                    fontFamily: 'Outfit-Regular',
                    fontSize: 10,
                  }}>
                  Rs 14,00,000
                </Text>
              </View>
              <AntDesign name={'pluscircleo'} size={20} color={'white'} />
              <Text
                style={{
                  color: '#FFFFFF',
                  fontFamily: 'Outfit-Bold',
                  fontSize: 15,
                  marginHorizontal: '4%',
                }}>
                2
              </Text>
              <AntDesign name={'minuscircleo'} size={20} color={'white'} />
            </View>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            backgroundColor: 'grey',
            height: 78,
            justifyContent: 'space-evenly',
            alignItems: 'center',
            flexDirection: 'row',
            marginVertical: '3%',
          }}>
          <View>
            <Text
              style={{
                color: '#FFFFFF',
                fontFamily: 'Outfit-Regular',
                fontSize: 10,
              }}>
              Total
            </Text>
            <Text
              style={{
                color: '#FFFFFF',
                fontFamily: 'Outfit-Bold',
                fontSize: 16,
              }}>
              Rs 32,00,000
            </Text>
          </View>
          <TouchableOpacity>
            <View
              style={{
                width: 119,
                height: 50,
                borderRadius: 32,
                borderWidth: 1,
                borderColor: '#E56033',
                backgroundColor: '#E56033',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  fontFamily: 'Outfit-Regular',
                  color: '#FFFFFF',
                  fontSize: 14,
                }}>
                Checkout
              </Text>
              <Image
                source={require('./assets/images/ArrowRight.png')}
                style={{ height: 20, width: 20, marginLeft: '2%' }}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const AddProducts = () => {
  // const [message, setMessage] = useState('');


  return (
    <View style={{ flex: 1, backgroundColor: 'black', }}>



      <ScrollView>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Add Products</Text>
        </View>




        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 30 }}>
          <TouchableOpacity style={styles.buttonOrange}>
            <Text style={styles.buttonOrangeText}>Manual Entry</Text>
          </TouchableOpacity>
        </View>

        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 40, marginBottom: 50 }}>
          <TouchableOpacity style={styles.buttonWhite}>
            <Text style={styles.buttonWhiteText}>Via Barcode</Text>
          </TouchableOpacity>
        </View>



        {/* <ImageBackground source={require('./images/brownhue.png')} resizeMode="cover" style={styles.image} >

        </ImageBackground> */}


      </ScrollView>
    </View>
  );
};

//Tayyab Screens

const AddProductsBarcode = ({ navigation }) => {
  return (
    <View style={styles.Background}>

      <View style={{ marginLeft: '5%', marginTop: '5%' }}>
        <TouchableOpacity
          onPress={() => navigation.dispatch(StackActions.pop(1))}>
          <Ionicons name={'arrow-back-sharp'} size={25} color={'white'} />
        </TouchableOpacity>
      </View>

      <Text
        style={{
          justifyContent: 'center',
          textAlign: 'center',
          color: '#FFFFFF',
          fontFamily: 'Outfit-SemiBold',
          fontSize: 24,
          marginTop: '5%',
        }}>
        Add Products
      </Text>

      <View style={{ height: 490, width: 317, marginLeft: 'auto', marginRight: 'auto', justifyContent: 'center', alignItems: 'center', alignContent: 'center', backgroundColor: 'white', marginTop: 20, borderRadius: 18 }}>

        <Image
          source={require('./assets/images/Barcode.png')}
          style={{ width: 250, height: 250 }}
        />
        <Text style={{ fontFamily: 'Outfit-Bold', fontSize: 16, marginTop: 20 }}>Scan barcode to add a product</Text>
      </View>

      <View style={{ height: 50, width: 50, marginTop: 20, backgroundColor: '#E56033', borderRadius: 50, marginLeft: 'auto', marginRight: 'auto', justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
        <Ionicons name={'camera-outline'} size={25} color={'black'} />

      </View>


    </View>
  );
};

const AddToHistoryImage = ({ navigation }) => {
  return (
    <View style={styles.Background}>

      <View style={{ marginLeft: '5%', marginTop: '5%' }}>
        <TouchableOpacity
          onPress={() => navigation.dispatch(StackActions.pop(1))}>
          <Ionicons name={'arrow-back-sharp'} size={25} color={'white'} />
        </TouchableOpacity>
      </View>

      <Text
        style={{
          justifyContent: 'center',
          textAlign: 'center',
          color: '#FFFFFF',
          fontFamily: 'Outfit-SemiBold',
          fontSize: 24,
          marginTop: '5%',
        }}>
        Add To History
      </Text>

      <View style={{ height: 490, width: 317, marginLeft: 'auto', marginRight: 'auto', justifyContent: 'center', alignItems: 'center', alignContent: 'center', backgroundColor: 'white', marginTop: 20, borderRadius: 18 }}>


        <Text style={{ fontFamily: 'Outfit-Bold', fontSize: 16, marginTop: 330, maxWidth:250, textAlign:'center'}}>Take a picture of receipt to add to history or upload</Text>
      </View>

      <View style={{ height: 50, width: 50, marginTop: 20, backgroundColor: '#E56033', borderRadius: 50, marginLeft: 'auto', marginRight: 'auto', justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
        <Ionicons name={'camera-outline'} size={25} color={'black'} />

      </View>


    </View>
  );
};

const AddProductsManually = ({ navigation }) => {

  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [value, setValue] = useState(null);
  const [value1, setValue1] = useState(null);
  const [value2, setValue2] = useState(null);
  const [items, setItems] = useState([
    { label: 'Sneakers', value: 'sneakers' },
    { label: 'T-Shirts', value: 'tshirts' },
  ])
  const [items1, setItems1] = useState([
    { label: 'One', value: 'one' },
    { label: 'Breakout', value: 'breakout' },
  ]);



  return (
    <View style={{ flex: 1, backgroundColor: 'black', }}>
      <ScrollView>


        <View style={styles.titleContainer}>
          <Text style={styles.title}>Add Products</Text>
          <Text style={{ color: 'white', marginTop: 4 }}>Provide all the information about the product</Text>
        </View>


        <View style={{ marginTop: 50 }}>
          <Text style={styles.title2}>Product Name</Text>
          <TextInput
            placeholderTextColor={'black'}
            style={styles.addManuallyTextSlim}
            placeholder="Nike Air Jordan"
          />
        </View>

        <View style={{ marginTop: 70 }}>
          <Text style={styles.title2}>Category</Text>
          <DropDownPicker style={styles.dropDown} dropDownContainerStyle={{
            backgroundColor: "#E56033", maxWidth: 288, marginLeft: 56,
          }}
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
          />
        </View>

        <View style={{ marginTop: 70 }}>
          <Text style={styles.title2}>Brand</Text>
          <DropDownPicker style={styles.dropDown} dropDownContainerStyle={{
            backgroundColor: "#E56033", maxWidth: 288, marginLeft: 56,
          }}
            open={open1}
            value={value1}
            items={items1}
            setOpen={setOpen1}
            setValue={setValue1}
            setItems={setItems1}
          />
        </View>

        <View style={{ marginTop: 70 }}>
          <Text style={styles.title2}>Description</Text>
          <TextInput
            placeholderTextColor={'black'}
            style={styles.addManuallyTextLarge}
          />
        </View>

        <View style={{ flexDirection: 'row', marginTop: 70, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{
            fontFamily: 'outfit',
            textAlign: 'left',
            fontSize: 18,
            fontWeight: 'bold',
            color: 'white',
            marginRight: 10
          }}>Quantity</Text>
          <NumericInput
            value={value2}
            onChange={setValue2 => value2}
            totalWidth={200}
            totalHeight={50}
            iconSize={30}
            step={1}
            borderColor={'#E56033'}
            separatorWidth={1}
            minValue={1}
            valueType='real'
            textColor='white'
            iconStyle={{ color: 'white' }}
            rightButtonBackgroundColor='#E56033'
            leftButtonBackgroundColor='#E56033'

          />
        </View>

        <TouchableOpacity>
          <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: 275,
            marginTop: 60,
            height: 63,
            borderRadius: 50,
            marginLeft: 'auto',
            marginRight: 'auto',
            backgroundColor: 'transparent',
            borderRadius: 50,
            borderWidth: 3,
            borderColor: '#E56033'
          }}>
            <Text style={{ color: 'white', fontSize: 20, fontWeight: '600' }}>Add Product</Text>
          </View>
        </TouchableOpacity>



      </ScrollView >

    </View >
  );
};

const AddToHistoryManually = ({ navigation }) => {

  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [value, setValue] = useState(null);
  const [value1, setValue1] = useState(null);
  const [value2, setValue2] = useState(null);
  const [items, setItems] = useState([
    { label: 'Sneakers', value: 'sneakers' },
    { label: 'T-Shirts', value: 'tshirts' },
  ])
  const [items1, setItems1] = useState([
    { label: 'One', value: 'one' },
    { label: 'Breakout', value: 'breakout' },
  ]);



  return (
    <View style={{ flex: 1, backgroundColor: 'black', }}>
      <ScrollView>


        <View style={styles.titleContainer}>
          <Text style={styles.title}>Add To History</Text>
          <Text style={{ color: 'white', marginTop: 4 }}>Provide all the information about the History</Text>
        </View>


        <View style={{ marginTop: 50 }}>
          <Text style={styles.title2}>Product Name</Text>
          <TextInput
            placeholderTextColor={'black'}
            style={styles.addManuallyTextSlim}
            placeholder="Nike Air Jordan"
          />
        </View>

        <View style={{ marginTop: 70 }}>
          <Text style={styles.title2}>Category</Text>
          <DropDownPicker style={styles.dropDown} dropDownContainerStyle={{
            backgroundColor: "#E56033", maxWidth: 288, marginLeft: 56,
          }}
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
          />
        </View>

        <View style={{ marginTop: 70 }}>
          <Text style={styles.title2}>Brand</Text>
          <DropDownPicker style={styles.dropDown} dropDownContainerStyle={{
            backgroundColor: "#E56033", maxWidth: 288, marginLeft: 56,
          }}
            open={open1}
            value={value1}
            items={items1}
            setOpen={setOpen1}
            setValue={setValue1}
            setItems={setItems1}
          />
        </View>

        <View style={{ marginTop: 70 }}>
          <Text style={styles.title2}>Description</Text>
          <TextInput
            placeholderTextColor={'black'}
            style={styles.addManuallyTextLarge}
          />
        </View>

        <TouchableOpacity>
          <View style={{ height: 40, width: 40, marginTop: 20, backgroundColor: '#E56033', borderRadius: 50, marginLeft: 330, justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
            <Text style={{ color: 'white', textAlign: 'center', fontSize: 30, marginBottom: 12, justifyContent: 'center' }}>+</Text>
          </View>
        </TouchableOpacity>

        <View style={{ flexDirection: 'row', marginTop: 70, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{
            fontFamily: 'outfit',
            textAlign: 'left',
            fontSize: 18,
            fontWeight: 'bold',
            color: 'white',
            marginRight: 10
          }}>Quantity</Text>
          <NumericInput
            value={value2}
            onChange={setValue2 => value2}
            totalWidth={200}
            totalHeight={50}
            iconSize={30}
            step={1}
            borderColor={'#E56033'}
            separatorWidth={1}
            minValue={1}
            valueType='real'
            textColor='white'
            iconStyle={{ color: 'white' }}
            rightButtonBackgroundColor='#E56033'
            leftButtonBackgroundColor='#E56033'

          />
        </View>

        <TouchableOpacity>
          <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: 275,
            marginTop: 60,
            height: 63,
            borderRadius: 50,
            marginLeft: 'auto',
            marginRight: 'auto',
            backgroundColor: 'transparent',
            borderRadius: 50,
            borderWidth: 3,
            borderColor: '#E56033'
          }}>
            <Text style={{ color: 'white', fontSize: 20, fontWeight: '600' }}>Add To History</Text>
          </View>
        </TouchableOpacity>



      </ScrollView >

    </View >
  );
};

const AddToHistory = () => {


  return (
    <View style={styles.Background}>



      <ScrollView>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Add To History</Text>
        </View>




        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 30 }}>
          <TouchableOpacity style={styles.buttonOrange}>
            <Text style={styles.buttonOrangeText}>Manual Entry</Text>
          </TouchableOpacity>
        </View>

        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 40, marginBottom: 50 }}>
          <TouchableOpacity style={styles.buttonWhite}>
            <Text style={styles.buttonWhiteText}>Via Image</Text>
          </TouchableOpacity>
        </View>


      </ScrollView >
    </View >
  );
};

const SellingHistory = () => {
  return (
    <View style={styles.Background}>
      <ScrollView>

        <View >
          <Text style={{
            fontFamily: 'outfit',
            textAlign: 'left',
            marginLeft: 56,
            fontSize: 23,
            marginTop: 20,
            fontWeight: 'bold',
            color: 'white',
          }}>Selling History</Text>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 45 }}>
          <Text style={{ color: '#E56033', fontSize: 18, textDecorationLine: 'underline', fontWeight: '500', fontFamily: 'Helvetica' }}>
            Week
          </Text>
          <Text style={{ color: 'white', fontSize: 18, fontWeight: '500', fontFamily: 'Helvetica' }}>
            Month
          </Text>
          <Text style={{ color: 'white', fontSize: 18, fontWeight: '500', fontFamily: 'Helvetica' }}>
            Year
          </Text>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 20 }}>
          <Text style={{ color: 'white', fontSize: 18, fontWeight: '500', fontFamily: 'Helvetica' }}>
            Date/Order ID
          </Text>
          <Text style={{ color: 'white', fontSize: 18, fontWeight: '500', fontFamily: 'Helvetica' }}>
            Amount
          </Text>
        </View>

        <View style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: 250,
          height: 3,
          marginTop: 40,
          marginBottom: 10,
          borderRadius: 50,
          marginLeft: 'auto',
          marginRight: 'auto',
          backgroundColor: '#E56033',
        }}>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
          <Text style={{ color: 'white', fontSize: 18, fontWeight: '500', fontFamily: 'Helvetica' }}>
            9 Sept, 2022
          </Text>
          <Text style={{ color: 'white', fontSize: 18, fontWeight: '500', fontFamily: 'Helvetica' }}>
            Rs 2,000
          </Text>
        </View>

        <View style={{ marginLeft: 75 }}>
          <Text style={{ color: 'white', fontSize: 13, fontWeight: '500', fontFamily: 'Helvetica' }}>
            XFX1234
          </Text>
        </View>


        <View style={{ backgroundColor: '#242222', marginTop: 200, borderRadius: 40, width: 412, height: 250 }}>
          <Text style={{ color: 'white', fontSize: 18, fontWeight: '500', fontFamily: 'Helvetica', marginTop: 30, marginLeft: 15 }}>
            Latest Orders
          </Text>

          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 13 }}>
            <Text style={{ color: 'white', fontSize: 18, fontWeight: '500', fontFamily: 'Helvetica' }}>
              09 september, 2022
            </Text>
            <Text style={{ color: 'white', fontSize: 18, fontWeight: '500', fontFamily: 'Helvetica' }}>
              Rs 2,000
            </Text>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 15 }}>
            <Text style={{ color: 'white', fontSize: 18, fontWeight: '500', fontFamily: 'Helvetica' }}>
              16 october, 2022
            </Text>
            <Text style={{ color: 'white', fontSize: 18, fontWeight: '500', fontFamily: 'Helvetica' }}>
              Rs 55,000
            </Text>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 15 }}>
            <Text style={{ color: 'white', fontSize: 18, fontWeight: '500', fontFamily: 'Helvetica' }}>
              01 August, 2022
            </Text>
            <Text style={{ color: 'white', fontSize: 18, fontWeight: '500', fontFamily: 'Helvetica' }}>
              Rs 10,000
            </Text>
          </View>


          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 15 }}>


          </View>

        </View>

      </ScrollView>
    </View>
  );
};

const ShoppingHistory = () => {
  return (
    <View style={styles.Background}>
      <ScrollView>

        <View >
          <Text style={{
            fontFamily: 'outfit',
            textAlign: 'left',
            marginLeft: 56,
            fontSize: 23,
            marginTop: 20,
            fontWeight: 'bold',
            color: 'white',
          }}>Shopping History</Text>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 45 }}>
          <Text style={{ color: '#E56033', fontSize: 18, textDecorationLine: 'underline', fontWeight: '500', fontFamily: 'Helvetica' }}>
            Week
          </Text>
          <Text style={{ color: 'white', fontSize: 18, fontWeight: '500', fontFamily: 'Helvetica' }}>
            Month
          </Text>
          <Text style={{ color: 'white', fontSize: 18, fontWeight: '500', fontFamily: 'Helvetica' }}>
            Year
          </Text>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 20 }}>
          <Text style={{ color: 'white', fontSize: 18, fontWeight: '500', fontFamily: 'Helvetica' }}>
            Date/Order ID
          </Text>
          <Text style={{ color: 'white', fontSize: 18, fontWeight: '500', fontFamily: 'Helvetica' }}>
            Amount
          </Text>
        </View>


        <View style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: 250,
          height: 3,
          marginTop: 40,
          marginBottom: 10,
          borderRadius: 50,
          marginLeft: 'auto',
          marginRight: 'auto',
          backgroundColor: '#E56033',
        }}>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
          <Text style={{ color: 'white', fontSize: 18, fontWeight: '500', fontFamily: 'Helvetica' }}>
            9 Sept, 2022
          </Text>
          <Text style={{ color: 'white', fontSize: 18, fontWeight: '500', fontFamily: 'Helvetica' }}>
            Rs 2,000
          </Text>
        </View>

        <View style={{ marginLeft: 75 }}>
          <Text style={{ color: 'white', fontSize: 13, fontWeight: '500', fontFamily: 'Helvetica' }}>
            XFX1234
          </Text>
        </View>

        <TouchableOpacity>
          <View style={{ height: 50, width: 50, marginTop: 20, backgroundColor: '#E56033', borderRadius: 50, marginLeft: 285, justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
            <Text style={{ color: 'white', textAlign: 'center', fontSize: 30, marginBottom: 2, justifyContent: 'center' }}>+</Text>
          </View>
        </TouchableOpacity>


        <View style={{ backgroundColor: '#242222', marginTop: 200, borderRadius: 40, width: 412, height: 250 }}>
          <Text style={{ color: 'white', fontSize: 18, fontWeight: '500', fontFamily: 'Helvetica', marginTop: 30, marginLeft: 15 }}>
            Latest Orders
          </Text>

          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 13 }}>
            <Text style={{ color: 'white', fontSize: 18, fontWeight: '500', fontFamily: 'Helvetica' }}>
              09 september, 2022
            </Text>
            <Text style={{ color: 'white', fontSize: 18, fontWeight: '500', fontFamily: 'Helvetica' }}>
              Rs 2,000
            </Text>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 15 }}>
            <Text style={{ color: 'white', fontSize: 18, fontWeight: '500', fontFamily: 'Helvetica' }}>
              16 october, 2022
            </Text>
            <Text style={{ color: 'white', fontSize: 18, fontWeight: '500', fontFamily: 'Helvetica' }}>
              Rs 55,000
            </Text>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 15 }}>
            <Text style={{ color: 'white', fontSize: 18, fontWeight: '500', fontFamily: 'Helvetica' }}>
              01 August, 2022
            </Text>
            <Text style={{ color: 'white', fontSize: 18, fontWeight: '500', fontFamily: 'Helvetica' }}>
              Rs 10,000
            </Text>
          </View>


          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 15 }}>


          </View>

        </View>

      </ScrollView>
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
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Sign in Screen"
          component={SignInScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Sign up Screen"
          component={SignUpScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OTP Screen"
          component={OTPScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cart Screen"
          component={CartScreen}
          options={{ headerShown: false }}
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
        <Stack.Screen
          name="Choose Payment Method Screen"
          component={ChoosePaymentScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Add Payment Method Screen"
          component={AddPaymentScreen}
          options={{ headerShown: false }}
        />
        {/*<Stack.Screen*/}
        {/*  name="OTP Screen"*/}
        {/*  component={OTPScreen}*/}
        {/*  options={{headerShown: false}}*/}
        {/*/>*/}
        <Stack.Screen
          name="View Request Screen"
          component={ViewRequestScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Add Products" component={AddProducts} options={{ headerShown: false }} />
        <Stack.Screen name="Add To History" component={AddToHistory} options={{ headerShown: false }} />
        <Stack.Screen name="Add To History (Image)" component={AddToHistoryImage} options={{ headerShown: false }} />
        <Stack.Screen name="Add Products (manually)" component={AddProductsManually} options={{ headerShown: false }} />
        <Stack.Screen name="Add To History Manually" component={AddToHistoryManually} options={{ headerShown: false }} />
        <Stack.Screen name="Selling History" component={SellingHistory} options={{ headerShown: false }} />
        <Stack.Screen name="Shopping History" component={ShoppingHistory} options={{ headerShown: false }} />
        <Stack.Screen name="Add Products (Barcode)" component={AddProductsBarcode} options={{ headerShown: false }} />



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
  titleContainer: {
    fontFamily: 'Outfit-Regular',
    minHeight: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Outfit-Regular',
    textAlign: 'center',
    fontSize: 23,
    fontWeight: 'bold',
    color: 'white',
  },
  buttonOrange: {
    justifyContent: 'center',
    height: 100,
    backgroundColor: "#E56033",
    width: 261,
    borderRadius: 18,
  },
  buttonOrangeText: {
    fontFamily: 'Outfit-Regular',
    marginLeft: 20,
    fontSize: 22,
    textAlign: 'left',
    fontWeight: '700',
    color: 'white',
  },
  buttonWhite: {
    justifyContent: 'center',
    height: 100,
    backgroundColor: "white",
    width: 261,
    borderRadius: 18,
  },
  buttonWhiteText: {
    fontFamily: 'Outfit-Regular',
    marginLeft: 20,
    fontSize: 22,
    textAlign: 'left',
    fontWeight: '700',
    color: 'black',
  },
  btnText: {
    fontFamily: 'Outfit-Regular',
    textAlign: 'center',
    fontSize: 24,
    color: 'white',
  },
  title2: {
    marginLeft: 56,
    fontFamily: 'outfit',
    textAlign: 'left',
    fontSize: 18,
    fontWeight: '700',
    color: 'white',
  },
  addManuallyTextSlim: {
    padding: 10,
    marginLeft: 56,
    width: '73%',
    fontSize: 15,
    borderWidth: 1,
    borderRadius: 4,
    marginTop: 10,
    fontFamily: 'Outfit-Regular',
    backgroundColor: '#F2F2F2',
  },
  addManuallyTextLarge: {
    padding: 10,
    marginLeft: 56,
    width: '73%',
    height: 100,
    fontSize: 15,
    borderWidth: 1,
    borderRadius: 4,
    marginTop: 10,
    fontFamily: 'Outfit-Regular',
    backgroundColor: '#F2F2F2',
  },
  dropDown: {
    padding: 10,
    marginLeft: 56,
    width: '73%',
    fontSize: 15,
    borderWidth: 1,
    borderRadius: 4,
    marginTop: 10,
    fontFamily: 'Outfit-Regular',
    backgroundColor: '#F2F2F2',
  },
});

export default App;
