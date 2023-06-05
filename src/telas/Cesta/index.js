import React from "react"; // View é tipo uma div
import {FlatList, StyleSheet, View } from "react-native"; //scroll view serve para permitir descer a tela
import Topo from "./componentes/Topo/";
import Detalhes from "./componentes/Detalhes";
import Item from "./componentes/Item";
import Texto from "../../componentes/Texto";




export default function Cesta({topo, detalhes, itens}){
    return <>
        <FlatList 
        // com o flatlist nao precisa do scrolview
            data={itens.lista}
            renderItem={Item}
            keyExtractor={({nome}) => nome}
            ListHeaderComponent={()=>{
                return <>
                    <Topo {...topo}/>
                    <View style={estilos.cesta}>
                        <Detalhes {...detalhes}/>
                        <Texto style={estilos.titulo}>{itens.titulo}</Texto>
                    </View>
                </>
            }}
        />
    </>
}

const estilos = StyleSheet.create ({
    titulo:{
        color: "#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32,
    },
    cesta:{
        paddingVertical: 8, // nao pode passar mais de um parametro e por isso usa vertical e horizontal
        paddingHorizontal: 16
    }
})