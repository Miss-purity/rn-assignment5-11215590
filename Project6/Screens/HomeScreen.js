import { StyleSheet, Text, View,Image, SafeAreaView,FlatList } from 'react-native'
import React, { use } from 'react'
import {styles} from '../Styles/Styles'
import { transactionProcesses, transactions } from '../Data/data' 
import { useTheme } from '../Src/ThemeContext'


export default function HomeScreen() {
    const theme= useTheme();
    const {isDarkMode} = theme

  return (
    <SafeAreaView style={[styles.homecontainer, {backgroundColor:theme.colors.backgroundColor}]}>
        <View style = {styles.header}>
            <View style={styles.headerLeft}>
                <View >
                <Image 
                source = {require('../assets/profile.png')} /> 
                </View>
                <View style={styles.headertext}>
                <Text style= {styles.smalltext}>Welcome back,</Text>
                <Text style= {[styles.bigtext,{color:theme.colors.text}]}>Eric Atsu</Text>
                </View>
            </View>
            <View style={[styles.search, {backgroundColor:theme.colors.containerColor}]}>
                <Image
                source = {require('../assets/search.png')}
                 tintColor={isDarkMode? 'white': 'black'}
                />
            </View>
        </View>
        <Image 
        source ={require('../assets/Card.png')}
            style = {styles.cardImage}
        />
        <View style={styles.transactionProcessesContainer}>
            <FlatList
                data={transactionProcesses}
                renderItem={({item})=>{
                    return(
                        <View style={styles.innerFlatlist}>
                            <View style= {[styles.innerbackground, {backgroundColor:theme.colors.containerColor}]}>
                                <Image source={item.icon}
                                  tintColor={isDarkMode? 'white': 'black'}
                                />
                            </View>
                            <Text>{item.name}</Text>
                        </View>
                    )
                }}
                horizontal
            />
        </View>
        <View style={styles.transactionsHeader}>
            <Text style = {[styles.firstText, {color:theme.colors.text}]}>Transaction</Text>
            <Text style = {styles.secondText}>See All</Text>
        </View>

        <View style={{ height:300}}>
            <FlatList
                data={transactions}
                renderItem={({item})=>{
                    return(
                        <View style={styles.big}>
                            <View style={styles.small}>
                                <View style= {[styles.imgBackground, {backgroundColor:theme.colors.backgroundColor}]}>
                                <Image source={item.icon}
                                
                                 tintColor={
                                    isDarkMode?
                                    (item.id==='1' || item.id === '3'? 'white':'undefined'):
                                    (item.id==='1' || item.id === '3'? 'black':'undefined')
                                 }
                                />
                                </View>
                                <View>
                                    <Text style={[styles.mainText, {color:theme.colors.text}]}>{item.name}</Text>
                                    <Text style={styles.subText}>{item.type}</Text>
                                </View>
                            </View>
                            <View>
                                <Text style={[styles.myAmount, {color: isDarkMode?
                                 (item.id==='3'? item.color : 'white'):(item.id==='3'? item.color:'black')}]}>{item.amount}</Text>
                            </View>
                        </View>
                    )
                }}
            />
        </View>
    </SafeAreaView>
  )
   
    
}

