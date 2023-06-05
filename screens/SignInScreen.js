import {
  StyleSheet,
  TouchableOpacity,
  Text,
  SafeAreaView,
  View,
  Dimensions,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import React from 'react';

// Reusable
import InputElement from '../reusable/InputElement';

// Icons
import Icon from 'react-native-vector-icons/Feather';
import Buttonelement from '../reusable/Buttonelement';
import Login from '../assets/Images/Mobile-login-cuate.svg';

// fixture
import {signInData} from '../fixture/signInData.json';
import {formHandler} from '../utils/formHandler';
import colors from '../constants/colors';

const SignInScreen = ({navigation}) => {
  const inputHadler = (id, value) => {
    id ? formHandler(id, value) : 'Invalid Value';
  };

  const createFormsLayout = signInData.map(({label, icon}, key) => {
    return (
      <InputElement
        key={key}
        id={label}
        lable={label}
        icon={icon}
        iconPack={Icon}
        onInputChange={inputHadler}
      />
    );
  });

  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar
        backgroundColor={colors.nearlyWhite}
        barStyle={'dark-content'}
      />
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.loginContainer}>
          <Login />
        </View>
      </TouchableWithoutFeedback>

      <View style={styles.loginContainer}>
        <Text style={styles.Login}>Login</Text>
        {createFormsLayout}
        <Buttonelement
          disabled={true}
          title={'Sign In'}
          onPress={() => {
            console.log('Clicked');
          }}
          style={{marginTop: 30}}
        />
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.bottomText}>
          Don`t have an account yet? <Text style={styles.text}>Sign Up</Text>
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
    backgroundColor: colors.nearlyWhite,
  },
  text: {
    color: colors.blue,
    alignSelf: 'center',
  },
  Login: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.textColor,
  },
  loginContainer: {
    height: Dimensions.get('window').height * 0.45,
    width: Dimensions.get('window').width * 0.85,
    alignSelf: 'center',
  },
  bottomText: {
    alignSelf: 'center',
    color: colors.textColor,
    width: Dimensions.get('window').width * 0.5,
  },
});
