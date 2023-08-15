import { View, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
    }
})

export function Search(){
    return(
        <View style={styles.container}>
            <Text>Pagina Search</Text>
        </View>
    )
}

