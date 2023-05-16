import React from "react"; // View é tipo uma div
import {ScrollView, StyleSheet, View } from "react-native"; //scroll view serve para permitir descer a tela
import Topo from "./componentes/Topo/";
import Detalhes from "./componentes/Detalhes";
import Itens from "./componentes/Itens";





export default function Cesta({topo, detalhes, itens}){
    return <ScrollView>
        <Topo {...topo}/>

        <View style={estilos.cesta}>
            <Detalhes {...detalhes}/>
            <Itens {...itens}/>
        </View>
    </ScrollView>
}

const estilos = StyleSheet.create ({
    cesta:{
        paddingVertical: 8, // nao pode passar mais de um parametro e por isso usa vertical e horizontal
        paddingHorizontal: 16
    }
})