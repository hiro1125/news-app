import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';

const NewsArticle = ({ ImageUrl, Title, SubTitle, onPress }) => {
  const date = new Date(SubTitle);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const releaseDate = year + '年' + month + '月' + day + '日';
  return (
    <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
      <View style={styles.leftContainer}>
        <Image style={{ width: 100, height: 100 }} source={{ uri: ImageUrl }} />
      </View>
      <View style={styles.rightContainer}>
        <Text numberOfLines={3} style={styles.text}>
          {Title}
        </Text>
        <Text style={styles.subText}>{releaseDate}</Text>
      </View>
    </TouchableOpacity>
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
    color: 'darkblue',
  },
});
