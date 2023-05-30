import {StyleSheet} from 'react-native';
import React from 'react';

// Reusable
import TextElement from '../reusable/TextElement';

// Icons
import Icon from 'react-native-vector-icons/Feather';
import Buttonelement from '../reusable/Buttonelement';

// fixture
import {signInData} from '../fixture/signInData.json';
import {validate} from 'validate.js';

const SignInForm = () => {
  const inputHadler = (inputId, inputValue) => {
    // inputId == "Email" ? validate({"Email": inputValue}, {})
  };

  const createFormsLayout = signInData.map(({label, icon}, key) => {
    return (
      <TextElement
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
    <>
      {createFormsLayout}
      <Buttonelement
        disabled={true}
        title={'Sign In'}
        onPress={() => {
          console.log('Clicked');
        }}
        style={{marginTop: 30}}
      />
    </>
  );
};

export default SignInForm;

const styles = StyleSheet.create({});
