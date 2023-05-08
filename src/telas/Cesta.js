import React from "react";
import { StyleSheet, Image, Dimensions, Text } from "react-native"; // Dimentions serve para pegar o tamanho da screen e melhorar a responsividade
import topo from '../../assets/topo.png';

const width = Dimensions.get('screen').width;

export default function Cesta(){
    return <>
    <Image source={topo} style={estilos.topo}/>
    <Text>Detalhes da Cesta</Text>
   </>
}

const estilos = StyleSheet.create ({
    topo:{
        width: "100%",
        height: 578 / 768 * width
    }
})