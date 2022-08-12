
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Alert } from 'react-native'
import React, {useRef, useState} from 'react'
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha'
import {firebaseConfig} from '../config'
import firebase from 'firebase/compat/app'

const Otp = () => {
 const [phoneNumber, setPhoneNumber] = useState('')
 const [code, setCode] = useState('')
 const [verificationId, setVerificationId] = useState('')
 const recaptchaVerifier = useRef(null)

 const sendVerification = () =>{
    const phoneProvider = new firebase.auth.PhoneAuthProvider();
    phoneNumber
    .verifyPhoneNumber(phoneNumber, recaptchaVerifier.current)
    .then(setVerificationId);
    setPhoneNumber('');
 };
 const confirmCode =() =>{
    const credential = firebase.auth.PhoneAuthProvider.credential(
        verificationId,
        code 
    );
    firebase.auth().signInWithCredential(credential)
    .then(() =>{
        setCode('')
    })
    .catch((error) =>{
        //show alert in case of errors
        alert(error)
    })
    Alert.alert(
        'Login Successfull'
    )
 }
  return(
    <View style={styles.container}>
        <FirebaseRecaptchaVerifierModal 
        ref={recaptchaVerifier}
        firebaseConfig={firebaseConfig}
        />
        <Text style={styles.otpText}>Login Using OTP</Text>
        <TextInput placeholder='Phone number with country code '
        onChange={setPhoneNumber}
        keyboardType='phone-pad'
        autoCompleteType='tel'
        style={styles.TextInput}/>
        <TouchableOpacity style={styles.sendVerification} onPress={sendVerification}>
            <Text style={styles.buttonText}> Send verification</Text>

        </TouchableOpacity>
        <TextInput placeholder='Confirm code '
        onChange={setCode}
        keyboardType='number-pad'
        style={styles.TextInput}/>
        <TouchableOpacity style={styles.sendCode} onPress={confirmCode}>
            <Text style={styles.buttonText}> Confirm verification</Text>

        </TouchableOpacity>

    </View>
  )
 }

export default Otp

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#000',
        alignItems:'center',
        justifyContent:'center',

    },
    TextInput:{
        paddingTop:40,
        paddingBottom:20,
        paddingHorizontal:20,
        fontSize:24,
        borderBottomColor:'#fff',
        borderBottomWidth:2,
        marginBottom:20,
        textAlign:'center',
        color:'#fff'
    },
    sendVerification:{
        padding:20,
        backgroundColor:'#3498db',
        borderRadius:20,

    },
    sendCode:{
        padding:20,
        backgroundColor:'9b59b6',
        borderRadius:10,   
    },
    buttonText:{
        textAlign:'center',
        color:'#fff',
        fontWeight:'bold',

    },
    otpText:{
        fontSize:24,
        fontWeight:bold,
        color:'#fff',
        margin:20,

    },
})