import { View, Text, StyleSheet, Platform,SafeAreaView  } from "react-native";
 
import PokemonCard from "./components/PokemonCard";
export default App = () => {
    return (
     
            <SafeAreaView style={styles.container}>
                 <PokemonCard />
            </SafeAreaView>
     
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "f5f5f5",
        paddingTop: Platform.OS === "android"? 50:0
    }
})


