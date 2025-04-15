
import AntDesign from '@expo/vector-icons/AntDesign';

export const transactionProcesses = [
    {
        name:'Sent',
        icon:require('../assets/send.png')
    },
    {
        name:'Receive',
        icon:require('../assets/recieve.png')  
    },
    {
        name:'Loan',
        icon:require('../assets/loan.png')  
    },
    {
        name:'Topup',
        icon:require('../assets/topUp.png')  
    }
]


export const transactions=[
    {
        id:'1',
        name:'Apple Store',
        icon: require('../assets/apple.png'),
        type:'Entertainment',
        amount:'-$5,99',
        color: 'black'
    },
    {
        id:'2',
        name:'Spotify ',
        icon: require('../assets/spotify.png'),
        type:'Music',
        amount:'-$12,99',
        color: 'black'
    },
    {
        id:'3',
        name:'Money Transfer ',
        icon: require('../assets/moneyTransfer.png'),
        type:'Transaction',
        amount:'$300',
        color: 'blue'
    }, {
        id:'4',
        name:'Grocery ',
        icon: require('../assets/grocery.png'),
        type:'Grocery',
        amount:'-$88',
        color: 'black'
    },
]

export const set=[{
    name:'Language',
    id:1,
    icon:()=>(
        <AntDesign name="right" size={20} color="grey" />    
        )
    
},
{
    name:'My Profile',
    id:2,
    icon:()=>(
        <AntDesign name="right" size={20} color="grey" />    
        )
},{
    name:'Contact Us',
    id:3,
    icon:()=>(
        <AntDesign name="right" size={20} color="grey" />    
        )
},{
    name:'Change Password',
    id:4,
    icon:()=>(
        <AntDesign name="right" size={20} color="grey" />    
        )
},{
    name:'Privacy Policy',
    id:5,
    icon:()=>(
        <AntDesign name="right" size={20} color="grey" />    
        )
},
 

]
