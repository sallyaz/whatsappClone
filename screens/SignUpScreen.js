import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
} from 'react-native';
import React, {useReducer} from 'react';

// Reusable
import InputElement from '../reusable/InputElement';

// Icons
import Icon from 'react-native-vector-icons/Feather';
import Buttonelement from '../reusable/Buttonelement';
import Signup from '../assets/Images/Mobile-login-pana.svg';

// fixture
import {signUpData} from '../fixture/signInData.json';
import {formHandler} from '../utils/formHandler';
import colors from '../constants/colors';

const reducer = (state, action) => {
  const {validationResult, id} = action;

  let isValid = true;

  const updateValidities = {
    ...state.inputValidities,
    [id]: validationResult,
  };

  for (const key in updateValidities) {
    if (updateValidities[key] !== undefined) {
      isValid = false;
      break;
    }
  }
  return {
    inputValidities: updateValidities,
    formIsValid: isValid,
  };
};

const initialState = {
  inputValidities: {
    'First Name': false,
    'Last Name': false,
    Email: false,
    Password: false,
  },
  formIsValid: false,
};

const SignUpScreen = ({navigation}) => {
  const [formState, dispatchFormState] = useReducer(reducer, initialState);
  const inputHadler = (id, value) => {
    id
      ? dispatchFormState({id, validationResult: formHandler(id, value)})
      : 'Invalid Value';
  };

  const createFormsLayout = signUpData.map(({label, icon}, key) => {
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
        <View style={styles.signUpContainer}>
          <Signup />
        </View>
      </TouchableWithoutFeedback>

      <View style={styles.signUpContainer}>
        <Text style={styles.signUp}>Sign up</Text>
        {createFormsLayout}
        <Buttonelement
          title={'Sign Up'}
          disabled={!formState.formIsValid}
          onPress={() => {
            inputHadler();
          }}
          style={{marginTop: 30}}
        />
      </View>

      <TouchableOpacity
        style={styles.signUpAndInButton}
        onPress={() => navigation.navigate('SignIn')}>
        <Text style={styles.bottomText}>
          Already have an account? <Text style={styles.text}>Sign In</Text>
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SignUpScreen;

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
  signUp: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.textColor,
  },
  signUpContainer: {
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
