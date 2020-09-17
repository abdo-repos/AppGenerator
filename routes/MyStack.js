import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DisplayContent from '../screens/DisplayContent';
import DetailsContent from '../screens/DetailsContent';

const Stack = createStackNavigator();

const MyStack = ({tab, tags, appName}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: 'black',
        headerTitleStyle: {
          fontWeight: 'bold',
          alignSelf: 'center',
        },
      }}>
      <Stack.Screen
        name="Home"
        children={() => <DisplayContent tab={tab} tags={tags} />}
        options={{title: appName}}
      />
      <Stack.Screen name="Details" component={DetailsContent} />
    </Stack.Navigator>
  );
};

export default MyStack;
