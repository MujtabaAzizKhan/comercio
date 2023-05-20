import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';
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

const Stack = createNativeStackNavigator();

const NavigatorScreen = ({navigation}) => {
  return (
    <View>
      <Button
        title="Welcome Screen"
        onPress={() => navigation.navigate('Welcome Screen')}
      />
      <Button title="Sign in" onPress={() => navigation.navigate('hello')} />
      <Button title="Sign Up" onPress={() => navigation.navigate('hello')} />
      <Button title="OTP" onPress={() => navigation.navigate('hello')} />
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
        <Stack.Screen name="Home" component={Hello} />
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
