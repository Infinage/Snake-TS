import { StyleSheet, View } from "react-native";
import { Coordinate, SnakeProps } from "../utils/types";
import { COLORS } from "../styles/colors";
import { Fragment } from "react";

const Snake = ({snake}: SnakeProps): JSX.Element => {
    return (
        <Fragment>
            {snake.map((segment: Coordinate, index: number) => {
                
                const segmentPosAndColor = { 
                    left: segment.x * 10, top: segment.y * 10, 
                    backgroundColor: index == 0? COLORS.dark: COLORS.primary
                };

                return (<View key={index} style={[styles.snakeSegment, segmentPosAndColor]} />)
            })}
        </Fragment>
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