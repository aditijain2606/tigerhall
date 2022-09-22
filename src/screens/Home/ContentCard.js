import React from 'react';
import { Image, Text, View } from 'react-native';
import { styles } from './style';

const ContentCard = ({ item }) => {

  function getImage(url) {
    let insertIndex = url.indexOf('/', url.indexOf("//")+2)
    return url.slice(0, insertIndex) + '/resize/500x' + url.slice(insertIndex)
  }

  return (
    <View style={styles.contentCard}>
      <Image
        style={styles.image}
        source={{
          uri: getImage(item.image.uri),
        }}
      />
      <Text style={styles.title}>{item.name.toUpperCase()}</Text>
      <Text style={styles.categoriesName}>{item.categories[0].name}</Text>
      <Text style={styles.expertDetails}>
        {item.experts[0].firstName} {item.experts[0].lastName}
      </Text>
      <Text style={styles.expertDetails}>
        {item.experts[0].title.toUpperCase()}
      </Text>
      <Text style={styles.expertCompany}>{item.experts[0].company}</Text>
    </View>
  );
};
export default ContentCard;
