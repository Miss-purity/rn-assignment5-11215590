import {StyleSheet,Platform} from 'react-native';
import { transactionProcesses } from '../Data/data';


export const styles=StyleSheet.create({

  container:{
    flex:1
  },
    homecontainer: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Platform.OS==='android'? 60 : 0
      },

      header: {
        flexDirection:'row',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal: 20

      },
      headerLeft:{
        width: '50%',
        flexDirection: 'row',
        justifyContent:'space-between',

      },
      headertext:{
       
      },
      search:{
        backgroundColor: '#dee0de',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: '50%'
      },
      smalltext:{
        color: 'grey'
      },
      bigtext:{
        fontSize: 17,
        marginTop: 10,
        fontWeight: 'bold'
      },
     

      cardImage:{
          marginTop: Platform.OS === 'ios'? 40:15,
          marginLeft: Platform.OS === 'ios'? 40:15

      },

     

      innerFlatlist:{
        marginLeft: 33,
        height: 70,
        alignItems: 'center',
        marginTop: 20
    
      },
         innerbackground:{
            backgroundColor:'#dee0de',
            height: 50,
            width:50,
            borderRadius:'50%',
            alignItems:'center',
            justifyContent:'center'

         },
         firstText:{
         fontSize:20,
         fontWeight:'bold',
         marginLeft:15
         },

        secondText:{
            color:'blue',
            marginLeft:170
           
        } ,

        transactionsHeader:{
             flexDirection:'row',
             alignItems:'center',
             marginVertical:20
        },
        big:{
            flexDirection:'row',
            justifyContent:'space-between',
            padding: 15,
            alignItems:'center',
         },
        small:{
         flexDirection: 'row',
         alignItems: 'center'
        
        },
        imgBackground:{
            padding:20,
            borderRadius:'50%',
            marginRight:10,
            backgroundColor:'#dee0de'
        },
         mainText:{
            fontWeight: 'bold',
            fontSize:15
         },
         subText:{
            fontSize:12,
            color:'#dee0de'
         },
         myAmount:{
            fontWeight:'bold'
         },
         settingsContainer:{
          paddingTop:Platform.OS==='android'?60:0,
          flex: 1
         },
         middle:{
          alignItems:'center',
          marginBottom: 40
         },
         middleText:{
          fontSize:20,
          fontWeight:'bold',
        
         },
         language:{
          marginLeft:20,
          fontWeight:'bold',
          fontsize:50
         },
         drop:{
          marginTop:10,
          flexDirection:'row',
          justifyContent:"space-between",
          borderBottomWidth:1,
          borderBottomColor:'#dee0de',
          marginBottom:16,
          paddingBottom:4
          
         },
         theme:{
          alignItems:'center',
          flexDirection:'row',
          justifyContent:'space-between',
          marginTop:25,
          paddingHorizontal:20
        
         },
         textTheme:{
          fontSize:20,
          fontWeight:'bold',
         paddingLeft:15
         }

        
    })