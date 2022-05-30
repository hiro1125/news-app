import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

const NewsArticle = ({ SubTitle, ImageUrl, Title }) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.leftContainer}>
        <Image style={{ width: 100, height: 100 }} source={{ uri: ImageUrl }} />
      </View>
      <View style={styles.rightContainer}>
        <Text numberOfLines={3} style={styles.text}>
          {Title}
        </Text>
        <Text style={styles.subText}>{SubTitle}</Text>
      </View>
    </View>
  );
};

export default NewsArticle;

const styles = StyleSheet.create({
  itemContainer: {
    height: 100,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    flexDirection: 'row',
  },
  leftContainer: {
    width: 100,
  },
  rightContainer: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 16,
  },
  subText: {
    fontSize: 12,
    color: 'gray',
  },
});