import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import PageContainer from '../components/PageContainer';
import SingUpForm from '../components/SingUpForm';
import SignInForm from '../components/SignInForm';
import colors from '../constants/colors';

// assets
import logo from '../assets/Images/logo.png';

const AuthScreen = props => {
  const [isSignUp, setIsSignUp] = useState(false);
  return (
    <SafeAreaView style={styles.authContainer}>
      <PageContainer>
        <ScrollView>
          <KeyboardAvoidingView
            style={styles.keyboardAvoidingView}
            behavior={Platform.OS === 'ios' ? 'height' : undefined}
            keyboardVerticalOffset={100}>
            <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                source={logo}
                resizeMode={'contain'}
              />
            </View>
            {isSignUp ? <SingUpForm /> : <SignInForm />}
            <TouchableOpacity
              style={styles.signUpAndInButton}
              onPress={() => setIsSignUp(prevState => !prevState)}>
              <Text style={styles.text}>{`  ${
                isSignUp
                  ? 'Already have an account? Sign In'
                  : 'Don`t have an account yet? Sign Up'
              }`}</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </ScrollView>
      </PageContainer>
    </SafeAreaView>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  authContainer: {
    flex: 1,
  },
  signUpAndInButton: {
    marginVertical: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    width: '80%',
    color: colors.blue,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '50%',
  },
  keyboardAvoidingView: {
    flex: 1,
    justifyContent: 'center',
  },
});
