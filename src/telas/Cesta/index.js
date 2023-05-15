import React from "react"; // View é tipo uma div
import { StyleSheet, View } from "react-native"; 
import Topo from "./componentes/Topo/";
import Detalhes from "./componentes/Detalhes";





export default function Cesta({topo, detalhes}){
    return <>
    <Topo {...topo}/>

    <View style={estilos.cesta}>
        <Detalhes {...detalhes}/>
    </View>
   </>
}

const estilos = StyleSheet.create ({
    cesta:{
        paddingVertical: 8, // nao pode passar mais de um parametro e por isso usa vertical e horizontal
        paddingHorizontal: 16
    }
})