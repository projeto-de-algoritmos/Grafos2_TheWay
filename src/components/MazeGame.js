import React, { useState } from "react";
import Maze from "./Maze";

export default function MazeGame() {
    const maze = [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 1, 1, 1, 1, 1, 1, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 1, 0, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 1, 1, 1, 1, 1, 1, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ];

    const [playerPosition, setPlayerPosition] = useState({
        row: 1,
        column: 1,
    });

    const handleKeyDown = (event) => {
        const { key } = event;

        switch (key) {
            case "ArrowUp":
                if (playerPosition.row > 0 && maze[playerPosition.row - 1][playerPosition.column] === 0) {
                    setPlayerPosition((prev) => ({
                        ...prev,
                        row: prev.row - 1,
                    }));
                }
                break;
            case "ArrowDown":
                if (playerPosition.row < maze.length - 1 && maze[playerPosition.row + 1][playerPosition.column] === 0) {
                    setPlayerPosition((prev) => ({
                        ...prev,
                        row: prev.row + 1,
                    }));
                }
                break;
            case "ArrowLeft":
                if (playerPosition.column > 0 && maze[playerPosition.row][playerPosition.column - 1] === 0) {
                    setPlayerPosition((prev) => ({
                        ...prev,
                        column: prev.column - 1,
                    }));
                }
                break;
            case "ArrowRight":
                if (playerPosition.column < maze[0].length - 1 && maze[playerPosition.row][playerPosition.column + 1] === 0) {
                    setPlayerPosition((prev) => ({
                        ...prev,
                        column: prev.column + 1,
                    }));
                }
                break;
            default:
                break;
        }
    };

    return (
        <div onKeyDown={handleKeyDown} tabIndex="0">
            <h1>The Way</h1>
            <div>
                <p>Use as teclas de direção para mover o jogador</p>
                <div style={{ display: "flex" }}>
                    <Maze maze={maze} playerPosition={playerPosition} />
                </div>
            </div>
        </div>
    );
}