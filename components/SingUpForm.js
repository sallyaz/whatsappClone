import {StyleSheet} from 'react-native';
import React, {useState} from 'react';

// Reusable
import TextElement from '../reusable/TextElement';

// Icons
import Icon from 'react-native-vector-icons/Feather';
import Buttonelement from '../reusable/Buttonelement';

// fixture
import {signUpData} from '../fixture/signInData.json';
import { formHandler } from '../utils/formHandler';


const SingUpForm = () => {

  const inputHadler = (id, value) => {
    id == 'First Name' || id == 'Last Name' ? formHandler(id, value) : 'Invalid Input';
  };

  const createFormsLayout = signUpData.map(({label, icon}, key) => {
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
        title={'Sign Up'}
        disabled={true}
        onPress={() => {
          inputHadler();
        }}
        style={{marginTop: 30}}
      />
    </>
  );
};

export default SingUpForm;

const styles = StyleSheet.create({});
