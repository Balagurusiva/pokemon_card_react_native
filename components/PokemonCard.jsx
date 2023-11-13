import { Text, View, StyleSheet, Platform } from "react-native";

export default PokemonCard = () =>{
    return (
            <View style={sytles.card}>
                <Text>Pokemon cards</Text>
            </View>
    )
}


const sytles = StyleSheet.create({
    card : {
        backgroundColor:"white",
        borderRadius: 16,
        borderWidth:1,
        padding:16,
        margin:16,
        ...Platform.select({
            ios:{
                shadowOffset:{width:2,height:2},
                shadowColor:'#333',
                shadowOpacity:0.3,
                shadowRadius:4
            },
            android:{
                elevation:10,
                shadowColor:"blue",
            }
        })
    }
})