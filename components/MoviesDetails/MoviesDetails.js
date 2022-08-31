import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  Text,
  Button,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import background from '../../img/movie1.png';
import videoTitle from '../../img/videoTitle.png';
import userIcon from '../../img/userIcon.png';
import {Rating} from 'react-native-ratings';
import star from '../../img/star.png';
import {movies} from '../../data';

export default function MoviesDetails({navigation, route}) {
  const {id} = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.poster}>
        <ImageBackground
          source={{uri: movies[id].source}}
          resizeMode="cover"
          style={styles.image}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon name="arrow-back" size={30} color="#CDEEFB" />
            </TouchableOpacity>
            <Image source={videoTitle} />
            <Image source={userIcon} />
          </View>
        </ImageBackground>
      </View>
      <View style={styles.backgroundDetails}>
        <View style={styles.details}>
          <Text style={styles.title}>{movies[id].title}</Text>
          <View style={styles.rating}>
            <Rating
              type="custom"
              ratingImage={star}
              ratingColor="#3498db"
              readonly={true}
              ratingCount={5}
              startingValue={5}
              imageSize={25}
              showRating={false}
              style={{paddingVertical: 10}}
            />

            <Text style={styles.slash}>/</Text>
            <Text style={styles.duration}>{movies[id].duration}</Text>
          </View>
          <View style={styles.buttonsView}>
            <TouchableOpacity color="#00AAE4" style={styles.playButton}>
              <Icon name="ios-play-circle" size={27} color="#FFFFFF" />
              <Text style={styles.play}>Play</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.chaptersButton}>
              <Icon name="videocam" size={20} color="#FFFFFF" />
              <Text style={styles.chapters}>Chapters</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.infoButton}>
              <Text style={styles.info}>!</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.descriptionView}>
            <Text style={styles.description}>{movies[id].description}</Text>
          </View>
          <View style={styles.actorsView}>
            <Text style={styles.actors}>Actors</Text>
            <Icon name="md-man-outline" size={15} color="#05AAE4" />
          </View>
          <View style={styles.actorView}>
            {movies[id].actors.map(actor => (
              <Text style={styles.actor} key={actor}>
                {actor}
              </Text>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: '60%',
    width: '100%',
    borderRadius: 50,
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    margin: '5%',
    marginTop: 30,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 28,
    fontFamily: 'Poppins',
    fontWeight: '600',
  },
  poster: {
    width: '100%',
    height: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  backgroundDetails: {
    marginTop: -100,
    height: '100%',
    width: '100%',
    borderRadius: 50,
    backgroundColor: '#162B3D',
  },
  details: {
    height: '100%',
    width: '84%',
    marginTop: 30,
    marginStart: '7%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  rating: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  slash: {
    color: '#FFFFFF20',
    fontSize: 15,
    fontFamily: 'Poppins',
    fontWeight: '600',
    marginLeft: 8,
    marginRight: 8,
  },
  duration: {
    color: '#00AAE4',
    fontSize: 15,
    fontFamily: 'Poppins',
    fontWeight: '400',
  },
  buttonsView: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 12,
  },
  playButton: {
    backgroundColor: '#00AAE4',
    width: 150,
    height: 35,
    borderRadius: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  play: {
    color: '#FFFFFF',
    fontSize: 20,
    fontFamily: 'Poppins',
    fontWeight: '700',
    marginStart: 8,
  },
  chaptersButton: {
    backgroundColor: '#00000030',
    width: 150,
    height: 35,
    borderRadius: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  chapters: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'Poppins',
    fontWeight: '700',
    marginStart: 8,
  },
  info: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'Poppins',
    fontWeight: '700',
  },
  infoButton: {
    backgroundColor: '#00000035',
    width: 35,
    height: 35,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  description: {
    color: '#FFFFFF50',
    fontSize: 15,
    fontFamily: 'Poppins',
    fontWeight: '300',
  },
  actorsView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 12,
  },
  actors: {
    color: '#FFFFFF',
    fontSize: 20,
    fontFamily: 'Poppins',
    fontWeight: '700',
    marginEnd: 8,
  },
  actorView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  actor: {
    color: '#FFFFFF',
    fontSize: 20,
    fontFamily: 'Poppins',
    fontWeight: '600',
    marginEnd: 10,
  },
});
