import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useColorScheme } from '@/hooks/useColorScheme';
import { StyleSheet, Text, View } from 'react-native';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
   <View style={styles.conatiner}>
   <View style={styles.header}>
   <MaterialIcons name="menu" size={24} color="black" />
   <Text style={styles.headerTaxt}>BYKEA</Text>
   <MaterialIcons name="add-call" size={24} color="black" />

   {/* Banner image  */}
     <View style={styles.bannerImageView}></View>
   </View>
   </View>
  ); 
}

const styles = StyleSheet.create({
  conatiner:{
    flex:1,
  },
  headerTaxt:{
    fontWeight:"bold",
    letterSpacing:3,
    fontSize:21,
  },
  header:{
    height:50,
    borderBottomColor: "#ccc",
    borderBottomWidth:1,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between", 
    paddingHorizontal:16,
  },
  bannerImageView:{
    flex:1,
  }
})
