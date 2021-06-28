import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Input, Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Login({navigation}){
    const [email, setEmail] = useState(null)
    const [senha, setSenha] = useState(null)

    const entrar = () => {
       navigation.reset({
         index: 0,
         routes: [{name:"Principal"}]
       })
    }


    return(
        <View style = { styles.container } >
        <Text h3 > Abra o meu app! </Text>
        <Input placeholder="Email"
        leftIcon ={{ type: 'font-awesome', name: 'envelope'}}
        onChangeText = {value => setEmail(value)}
        keyboardType="email-address">
        </Input>
        <Input placeholder="Senha"
        leftIcon ={{ type: 'font-awesome', name: 'key'}}
        onChangeText = {value => setSenha(value)}
        secureTextEntry = {true}>
        </Input>

        <Button
          icon={
            <Icon
              name="check"
              size = {15}
              color = "white"></Icon>
          }
          title="Entrar"
          onPress={() => entrar()}></Button>

      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

    