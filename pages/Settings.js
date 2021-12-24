import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button ,View } from 'react-native';
export default function Settings() {
  return (
    <View style={styles.container}>
      <Text style={styles.baseText}>
      Keitai
      <Text style={styles.innerText} > App</Text>
    </Text>
      <Text>App Just For You!</Text>

      <Button
        title="Sign in"
        color="gray"
      />
      <StatusBar style="auto" />
    </View>

    
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffd23f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  baseText: {
    fontWeight: 'bold'
  },
  innerText: {
    color: 'red'
  }
});


