import {Platform, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import colors from '../constants/colors';

const TextElement = props => {
  const onInputChangeHandler = input => {
    props.onInputChange(props.id, input);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.lable}>{props.lable}</Text>

      <View style={styles.inputContainer}>
        {props.icon && (
          <props.iconPack
            style={styles.icon}
            name={props.icon}
            size={props.size || 20}
            color={colors.grey}
          />
        )}
        <TextInput style={styles.input} onChangeText={onInputChangeHandler} />
      </View>

      {props.errorText && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{props.errorText}</Text>
        </View>
      )}
    </View>
  );
};

export default TextElement;

const styles = StyleSheet.create({
  container: {width: '100%'},
  inputContainer: {
    width: '100%',
    backgroundColor: colors.nearlyWhite,
    paddingHorizontal: 10,
    paddingVertical: Platform.OS == 'ios' ? 10 : 0,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
  input: {
    color: colors.lightGray,
  },
  lable: {
    color: colors.textColor,
    marginVertical: 8,
    fontFamily: 'bold',
  },
  errorContainer: {
    marginVertical: 5,
  },
  errorText: {
    color: 'red',
    fontSize: 13,
    fontFamily: 'regular',
    letterSpacing: 0.3,
  },
});
