import { useNavigation } from '@react-navigation/core';
import React,{useState,useEffect} from 'react';
import { KeyboardAvoidingView,StyleSheet,TouchableOpacity,Text,TextInput,View } from 'react-native';
import firebase from '../Services/Firebase';

const LoginScreen = () => {

    const [email,setEmail] = useState('')
    const [password,setPasword] = useState('')
    const navigate = useNavigation()
    useEffect(()=>{
        const unsubcribe = firebase.auth.onAuthStateChanged(user=>{
            if(user){
                navigate.navigate('Home')
            }
        })

        return unsubcribe
    },[])

    const handleSignUp = ()=>{
        firebase.auth.createUserWithEmailAndPassword(email,password)
            .then(userCredentials=>{
                const user =userCredentials.user;
                console.log(user.email);
            })
            .catch(error=>alert(error.message))
    }

    const handleLogin = ()=>{
        firebase.auth.signInWithEmailAndPassword(email,password)
            .then(userCredentials=>{
                const user =userCredentials.user;
                console.log('Logged in with: ',user.email);
            })
            .catch(error=>alert(error.message))
    }

    return (  
        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding"
        >
        <View
            style = {styles.inputContainer}
        >
            <TextInput 
                placeholder = 'Email'
                value = {email}
                onChangeText = {text =>setEmail(text)}
                style = {styles.input}
            />
            <TextInput 
                placeholder = 'Password'
                value = {password}
                onChangeText = {text =>setPasword(text)}
                style = {styles.input}
                secureTextEntry
            />
        </View>
        <View style = {styles.buttonContainer}>
            <TouchableOpacity 
                onPress = {handleLogin}
                style = {styles.button}
            >
                <Text style = {styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                onPress = {handleSignUp}
                style = {[styles.button,styles.buttonOutline]}
            >
                <Text style = {styles.buttonOutlineText}>Sigin</Text>
            </TouchableOpacity>
        </View>
        </KeyboardAvoidingView>
    );
}
 
export default LoginScreen;

const styles = StyleSheet.create({
    container:{
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
    },
    inputContainer:{
        width:'80%'
    },
    input:{
        backgroundColor:'white',
        paddingHorizontal:15,
        paddingHorizontal:10,
        borderRadius:10,
        marginTop : 4,
    },
    buttonContainer:{
        width :'60%',
        justifyContent: 'center',
        alignItems:'center',
        marginTop:40,
    },
    button:{
        backgroundColor:'#0782F9',
        width : '100%',
        padding : 15,
        borderRadius : 10,
        alignItems :'center'
    },
    buttonText:{
        color: 'white',
        fontWeight :'700',
        fontSize : 16,
    },
    buttonOutline:{
        backgroundColor:'white',
        marginTop : 5,
        borderColor : '#0782F9',
        borderWidth: 2,
    },
    buttonOutlineText:{
        color : '#0782F9',
        fontWeight :'700',
        fontSize :16
    },
    
    
})