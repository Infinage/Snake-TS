import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Coordinate, SnakeProps } from "../utils/types";
import { COLORS } from "../styles/colors";

const Snake = ({snake, gameOver}: SnakeProps): JSX.Element => {

    const [isSnakeVisible, setSnakeVisibility] = React.useState<boolean>(true);

    React.useEffect(() => {
        if (gameOver) {
            const intervalId = setInterval(() => setSnakeVisibility(isSnakeVisible => !isSnakeVisible), 500)
            return () => clearInterval(intervalId);
        } else setSnakeVisibility(true);
    }, [gameOver])

    return (
        <React.Fragment>
            {snake.map((segment: Coordinate, index: number) => {
                
                const segmentPosAndColor = { 
                    left: segment.x * 10, top: segment.y * 10, 
                    backgroundColor: index == 0? COLORS.dark: COLORS.primary
                };

                return (isSnakeVisible && <View key={index} style={[styles.snakeSegment, segmentPosAndColor]} />)
            })}
        </React.Fragment>
    )
}

const styles = StyleSheet.create({
    snakeSegment: {
        width: 15,
        height: 15,
        borderRadius: 7,
        position: "absolute"
    }
})

export default Snake;