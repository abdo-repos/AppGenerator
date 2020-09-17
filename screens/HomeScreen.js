import React, {useState} from 'react';
import {
  View,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  Platform,
  TouchableOpacity,
  Alert,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Home = ({login}) => {
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    isValidFirstName: true,
    isValidLastName: true,
  });

  const handleValidInput = (input) => {
    input === 'first'
      ? setData({...data, isValidFirstName: data.firstName.trim().length > 3})
      : setData({...data, isValidLastName: data.lastName.trim().length >= 3});
  };

  const handleLogin = () => {
    if (data.firstName.length === 0 || data.lastName.length === 0) {
      Alert.alert(
        'Wrong Input!',
        'First name or Last name field cannot be empty.',
        [{text: 'Okay'}],
      );
      return;
    }
    if (data.firstName.trim().length <= 3 || data.lastName.trim().length < 3) {
      Alert.alert(
        'Wrong Input!',
        'First name or Last name field is not completed',
        [{text: 'Okay'}],
      );
      return;
    }
    login(data.firstName, data.lastName);
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome !</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <Text style={styles.textFooter}>Please enter your name</Text>
        <Text style={styles.text_footer}>First name</Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" size={20} />
          <TextInput
            onChangeText={(val) => setData({...data, firstName: val})}
            onEndEditing={() => handleValidInput('first')}
            placeholder="first name"
            placeholderTextColor="#666666"
            style={styles.textInput}
          />
        </View>
        {data.isValidFirstName ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>
              first name must be at least 4 characters long.
            </Text>
          </Animatable.View>
        )}
        <Text style={styles.text_footer}>Last name</Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" size={20} />
          <TextInput
            onChangeText={(val) => setData({...data, lastName: val})}
            onEndEditing={() => handleValidInput()}
            placeholder="last name"
            placeholderTextColor="#666666"
            style={styles.textInput}
          />
        </View>
        {data.isValidLastName ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>
              last name must be at least 3 characters long.
            </Text>
          </Animatable.View>
        )}
        <TouchableOpacity onPress={() => handleLogin()} style={styles.signIn}>
          <Text style={styles.textSign}>Continue</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009387',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  footer: {
    flex: 2.5,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 16,
  },
  textFooter: {
    fontWeight: 'bold',
    color: '#05375a',
    fontSize: 22,
    alignSelf: 'center',
    marginBottom: 25,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: '#009387',
    borderWidth: 1,
    marginTop: 50,
  },
  textSign: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#009387',
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 12,
  },
});
export default Home;
