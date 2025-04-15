import { FlatList, SafeAreaView, StyleSheet, Text, View,Switch} from 'react-native'
import React from 'react'
import { styles } from '../Styles/Styles'
import AntDesign from '@expo/vector-icons/AntDesign';   
import {set} from '../Data/data';
import { useTheme } from '../Src/ThemeContext';

export default function SettingsScreen() {

  const theme = useTheme();

  const {isDarkMode} = theme;
  return (
    <SafeAreaView style={[styles.settingsContainer, {backgroundColor:theme.colors.backgroundColor}]}>
    <View style={styles.middle}>
      <Text style={[styles.middleText, {color:theme.colors.textColor}]} >Settings</Text>
    </View>
    <View>
    <FlatList
     data={set}
     renderItem={({item})=>{
      return(
        <View style={[styles.drop,{backgroundColor:theme.colors.backgroundColor}]}>
          
          <Text style={[styles.language, {color:theme.colors.textColor}]}>{item.name}
          </Text>
          {React.cloneElement(item.icon(),
            {tintColor : isDarkMode ? 'white':'black'})}
        </View>
        )}}
    />
    </View>

    <View style={styles.theme}>
      <Text style={[styles.textTheme , {color:theme.colors.textColor}]} >Theme</Text>   

      <Switch
        trackColor={{false: '#767577', true: '#80ed8d'}}
        thumbColor={'white'}
        ios_backgroundColor='#3e3e3e'
        value={theme.isDarkMode}
        onValueChange={theme.toggleTheme}
        
      /> 
    </View>
    </SafeAreaView>
  )
}

//

