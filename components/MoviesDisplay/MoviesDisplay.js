import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {movies} from '../../data';
import Movie from '../Movie/Movie';

export default function MoviesDisplay({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <View style={styles.title}>
          <Text style={styles.subText}>Amazon Orginal</Text>
          <Icon name="ios-shield-checkmark-outline" size={15} color="#05AAE4" />
        </View>
        <ScrollView horizontal={true} style={styles.scroll}>
          <View style={styles.movies}>
            {movies
              .filter(movie => movie.forYou === false)
              .map(movie => (
                <Movie
                  key={movie.id}
                  source={movie.smallImageSource}
                  rating={movie.rating}
                  producer={movie.producer}
                  id={movie.id}
                  navigation={navigation}
                />
              ))}
          </View>
        </ScrollView>
        <View style={styles.title}>
          <Text style={styles.subText}>For You</Text>
          <Icon name="ios-heart-outline" size={18} color="#05AAE4" />
        </View>
        <ScrollView horizontal={true} style={styles.scroll}>
          <View style={styles.movies}>
            {movies
              .filter(movie => movie.forYou === true)
              .map(movie => (
                <Movie
                  key={movie.id}
                  source={movie.smallImageSource}
                  rating={movie.rating}
                  producer={movie.producer}
                  id={movie.id}
                  navigation={navigation}
                />
              ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: 550,
    padding: 8,
    borderRadius: 50,
    alignItems: 'center',
    marginBottom: 80,
  },
  container2: {
    height: 280,
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    width: '100%',
    marginStart: '10%',
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
  },
  scroll: {
    width: '100%',
  },
  movies: {
    display: 'flex',
    flexDirection: 'row',
  },

  subText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 20,
    fontWeight: '800',
    lineHeight: 45,
    color: '#FFFFFF',
    marginRight: 7,
    padding: 0,
    margin: 0,
  },
});
