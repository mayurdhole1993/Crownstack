
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:'#fff',
    },
    header:{
        backgroundColor: '#e98013', position: 'relative'
    },
    menuIcon:{
        width: 18, resizeMode: 'contain'
    },
    whiteText:{
        color: '#fff'
    },
    mainContainer:{
        flexDirection:'row',backgroundColor:'#f1f1f1',borderRadius:15,padding:10 ,marginTop:10,borderColor:'#e98013',borderWidth:1
    },
    imageShpae:{
        height: 60,
        width: 60,
        borderRadius: 40,
        overflow:'hidden',
    },
    footerIcon:{
        width:24,
        height:24,
        resizeMode:'contain',
        opacity:0.4
    },
    containerSpiner: {
        flex: 1,
        justifyContent: "center"
    },

});

export { styles }
