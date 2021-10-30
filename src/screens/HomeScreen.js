import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/core';
import React from 'react';
import {StyleSheet,TouchableOpacity,Text,View } from 'react-native';
import firebase from '../Services/Firebase'

const Home = () => {

    const navigate = useNavigation()
    const handleSingOut=()=>{
            firebase.auth
            .signOut()
            .then(()=>{
                navigate.replace('Login')
            })
            .catch(error=>alert(error.message))
    }

    return ( 
        <View style = {styles.container}>
           <Text>Email:{firebase.auth.currentUser?.email} </Text>
            <TouchableOpacity 
            onPress={handleSingOut}
            style ={styles.button}>
                <Text style={styles.buttonText}>Sign out</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={()=>{navigate.navigate('NuevaOrden')}}
            style ={styles.button}>
                <Text style={styles.buttonText}>Nueva Orden</Text>
            </TouchableOpacity>
        </View>
     );
}
 
export default Home;

const styles = StyleSheet.create({
    container:{
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
    },
    button:{
        backgroundColor:'#0782F9',
        width : '60%',
        padding : 15,
        borderRadius : 10,
        alignItems :'center',
        marginTop:40,
    },
    buttonText:{
        color: 'white',
        fontWeight :'700',
        fontSize : 16,
    },
})