import { Link } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

// voici le composant affiché pour la route "/" //
export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      {/* <Link /> permet de naviguer vers la page "/details" */}
      <Link href="/details">View details</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
