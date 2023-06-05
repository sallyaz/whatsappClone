import {
  Dimensions,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import colors from '../constants/colors';

const TextElement = props => {
  const onInputChangeHandler = input => {
    props.onInputChange(props.id, input);
  };

  return (
    <View style={styles.container}>
      {props.icon && (
        <View style={styles.icon}>
          <props.iconPack
            name={props.icon}
            size={props.size || 22}
            color={colors.primary}
          />
        </View>
      )}

      <View style={styles.inputContainer}>
        <TextInput
          placeholderTextColor={colors.textColor}
          placeholder={props.lable}
          autoCapitalize="none"
          style={styles.input}
          cursorColor={colors.textColor}
          onChangeText={onInputChangeHandler}
        />
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
  container: {
    width: Dimensions.get('window').width * 0.75,
    height: Dimensions.get('window').height * 0.07,
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  inputContainer: {
    paddingVertical: Platform.OS == 'ios' ? 10 : 0,
    borderBottomWidth: 1,
    borderColor: colors.lightGray,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    position: 'absolute',
    width: 50,
    height: Dimensions.get('window').height * 0.08,
    left: '-12%',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 250,
  },
  input: {
    color: colors.textColor,
    width: '100%',
  },
  errorContainer: {
    marginVertical: 5,
  },
  errorText: {
    color: colors.error,
    fontSize: 13,
    fontFamily: 'regular',
    letterSpacing: 0.3,
  },
});
