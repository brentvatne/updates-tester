import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";
import * as Updates from "expo-updates";
import Constants from "expo-constants";
import { useState } from "react";

export default function Index() {
  const [channel, setChannel] = useState(Updates.channel ?? 'main');
  const [url, setUrl] = useState(Constants.expoConfig?.updates?.url ?? '');

  return (
    <View style={styles.container}>
      <Text>URL</Text>
      <TextInput style={styles.inputs} value={url} onChangeText={setUrl} autoCapitalize="none" autoCorrect={false} />
      <Text>Channel</Text>
      <TextInput style={styles.inputs} value={channel} onChangeText={setChannel} autoCapitalize="none" autoCorrect={false} />
      <Button title="Go" onPress={() => {
        Updates.setUpdateURLAndRequestHeadersOverride({
          updateUrl: url,
          requestHeaders: {
            'expo-channel-name': channel
          }
        });
        Alert.alert('Update URL and Request Headers Override', 'Successfully set update URL and request headers override. Close and re-open the app for it to take effect.');
      }}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  inputs: {
    height: 60,
    padding: 5,
    borderRadius: 5,
    width: 300,
    margin: 10, 
    backgroundColor: '#fff'
  },
});