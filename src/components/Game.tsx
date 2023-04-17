import React from "react";
import { Text } from "react-native";

import { SafeAreaView, StyleSheet, View } from "react-native"
import { PanGestureHandler } from "react-native-gesture-handler"
import { COLORS } from "../styles/colors";
import { Coordinate, Direction, FoodType, GestureEventType } from "../utils/types";
import { MOVE_INTERVAL, SCORE_INCREMENT, SNAKE_INITIAL_POS } from "../utils/INITIAL_CONFIG";
import Snake from "./Snake";
import Food from "./Food";
import { checkEatenFood, checkGameOver, generateFood } from "../utils/util";
import GameHeader from "./GameHeader";

const Game = (): JSX.Element => {

    const [direction, setDirection] = React.useState<Direction>(Direction.RIGHT);
    const [snake, setSnake] = React.useState<Coordinate[]>(SNAKE_INITIAL_POS);
    const [food, setFood] = React.useState<FoodType>(generateFood());
    const [score, setScore] = React.useState<number>(0);
    const [isPaused, setIsPaused] = React.useState<boolean>(false);
    const [gameOver, setGameOver] = React.useState<boolean>(false);

    React.useEffect(() => {
        if (!gameOver) {
            const intervalId = setInterval(() => {
                !isPaused && moveSnake()
            }, MOVE_INTERVAL)
            return () => clearInterval(intervalId);
        }
    }, [snake, isPaused, gameOver])

    const pauseGame = () => {
        setIsPaused(isPaused => !isPaused);
    }

    const reloadGame = () => {
        setSnake(SNAKE_INITIAL_POS);
        setDirection(Direction.RIGHT);
        setFood(generateFood());
        setScore(0);
        setIsPaused(false);
        setGameOver(false);
    }

    const moveSnake = () => {
        const snakeHead = snake[0];
        const newHead = {...snakeHead};

        setGameOver(checkGameOver(snakeHead));

        if (!gameOver) {
            switch (direction) {
                case Direction.TOP:
                    newHead.y -= 1;
                    break;
                case Direction.BOTTOM:
                    newHead.y += 1;
                    break;
                case Direction.LEFT:
                    newHead.x -= 1;
                    break;
                case Direction.RIGHT:
                    newHead.x += 1;
            }
    
            if (checkEatenFood(snakeHead, food.foodPos)) {
                // If user has eaten something
                setFood(generateFood())
                setSnake(snake => [newHead, ...snake.slice(0, snake.length)]);
                setScore(score => score + SCORE_INCREMENT);
            } else {
                // If user has not eaten something
                setSnake(snake => [newHead, ...snake.slice(0, snake.length - 1)]);
            }
        }
    }

    const handleGesture = (event: GestureEventType) => {
        const {translationX, translationY} = event.nativeEvent;

        if (Math.abs(translationX) > Math.abs(translationY)) {
            if (translationX < 0) {
                setDirection(Direction.LEFT)
            } else {
                setDirection(Direction.RIGHT)
            }
        } else {
            if (translationY < 0) {
                setDirection(Direction.TOP);
            } else {
                setDirection(Direction.BOTTOM);
            }
        }
    }

    return (
        <PanGestureHandler onGestureEvent={handleGesture}>
            <SafeAreaView style={styles.container}>
                <GameHeader isPaused={isPaused} pauseGame={pauseGame} reloadGame={reloadGame} score={score} />
                <View style={styles.wall}>
                    <Snake snake={snake} />
                    <Food foodEmoji={food.foodEmoji} foodPos={food.foodPos}/>
                </View>
            </SafeAreaView>
        </PanGestureHandler>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.primary,
    },

    wall: {
        backgroundColor: COLORS.background,
        borderColor: COLORS.primary,
        flex: 1,
        borderWidth: 15,
        borderRadius: 30,
    }
})  

export default Game;
