export interface GestureEventType {
    nativeEvent: {
        translationX: number;
        translationY: number;
    }
}

export interface FoodType {
    foodPos: Coordinate,
    foodEmoji: String
}

export interface Coordinate {
    x: number,
    y: number
}

export interface SnakeProps {
    snake: Coordinate[],
    gameOver: boolean
}

export interface HeaderProps {
    reloadGame: () => void, 
    pauseGame: () => void, 
    isPaused: boolean,
    score: number,
}

export enum Direction { TOP, RIGHT, BOTTOM, LEFT }