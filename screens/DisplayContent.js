import React, {useState} from 'react';
import {View, StatusBar} from 'react-native';
import Tags from '../components/Tags';
import {useNavigation} from '@react-navigation/native';

import PreviewContent from '../components/PreviewContent';


const DisplayContent = ({tab, tags}) => {
  const [data, setData] = useState({
    currentData: tab.chapters,
    defaultData: tab.chapters,
  });
  const navigation = useNavigation();
  const filterbyTag = (id) => {
    if (id) {
      const filtredData = data.defaultData.filter((chapter) =>
        chapter.tags.some((tag) => tag.id === id),
      );
      setData({currentData: filtredData, defaultData: data.defaultData});
    } else
      setData({currentData: data.defaultData, defaultData: data.defaultData});
  };

  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <Tags tags={tags} filterByTag={filterbyTag} />
      <View style={{flex: 1}}>
        <PreviewContent chapters={data.currentData} navigation={navigation} />
      </View>
    </View>
  );
};

export default DisplayContent;
