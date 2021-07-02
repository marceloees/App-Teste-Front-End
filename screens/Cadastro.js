import React, {useState} from 'react';
import {View} from 'react-native';
import {Button, Input, Text, CheckBox} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles/styles';


export default function Cadastro({navigation}){
    const [email, setEmail] = useState(null)
    const [nome, setNome] = useState(null)
    const [cpf, setCPF] = useState(null)
    const [tel, setTelefone] = useState(null)
    const [isSelected, setSelected] = useState(false)
    const [errorEmail, setErrorEmail] = useState(null)
    const [errorNome, setErrorNome] = useState(null)
    const [errorCPF, setErrorCPF] = useState(null)
    const [errorTelefone, setErrorTelefone] = useState(null)

    const validar = () => {
        let error = false
        setErrorCPF(null)
        setErrorEmail(null)
        setErrorTelefone(null)
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(email).toLowerCase())){
        setErrorEmail("Preencha seu e-mail corretamente")
        error = true
        }
        if (cpf == null){
        setErrorCPF("Preencha seu CPF corretamente")
        error = true
        }
        if (tel == null){
        setErrorTelefone("Preencha seu telefone corretamente")    
        }
        return !error

    }
    const salvar = () => {
        if (validar()){
        console.log("Salvou")
        console.log(cpf)
        console.log(tel)
        }
    }

    const cadastrar = () => {
      navigation.reset({
        index: 0,
        routes: [{name: "Cadastro"}]
      })
    }


    return(
        <View style = {styles.container} >
        <Text h3 > Cadastre-se</Text>
        <Input placeholder="Email"
        onChangeText = {value => {setEmail(value)
        setErrorEmail(null)}}
        keyboardType="email-address"
        errorMessage = {errorEmail}>
        
        </Input>
        <Input placeholder="Nome"
        onChangeText = {value => setNome(value)}
        errorMessage = {errorNome}>
        </Input>
        <Input placeholder="CPF"
        onChangeText= {value => {setCPF(value)
        setErrorCPF(null)}}
        keyboardType="number-pad"
        returnKeyType="done"
        errorMessage = {errorCPF}
        ></Input>
        <Input placeholder="Telefone"
        onChangeText={value => {setTelefone(value)
        setErrorTelefone(null)}}
        keyboardType="phone-pad"
        returnKeyType="done"
        errorMessage = {errorTelefone}></Input>

        <CheckBox
        title = "Eu aceito os termos de uso"
        checkedIcon="check"
        uncheckedIcon="square-o"
        checkedColor="green"
        uncheckedColor="red"
        checked={isSelected}
        onPress={() => setSelected(!isSelected)}/>


        <Button
          icon={
            <Icon
              name="check"
              color = "white"></Icon>
          }
          title="Salvar"
          onPress={() => salvar()}></Button>

      </View>
    );
}




    