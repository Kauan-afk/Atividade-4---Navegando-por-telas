import React from "react"
import {View, Text, Button, StyleSheet} from "react-native"
 
export default function HomeScreen({navigation}){
   
    return(
        <View style = {styles.app}>
            <Text style= {styles.title}>Tela Inicial</Text>
            <Text style= {styles.text}>Apresentamos nosso aplicativo: a ferramenta ideal para transformar seu dia a dia com praticidade, segurança, agilidade e design moderno. Experimente agora e descubra uma nova forma de se conectar!</Text>
            <View style= {styles.buttonsView}>
                <Button title="Detalhes" onPress={()=> navigation.navigate("Detalhes")}></Button>
                <Button title="Sobre o desenvolvedor" onPress={()=> navigation.navigate("Sobre o desenvolvedor")}></Button>
            </View>
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
        gap: 50,
    },

    buttonsView: {
        display: "flex",
        gap: 20
    },
 
    title: {
        fontSize: 25,
        fontWeight: "600"
    },
    text:{
        textAlign: "center"
    }
})