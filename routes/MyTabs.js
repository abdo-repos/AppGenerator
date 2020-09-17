import React from 'react';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MyStack from './MyStack';
import data from '../assets/Data.json';

const Tab = createMaterialBottomTabNavigator();

const MyTab = () => {
  let icon=[]
  const tabs = data.onglets.map((tab) => (
    <Tab.Screen
      key={tab.idOnlget}
      name={tab.ongletName}
      children={() => (
        <MyStack tab={tab} tags={data.tags} appName={data.name} />
      )}
      options={{
        tabBarLabel: tab.ongletName,
      }}
    />
  ));
  return (
    <Tab.Navigator
      initialRouteName="name1"
      activeColor="#50C787"
      inactiveColor="#808080"
      shifting={false}
      barStyle={{backgroundColor: '#FFFFFF', elevation: 8}}>
      {tabs}
    </Tab.Navigator>
  );
};

export default MyTab;
