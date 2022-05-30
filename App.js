import React from 'react';
import { StyleSheet, FlatList, SafeAreaView } from 'react-native';
import NewsArticle from './components/NewsArticle';
import articles from './dummies/articles';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={articles}
        renderItem={({ item }) => (
          <NewsArticle
            ImageUrl={item.urlToImage}
            Title={item.title}
            SubTitle={item.author}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
