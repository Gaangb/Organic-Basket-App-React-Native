import React from "react"; // View é tipo uma div
import { StyleSheet, Image, Dimensions, Text, View } from "react-native"; // Dimentions serve para pegar o tamanho da screen e melhorar a responsividade
import topo from '../../assets/topo.png';
import logo from '../../assets/logo.png';

const width = Dimensions.get('screen').width;

export default function Cesta(){
    return <>
    <Image source={topo} style={estilos.topo}/>
    <Text style={estilos.titulo}>Detalhe da Cesta</Text>

    <View style={estilos.cesta}>
        <Text style={estilos.nome}>Cesta de Verduras</Text>
        <View style={estilos.fazenda}>
            <Image source={logo} style={estilos.imagemFazenda}/>
            <Text style={estilos.nomeFazenda}>Jenny Jack Farm</Text>
        </View>
        <Text style={estilos.descricao}>
            Uma cesta de produtos selecionados cuidadosamente da fazenda direto para sua cozinha
        </Text>
        <Text style={estilos.preco}>R$ 40,00</Text>
    </View>
   </>
}

const estilos = StyleSheet.create ({
    topo:{
        width: "100%",
        height: 578 / 768 * width // isso adapta a imagem a altura de qualquer tela
    },
    titulo:{
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        color: "white",
        fontWeight: "bold",
        padding: 16
    },
    cesta:{
        paddingVertical: 8, // nao pode passar mais de um parametro e por isso usa vertical e horizontal
        paddingHorizontal: 16
    },
    nome:{
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
        fontFamily: "MontserratBold",
    },
    fazenda:{
        flexDirection: "row", // display: flex ja vem ativo por padrao
        paddingVertical: 12
    },
    imagemFazenda:{
        width: 32,
        height: 32        
    },
    nomeFazenda:{
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
        fontFamily: "MontserratRegular",
    },
    descricao:{
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26
    },
    preco:{
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
    }
})//proxima aula é 02 - componentes