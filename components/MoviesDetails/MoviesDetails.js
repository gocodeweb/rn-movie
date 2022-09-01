import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import videoTitle from '../../img/videoTitle.png';
import userIcon from '../../img/userIcon.png';
import {Rating} from 'react-native-ratings';
import star from '../../img/star.png';
import {movies, actors} from '../../data';

Icon.loadFont();

export default function MoviesDetails({navigation, route}) {
  const {id} = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.poster}>
        <ImageBackground
          source={{uri: movies[id].bigImageSource}}
          resizeMode="cover"
          style={styles.bgImage}>
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
              ratingBackgroundColor="#162B3D"
              readonly={true}
              ratingCount={5}
              startingValue={movies[id].rating}
              imageSize={25}
              showRating={false}
            />

            <Text style={styles.ratingNum}>{movies[id].rating}</Text>
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
              <Text style={styles.info}>i</Text>
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
            {movies[id].actorsId.map(actorId =>
              actors
                .filter(actor => actor.id === actorId)
                .map(actor => (
                  <View style={styles.actorView2} key={actor}>
                    <Image
                      source={{uri: actor.image}}
                      style={styles.image}
                      resizeMode="cover"
                    />
                    <Text style={styles.actor}>{actor.name}</Text>
                  </View>
                )),
            )}
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: '55%',
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
    fontFamily: 'Poppins-Regular',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  poster: {
    width: '100%',
    height: '100%',
  },
  bgImage: {
    width: '100%',
    height: '100%',
  },
  backgroundDetails: {
    marginTop: -100,
    height: '130%',
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
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  ratingNum: {
    color: '#00AAE4',
    fontSize: 15,
    fontFamily: 'Poppins-Regular',
    fontWeight: '500',
    marginStart: 8,
  },
  slash: {
    color: '#FFFFFF20',
    fontSize: 15,
    fontFamily: 'Poppins-Regular',
    fontWeight: '600',
    marginLeft: 8,
    marginRight: 8,
  },
  duration: {
    color: '#00AAE4',
    fontSize: 15,
    fontFamily: 'Poppins-Regular',
    fontWeight: '400',
  },
  buttonsView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 18,
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
    marginEnd: 4,
  },
  play: {
    color: '#FFFFFF',
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
    fontWeight: '800',
    marginStart: 8,
  },
  chaptersButton: {
    backgroundColor: '#1A3245',
    width: 150,
    height: 35,
    borderRadius: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginEnd: 4,
  },
  chapters: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
    fontWeight: '800',
    marginStart: 8,
  },
  info: {
    color: '#FFFFFF',
    fontSize: 15,
    fontFamily: 'Poppins-Regular',
    fontWeight: '700',
  },
  infoButton: {
    backgroundColor: '#1A3245',
    width: 30,
    height: 30,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  description: {
    marginTop: 10,
    color: '#FFFFFF50',
    fontSize: 15,
    fontFamily: 'Poppins-Regular',
    fontWeight: '300',
  },
  actorsView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 10,
  },
  actors: {
    color: '#FFFFFF',
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
    fontWeight: '800',
    marginEnd: 8,
    marginBottom: 10,
  },
  actorView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  actorView2: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  actor: {
    color: '#FFFFFF',
    fontSize: 7,
    fontFamily: 'Poppins-Regular',
    fontWeight: '600',
    marginEnd: 10,
    width: '50%',
    textAlign: 'center',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginEnd: 10,
    marginBottom: 4,
  },
});
