import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ChatListScreen = props => {
  return (
    <View style={styles.chatContainer}>
      <Text>ChatListScreen</Text>
      <Button
        title="Settings"
        onPress={() => props.navigation.navigate('ChatScreen')}
      />
    </View>
  );
};

export default ChatListScreen;

const styles = StyleSheet.create({
  chatContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
