import { glob } from "glob";
import { StyleSheet } from "react-native";

const globalStyles  = StyleSheet.create({
    contenedor : {
        flex:1
    },
    contenido : {
        marginHorizontal : '2.5%',
        flex : 1,
    },
    reserva: {
        flex: 1,
        alignSelf: 'center',
        flexDirection: 'column',
        justifyContent: 'center',

    },
    boton : {
        backgroundColor: '#FF6961',
        marginBottom: 15,
        width : '100%',
        padding : 15,
        borderRadius : 10,
        alignItems :'center',
        marginTop:40,
    },
    botonTexto : {
        textTransform : 'uppercase',
        fontWeight : 'bold',
        color : '#000'
    },
    titulo:{
        textAlign : 'center',
        marginTop : 40,
        marginBottom : 20,
        fontSize : 30
    },
    imagen:{
        height : 300,
        width : '100%'
    },
    cantidad : {
        marginVertical : 20,
        textAlign:'center',
        fontSize : 24,
        fontWeight: 'bold'
    }
})

export default globalStyles ;