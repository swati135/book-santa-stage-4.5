import React, {Component} from 'react';
import { View, StyleSheet, Text,  TouchableOpacity,TextInput, Alert,  KeyboardAvoidingView, ScrollView} from 'react-native';
import MyHeader from '../components/MyHeader';

export default class SettingScreen extends Component{
    constructor(){
        super()
        this.state={
            emailId: '',
            firstName:'',
            lastName:'',
            contact:'',
            address:'',
            docId: ''
         
        }
      }
    
    render (){
        return (
            <View style ={styles.container}>
                <MyHeader title = "Settings" navigation = {this.props.navigation} />
                <View style = {styles.formContainer}>
                    <KeyboardAvoidingView style ={styles.KeyboardAvoidingView}>
                        <TextInput
                            style={styles.formTextInput}
                            placeholder="First Name"
                            maxLength={15}
                            onChangeText={(text)=>{
                            this.setState({
                                firstName: text
                            })
                            }}
                            value ={this.state.firstName}
                        />

                        <TextInput
                            style={styles.formTextInput}
                            placeholder="Last Name"
                            onChangeText={(text)=>{
                            this.setState({
                                lastName: text
                            })
                            }}
                            value ={this.state.lastName}
                        />

                        <TextInput
                            style={styles.formTextInput}
                            placeholder="Contact"
                            keyboardType='numeric'
                            maxLength={12}
                            onChangeText={(text)=>{
                            this.setState({
                                contact: text
                            })
                            }}
                            value ={this.state.contact}
                        />    

                        <TextInput
                            style={styles.formTextInput}
                            placeholder="Address"
                            multiline ={true}
                            onChangeText={(text)=>{
                            this.setState({
                                address: text
                            })
                            }}
                            value ={this.state.address}
                        />

                        <TouchableOpacity 
                            style= {styles.button}
                            onPress ={()=>{this.updateUserDetails()}}
                        >
                            <Text style = {styles.buttonText}>Save</Text>
                        </TouchableOpacity>

                    </KeyboardAvoidingView>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
      flex:1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    formContainer:{
      flex:1,
      width:'100%',
      alignItems: 'center'
    },
    KeyboardAvoidingView:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
      },
    formTextInput:{
      width:"75%",
      height:35,
      alignSelf:'center',
      borderColor:'#ffab91',
      borderRadius:10,
      borderWidth:1,
      marginTop:20,
      padding:10,
    },
    button:{
      width:"75%",
      height:50,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:10,
      backgroundColor:"#ff5722",
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 8,
      },
      shadowOpacity: 0.44,
      shadowRadius: 10.32,
      elevation: 16,
      marginTop:20
    },
    buttonText:{
      fontSize:25,
      fontWeight:"bold",
      color:"#fff"
    }
  })