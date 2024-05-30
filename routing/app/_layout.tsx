import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    // le composant <Stack /> permet d'intégrer au routing les élément enfants qu'il contient et de naviguer entre ces derniers //
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      {/* <Stack.Screen /> correspond à une page accessible depuis votre composant actuel */}
      <Stack.Screen name="index" />
      <Stack.Screen name="details" />
    </Stack>
  );
}
