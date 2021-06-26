
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:'#fff',
    },
    header:{
        backgroundColor: '#e98013', position: 'relative'
    },
    whiteText:{
        color: '#fff'
    },
    mainContainer:{
        backgroundColor:'#f1f1f1',borderRadius:15,padding:10 ,marginTop:10,borderColor:'#e98013',borderWidth:1
    },
    imageViewContainer:{
        marginTop:0,
        height:200,
        width:'100%',
        overflow:'hidden',
        borderTopLeftRadius:25,
        borderTopEndRadius:25
    },
    statImage:{
        width:'100%',
        height:200,
    },
    floatImage:{
        height: 120,
        width: 120,
        borderRadius: 80,
        borderWidth:10,
        position:'absolute',
        right:130,
        top:40,
    },
    textStyle:{
        color:'#00000085',fontSize:15,marginTop:4
    },
    loadText:{
        marginLeft:165
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
