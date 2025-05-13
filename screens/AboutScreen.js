import React from "react"
import {View, Text, Button, StyleSheet} from "react-native"
 
export default function DetailsScreen({navigation}){
   
    return(
        <View style = {styles.app}>
            <Text style= {styles.title}>Kauan Santos Oliveira</Text>
            <Text>Email: ks369985@gmail.com</Text>
            <Text>Telefone: (11) 96218-0950</Text>

       
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
    }
})