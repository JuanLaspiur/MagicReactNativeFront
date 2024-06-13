import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';

function Loading() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/Login/Ellipse 1.png")}
        resizeMode="contain"
        style={styles.eclipse1}
      />
      <Image
        source={require("../assets/Login/Ellipse 1.png")}
        resizeMode="contain"
        style={styles.eclipse2}
      />
            <Image
        source={require("../assets/Animals/ICONOS A COLOR-05.png")}
        resizeMode="contain"
        style={styles.eclipse3}
      />
              <Image
        source={require("../assets/Animals/ICONOS A COLOR-28.png")}
        resizeMode="contain"
        style={styles.eclipse4}
      />
                   <Image
        source={require("../assets/Animals/ICONOS A COLOR-38.png")}
        resizeMode="contain"
        style={styles.eclipse5}
      />
      <Animatable.View
        animation="pulse"
        easing="ease-in-out"
        iterationCount="infinite"
        style={styles.expandingCircle}
      />
      <Animatable.Image
        animation="rotate"
        iterationCount="infinite"
        duration={2000}
        source={require('../assets/Login/smallIcon.png')}
        style={styles.logoApp}
      />
      <Text style={styles.loadingText}>
        Cargando
        <Animatable.Text
          animation="fadeIn"
          iterationCount="infinite"
          direction="alternate"
          duration={800}
          style={styles.dots}
        >
          .
        </Animatable.Text>
        <Animatable.Text
          animation="fadeIn"
          iterationCount="infinite"
          direction="alternate"
          duration={800}
          delay={400}
          style={styles.dots}
        >
          .
        </Animatable.Text>
        <Animatable.Text
          animation="fadeIn"
          iterationCount="infinite"
          direction="alternate"
          duration={800}
          delay={400}
          style={styles.dots}
        >
          .
        </Animatable.Text>
      </Text>
    </View>
  );
}

export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  eclipse1: {
    position: "absolute",
    top: -99,
    right: -30,
  },
  eclipse3: {
    position: "absolute",
    top: 100,
    left: -20,
    width: 200,
    height: 200,
  }, eclipse4: {
    position: "absolute",
    top: 100,
    right: -10,
    width: 100,
    height: 100,
  }, eclipse5: {
    position: "absolute",
    bottom: 100,
    right: 0,
    width: 100,
    height: 100,
  }, eclipse2: {
    position: "absolute",
    top: -60,
    left: 150,
  },
  expandingCircle: {
    position: 'absolute',
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#5386C1',
    zIndex: -1,
  },
  logoApp: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  loadingText: {
    marginTop:130,
    fontSize: 18,
    color: 'gray',
  },
  dots: {
    fontSize: 18,
    color: 'gray',
  },
});
