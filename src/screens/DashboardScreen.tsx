// src/screens/DashboardScreen.tsx
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useSupabase } from '../services/SupabaseProvider';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation'; // Import the navigation types

export default function DashboardScreen() {
  const supabase = useSupabase();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'Dashboard'>>();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigation.navigate('Login'); // 'Login' is now recognized as a valid route
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Dashboard!</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});
