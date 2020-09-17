import React from 'react';
import {FlatList, TouchableOpacity, Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Box = ({item, navigation}) => {
  let icons = [];

  for (let index = 0; index < Number(item.niveau); index++)
    icons.push(<Icon name="star" color="#808080" size={18} key={index} />);

  const tags = item.tags.map((tg) => (
    <Text style={styles.txtTag} key={tg.id}>
      #{tg.libelle + ' '}
    </Text>
  ));

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate('Details', {htmlContent: item.contenu})
      }>
      <Text style={styles.title}>{item.titre} </Text>
      <Text style={styles.txtStyle}>
        Volume Horaire :
        <Text style={{fontWeight: 'bold'}}> {item.volumeHoraire}</Text>
      </Text>
      <View style={{flexDirection: 'row', paddingBottom: 6}}>
        <Text style={styles.txtStyle}>Niveau de difficutlée </Text>
        {icons}
      </View>
      <View style={styles.tags}>{tags}</View>
    </TouchableOpacity>
  );
};

const PreviewContent = ({chapters, navigation}) => {
  return (
    <FlatList
      data={chapters}
      keyExtractor={(chapter) => chapter.id}
      renderItem={({item}) => <Box item={item} navigation={navigation} />}
      extraData={chapters}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    backgroundColor: 'white',
    marginVertical: 7,
    marginHorizontal: 15,
    elevation: 8,
    borderRadius: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 7,

    paddingHorizontal: 12,
  },
  txtStyle: {
    paddingHorizontal: 10,
    color: '#808080',
    fontSize: 14,
  },
  tags: {
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  txtTag: {
    backgroundColor: '#E8E8E8',
    fontSize: 11,
    fontWeight: 'bold',
    marginRight: 10,
    borderRadius: 5,
    color: '#4E4E4E',
  },
});

export default PreviewContent;
