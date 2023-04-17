import { FOOD_AREA, GAME_BOUNDS } from "./INITIAL_CONFIG";
import { Coordinate, FoodType } from "./types";

export const checkGameOver = (snakeHead: Coordinate): boolean => {
    return (
        snakeHead.x < GAME_BOUNDS.xMin || 
        snakeHead.x > GAME_BOUNDS.xMax || 
        snakeHead.y < GAME_BOUNDS.yMin || 
        snakeHead.y > GAME_BOUNDS.yMax
    );
}

export const checkEatenFood = (snakeHead: Coordinate, food: Coordinate): boolean => {
    return Math.abs(snakeHead.x - food.x) < FOOD_AREA && Math.abs(snakeHead.y - food.y) < FOOD_AREA;
}

export const generateFood = (): FoodType => {

    const foodEmojis = ["🍅", "🍊", "🥭", "🍇"];
    const foodEmoji = foodEmojis[Math.floor(Math.random() * foodEmojis.length)];

    return { 
        foodPos: {
            x: Math.floor(Math.random() * (GAME_BOUNDS.xMax - GAME_BOUNDS.xMin) + GAME_BOUNDS.xMin),
            y: Math.floor(Math.random() * (GAME_BOUNDS.yMax - GAME_BOUNDS.yMin) + GAME_BOUNDS.yMin)
        }, foodEmoji
    }
}