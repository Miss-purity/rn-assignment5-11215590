import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image} from 'react-native';
import { styles } from './Styles/Styles';
import HomeScreen from './Screens/HomeScreen';
import SettingsScreen from './Screens/SettingsScreen';
import StatisticsScreen from './Screens/StatisticsScreen';
import MycardsScreen from './Screens/MycardsScreen';
import { NavigationContainer, DefaultTheme, DarkTheme} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ThemeProvider } from './Src/ThemeContext';
import { useTheme } from './Src/ThemeContext';



const Tab = createBottomTabNavigator()
 function AppContent() {


  const theme =useTheme();

   const navigationTheme = theme.isDarkMode? DarkTheme : DefaultTheme

  return (
    <NavigationContainer theme={navigationTheme} style={styles.container}>
      <Tab.Navigator screenOptions={{
        headerShown:false
      }}>
        <Tab.Screen name='home' component={HomeScreen}
         options={
          {
            tabBarIcon:({color})=>(
              <Image source={require('./assets/home.png')}
               tintColor={color}
              />
            )
          }
         }
        />
        <Tab.Screen name='My Cards' component={MycardsScreen}
        options={
          {
            tabBarIcon:({color})=>(
              <Image source={require('./assets/myCards.png')}
              tintColor={color}
              />
            )
          }
        }
        />
        <Tab.Screen name='Statistics' component={StatisticsScreen}
        options={
          {
            tabBarIcon:({color})=>(
              <Image source={require('./assets/statictics.png')}
              tintColor={color}
              />
            )
          }
        }
        />
        <Tab.Screen name='Settings' component={SettingsScreen}
        options={
          {
            tabBarIcon:({color})=>(
              <Image source={require('./assets/settings.png')}
              tintColor={color}
              />
            )
          }
        }
        />

      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}


export default function App(){
  return(
    <ThemeProvider>
      <AppContent/>
    </ThemeProvider>
  )
}


