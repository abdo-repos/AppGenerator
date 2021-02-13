import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MyTabs from './routes/MyTabs';
import Home from './screens/HomeScreen';
import {ActivityIndicator, View, StatusBar} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {useNetInfo} from '@react-native-community/netinfo'
import sendData from './api/sendData'




export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const netInfo = useNetInfo();

 

  useEffect(() => {
    setTimeout(async () => {
      let userName = null;
      try {
        userName = await AsyncStorage.getItem('user');
      } catch (e) {
        console.log(e);
      }
      setUser(userName);
      setIsLoading(false);
      
    }, 500);
  }, []);

  useEffect(()=>{
    setTimeout(async ()=>{
      if(user){
     let data = [];
        try{
         let savedData = await AsyncStorage.getItem('data') 
         if(savedData)
          data = JSON.parse(savedData)
        if(netInfo.isInternetReachable){
          if(data)
            data.map(d=>sendData(d))
          sendData({user,date:new Date()})
          console.log('send')
          await AsyncStorage.removeItem('data')
        }else{
          await AsyncStorage.setItem('data',JSON.stringify([...data,{user,date:new Date()}]))
          
        }
        }catch(e){
          console.log(e);
        }
        
     }
    
},1000)
    
  },[user])

  const login = async (firstName, lastName) => {
    try {
      const userName = firstName + ' ' + lastName;
      await AsyncStorage.setItem('user', userName);
      setUser(userName);
    } catch (e) {
      // saving error
    }
  };

  if (isLoading) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
        <ActivityIndicator size="large" color="#009387" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {user ? <MyTabs /> : <Home login={login} />}
    </NavigationContainer>
  )
}
