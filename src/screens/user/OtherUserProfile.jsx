import React from 'react';
import { View, Image, StyleSheet, ScrollView } from 'react-native';
import AppHeader from '../../components/User/AppHeader';
import IconPerfil from '../../components/User/Home/IconPerfil';
import BoxIconsYourProfile from '../../components/User/OtherUserProfile/BoxIconsYourProfile';
import CardTextYourAnimal from '../../components/User/OtherUserProfile/CardTextYourAnimal'
import ResumePerfil from '../../components/User/Profile/ResumePerfil';
import YourInterestsTable from '../../components/User/OtherUserProfile/YourInterestsTable';
import FollowersBox from '../../components/User/Profile/FollowersBox';
import YourQuedadasCarrucell from '../../components/User/OtherUserProfile/YourQuedadasCarrucell';
import YourParticipationQuedadas from '../../components/User/OtherUserProfile/YourParticipationQuedadas';
import YourStatus from '../../components/User/OtherUserProfile/YourStatus';
const OtherUserProfile = () => {
  return (
    <View style={styles.container}>
      <AppHeader title="Perfil" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
      <YourStatus />
        <Image
          source={require('./../../assets/Login/Ellipse 1.png')}
          resizeMode="contain"
          style={styles.eclipse}
        />
        <IconPerfil />
        <ResumePerfil />
        <FollowersBox />
        <BoxIconsYourProfile />
        <Image
          source={require('./../../assets/Login/Ellipse 1.png')}
          resizeMode="contain"
          style={styles.eclipse2}
        />
        <CardTextYourAnimal />
        <Image
          source={require('./../../assets/Login/Ellipse 1.png')}
          resizeMode="contain"
          style={styles.eclipse3}
        />
        <Image
          source={require('./../../assets/Animals/ICONOS A COLOR-03.png')}
          resizeMode="contain"
          style={styles.eclipse4}
        />
        <Image
          source={require('./../../assets/Animals/ICONOS A COLOR-09.png')}
          resizeMode="contain"
          style={styles.eclipse5}
        />
        <Image
          source={require('./../../assets/Animals/ICONOS A COLOR-15.png')}
          resizeMode="contain"
          style={styles.eclipse6}
        />
        <YourInterestsTable />
        <YourQuedadasCarrucell/>
        <YourParticipationQuedadas />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flexGrow: 1,
    paddingVertical: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  content: {
    width: '80%',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
  eclipse: {
    position: 'absolute',
    top: -120,
    right: 0,
    width: 200,
    height: 200,
  },
  eclipse2: {
    position: 'absolute',
    bottom: 520,
    right: -85,
    transform: [{ rotate: '75deg' }],
    opacity: 0.3,
    width: 150,
    height: 150,
    zIndex: -1,
  },
  eclipse3: {
    position: 'absolute',
    bottom: 320,
    transform: [{ rotate: '205deg' }],
    opacity: 0.3,
    width: 200,
    height: 200,
    zIndex: -1,
  },
  eclipse4: {
    position: 'absolute',
    bottom: 20,
    left: -20,
    transform: [{ rotate: '15deg' }],
    opacity: 0.1,
    width: 70,
    height: 70,
    zIndex: -1,
  },
  eclipse5: {
    position: 'absolute',
    bottom: 20,
    right: -20,
    transform: [{ rotate: '15deg' }],
    opacity: 0.1,
    width: 70,
    height: 70,
    zIndex: -1,
  },
  eclipse6: {
    position: 'absolute',
    top: 70,
    right: -20,
    transform: [{ rotate: '15deg' }],
    opacity: 0.1,
    width: 70,
    height: 70,
    zIndex: -1,
  },
});

export default OtherUserProfile;
