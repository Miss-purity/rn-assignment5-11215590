import { StyleSheet, Text, View } from 'react-native'
import {React, useState, useContext, createContext} from 'react'

const ThemeContext = createContext();



export const ThemeProvider=({children})=>{
 const [isDarkMode, setIsDarkMode] =useState(false)


 const toggleTheme=()=>{
    setIsDarkMode(prevMode=>!prevMode)
 };

 const theme={
    isDarkMode,
    toggleTheme,
    colors: isDarkMode? {
        backgroundColor: '#171726',
        text:'#fff',
        containerColor: '#222745'
    } :{
        backgroundColor:'#fff',
        text:'black'
    }
 };
    return(
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    )
}


export const useTheme=()=> useContext(ThemeContext)