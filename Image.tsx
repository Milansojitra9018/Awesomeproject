import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

const DisplayAnImage = () => {
  return (
    <View style={styles.container}>
       <Image
        style={styles.tinyLogo}
         source={require('./backgroundimage.jpg')}
      /> 
      {/* <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://rectnative.dev/img/tiny_logo.png',
        }}
      /> */}
     
    </View>
  );
};

export default DisplayAnImage;