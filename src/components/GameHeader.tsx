import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { HeaderProps } from "../utils/types";
import { COLORS } from "../styles/colors";

export default function GameHeader ({reloadGame, pauseGame, isPaused, score}: HeaderProps): JSX.Element {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={reloadGame}>
                <Ionicons name="reload-circle" size={35} colors={COLORS.primary} />
            </TouchableOpacity>

            <TouchableOpacity onPress={pauseGame}>
                <Ionicons name={isPaused? "play-circle": "pause-circle"} size={35} colors={COLORS.primary} />
            </TouchableOpacity>

            <Text style={styles.scoreText}>🍴 {score}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 0.05,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderColor: COLORS.primary,
        borderWidth: 12,
        borderRadius: 25,
        borderBottomWidth: 0,
        padding: 20,
        backgroundColor: COLORS.background,
    },

    scoreText: {
        fontSize: 25,
        fontWeight: "bold",
        color: COLORS.primary,
    }
})