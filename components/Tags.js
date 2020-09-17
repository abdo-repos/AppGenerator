import React, {useState} from 'react';
import {Text, TouchableOpacity, View, StyleSheet, FlatList} from 'react-native';

const Tags = ({tags, filterByTag}) => {
  const [tagSelected, setTagSelected] = useState(null);

  const handlePress = (id) => {
    id = id === tagSelected ? null : id;
    setTagSelected(id);
    filterByTag(id);
  };

  const BoxTag = ({item}) => {
    const backgroundColor = item.id === tagSelected ? '#50C787' : 'white';
    return (
      <TouchableOpacity
        key={item.id}
        style={[styles.button, {backgroundColor}]}
        onPress={() => handlePress(item.id)}>
        <Text style={styles.TextStyle}>{item.libelle.toUpperCase()}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={tags}
        keyExtractor={(tag) => tag.id}
        renderItem={BoxTag}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        extraData={tagSelected}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    marginVertical: 5,
    paddingHorizontal: 20,
    borderBottomWidth: 0.7,
    borderColor: '#DCDCDC',
  },
  button: {
    marginHorizontal: 5,
    paddingHorizontal: 15,
    marginVertical: 6,
    paddingVertical: 7,
    elevation: 6,
    borderRadius: 18,
    justifyContent: 'center',
  },
  TextStyle: {
    color: '#4E4E4E',
    fontSize: 13,
    fontWeight: 'bold',
  },
});

export default Tags;
