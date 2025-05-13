import React from "react"
import {View, Text, Button, StyleSheet} from "react-native"
 
export default function DetailsScreen({navigation}){
   
    return(
        <View style = {styles.app}>
            <Text style= {styles.title}> Detalhes</Text>
            <Text style= {styles.text}>Nosso aplicativo foi desenvolvido para oferecer a melhor experiência possível, unindo tecnologia, praticidade e segurança em um só lugar. Com uma interface intuitiva e moderna, você pode realizar tarefas com agilidade e facilidade, seja no trabalho, nos estudos ou na vida pessoal.</Text>
            <Button title="Voltar" onPress={()=> navigation.goBack()}></Button>
        </View>
    )
}
 
const styles = StyleSheet.create({
    app: {
        flex: 1,
        alignItems: "center",
        margin: 10,
        justifyContent: "center",
        display: "flex",
        gap: 50
    },
 
    title: {
        fontSize: 25,
        fontWeight: "600"
    },
    text:{
        textAlign: "center"
    }
})