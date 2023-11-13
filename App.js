import { ScrollView, View, Text, StyleSheet, Platform, SafeAreaView } from "react-native";
import { data } from "./utils/data";
import PokemonCard from "./components/PokemonCard";
export default App = () => {

    return (

        <View style={styles.container}>
             
            <ScrollView>
                <View>
                    <Text style={styles.title}>Pokemon Cards Game</Text>
                </View>
                {data.map(character => (
                    <PokemonCard  {...character} />
                ))}
            </ScrollView>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "f5f5f5",
        paddingTop: Platform.OS === "android" ? 50 : 0
    },
    title: {
        textAlign: 'center',
        fontWeight: "bold",
        fontSize: 32,
        paddingHorizontal: 10,
    }
})


