import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import star from '../../img/star.png';
import {Rating} from 'react-native-ratings';

export default function Movie({
  navigation,
  source,
  rating,
  producer,
  id,
  data,
}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        title="Details"
        onPress={() => navigation.push('Details', {id, data})}>
        <Image
          source={{uri: source}}
          resizeMode="cover"
          style={{width: 120, height: 180, borderRadius: 10}}
        />
      </TouchableOpacity>
      <View style={styles.subText}>
        <Rating
          type="custom"
          ratingImage={star}
          ratingColor="#3498db"
          ratingBackgroundColor="#162B3D"
          readonly={true}
          ratingCount={5}
          startingValue={rating}
          imageSize={13}
          showRating={false}
          style={{paddingVertical: 10}}
        />
        <Text style={styles.producer}>{producer}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginEnd: 30,
    padding: 0,
  },
  producer: {
    color: '#05AAE4',
    fontSize: 12,
  },
  subText: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
