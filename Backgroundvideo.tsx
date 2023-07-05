import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Linking, TouchableOpacity, Image } from 'react-native';
import Video from 'react-native-video';



const Backgroundvideo = () => {

 const [user, setUsername] = useState('');
const [password, setPassword] = useState('');
const handleLogin = () => {

    if (user.trim() === '') {
        // Username is empty
        alert('Please enter a Email or phonenumber');
        return;
      }
  
      if (password.trim() === '') {
        // Password is empty
        alert('Please enter a password');
        return;
      }

  };
const handleLogin3 = () => {
  Linking.openURL('https://www.facebook.com');
};
const handleLogin1 = () => {
    Linking.openURL('https://www.twitter.com');
  };
  const handleLogin2 = () => {
    Linking.openURL('https://www.instagram.com');
  };
  return (
    <View style={styles.container}>
      <Video
        source={require('./Whatsapp1.mp4')}
        rate={1.0}
        volume={1.0}
        muted={false}
        resizeMode="cover"
        repeat={true}
        style={styles.video}
      />
      <Text style={styles.subHeading}>Login Info</Text>
      <TextInput
          style={styles.input}
          placeholder="Email or Phonenumber"
          placeholderTextColor="white"
          value={user}
          onChangeText={setUsername}
        />
            <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="white"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      <Text style={styles.forgotPassword}>Forgot Password?</Text>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.orText}>Or Login with</Text>
      <View style={styles.logo}>
        <TouchableOpacity onPress={handleLogin3}>
          <Image source={require('./fb2.png')} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLogin1}>
          <Image source={require('./twitter1.png')} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLogin2}>
          <Image source={require('./insta3.png')} style={styles.image} />
        </TouchableOpacity>
      </View>
    </View>
  
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  input: {
    borderColor: 'lightgreen',
    borderWidth: 3,
    width: '90%',
    margin: 10,
    borderRadius: 25,
    paddingLeft: 15,
    color: 'white'
  },
  button: {
    backgroundColor: 'darkgreen',
    width: '60%',
    alignItems: 'center',
    padding: 12,
    margin: 20,
    borderRadius: 15,
    borderColor: 'lightgreen',
    borderWidth: 3
  },
 
  subHeading: {
    fontWeight: 'bold',
    color: 'darkgreen',
    margin: 25,
    marginBottom: 5,
    fontSize: 50,
    textShadowColor: 'lightgreen', // Font border color
    textShadowOffset: { width: -4, height: 4 }, // Font border offset
    textShadowRadius: 5,
  },
  buttonText: {
    color: 'white',
  },
  image: {
    width: 30,
    height: 30,
    margin: 15,
    marginHorizontal: 10,
    borderColor: 'lightgreen',
    borderWidth: 4,
    borderRadius: 4
  },
  logo: {
    flexDirection: 'row',
  },
  forgotPassword: {
    color: 'skyblue',
    marginLeft: 170,
  },
  orText: {
    color: 'white'
  }
});

export default Backgroundvideo;
