import { StyleSheet, Text } from "react-native";
import { FoodType } from "../utils/types";

const Food = ({foodPos, foodEmoji}: FoodType): JSX.Element => {
    return (
        <Text style={{top: foodPos.y * 10, left: foodPos.x * 10, ...styles.food}}>{foodEmoji}</Text>
    )
}

const styles = StyleSheet.create({
    food: {
        width: 20,
        height: 20,
        borderRadius: 7,
        position: "absolute"
    }
})

export default Food;