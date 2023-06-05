import {Dimensions, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import colors from '../constants/colors';

const Buttonelement = props => {
  const enabledBgColor = props.color || colors.primary;
  const disabledBgColor = colors.lightGray;
  const bgColor = props.disabled ? disabledBgColor : enabledBgColor;
  return (
    <TouchableOpacity
      style={{...props.style, ...styles.button, ...{backgroundColor: bgColor}}}
      onPress={props.disabled ? () => {} : props.onPress}>
      <Text
        style={{
          textAlign: 'center',
          width: Dimensions.get('window').width * 0.8,
          color: props.disabled ? colors.grey : colors.nearlyWhite,
        }}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

export default Buttonelement;

const styles = StyleSheet.create({
  button: {
    width: Dimensions.get('window').width * 0.8,
    padding: 15,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});
