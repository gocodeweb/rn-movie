import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import background from '../../img/background.png';
import userIcon from '../../img/userIcon.png';
import videoTitle from '../../img/videoTitle.png';

Icon.loadFont();

export default function Header() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={background}
        resizeMode="cover"
        style={styles.image}>
        <View style={styles.container2}>
          <View style={styles.title}>
            <Icon name="menu" size={30} color="#CDEEFB" />
            <Image source={videoTitle} />
            <Image source={userIcon} />
          </View>
          <View style={styles.textView}>
            <Text style={styles.subText}>Hello,</Text>
            <Text style={styles.subText}>What will you Watch?</Text>
          </View>
          <View style={styles.search}>
            <Icon name="search-outline" size={30} color="#8A959E" />
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              color="#FFFFFF"
              placeholderTextColor="#8A959E"
              placeholder="Search Movie, Series, Documentry"
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: 289,
    backgroundColor: '#00AAE4',
    padding: 8,
    borderRadius: 50,
    alignItems: 'center',
  },
  container2: {
    height: 280,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
    width: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  title: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
    width: '100%',
  },
  textView: {
    paddingHorizontal: '5%',
    width: '100%',
    alignItems: 'flex-start',
    flex: 1,
    justifyContent: 'center',
  },
  subText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 30,
    fontWeight: '800',
    lineHeight: 45,
    color: '#FFFFFF',
  },
  search: {
    backgroundColor: '#162B3C',
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    borderRadius: 6,
    paddingLeft: 20,
    height: 41,
    marginBottom: 25,
  },

  input: {
    marginBottom: 0,
    padding: 8,
    alignItems: 'center',
    width: '100%',
  },
});
