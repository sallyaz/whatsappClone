import {
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Feather';

// Constants
import colors from '../constants/colors';

// Assets
import whatsappBackground from '../assets/Images/whatsapp-background.jpg';

const ChatScreen = () => {
  const [messageText, setMessageText] = useState('');
  const sendMessage = useCallback(() => {
    setMessageText('');
  }, [messageText]);

  return (
    <SafeAreaView
      edges={['right', 'left', 'bottom']}
      style={styles.chatContainer}>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS == 'ios' ? 'padding' : ''}
        keyboardVerticalOffset={100}>
        <ImageBackground
          source={whatsappBackground}
          style={styles.chatBackground}></ImageBackground>

        <View style={styles.inputContainer}>
          <TouchableOpacity
            style={styles.mediaButton}
            onPress={() => console.log('Plus')}>
            <Icon name="plus" size={30} color={colors.blue} />
          </TouchableOpacity>

          <TextInput
            style={styles.textbox}
            value={messageText}
            onChangeText={text => setMessageText(text)}
            onSubmitEditing={sendMessage}
          />

          <TouchableOpacity style={styles.mediaButton} onPress={sendMessage}>
            <Icon
              name={messageText ? 'arrow-right-circle' : 'camera'}
              size={30}
              color={colors.blue}
            />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  chatContainer: {
    flex: 1,
    height: '100%',
  },
  chatBackground: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    paddingVertical: 6,
    paddingHorizontal: 10,
    height: 50,
  },
  textbox: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: colors.lightGray,
    marginHorizontal: 10,
    paddingHorizontal: 12,
  },
  mediaButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
