import { useState } from 'react'
import Square from './Square'

const array: number[] = Array(9).fill(0)
const Board: React.FC = () => {
    const [squareItem, setSquareItem] = useState<string[]>(Array(9).fill(null))
    const [isXTurn, setIsXTurn] = useState<boolean>(true)

    const checkWinner = () => {
        const winner = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]

        for (let pattern of winner) {
            const [a, b, c] = pattern;
            if (squareItem[a] !== null && squareItem[a] === squareItem[b] && squareItem[a] === squareItem[c]) {
                return squareItem[a]
            }
        }
        return false
    }
    const whoIsWinner = checkWinner();


    const handleSquareClick = (index: number) => {
        if (squareItem[index] !== null) {
            return;
        }
        else {
            squareItem[index] = isXTurn ? "X" : "O";
            setSquareItem(squareItem)
            setIsXTurn(!isXTurn)
        }
    }

    const playAgain = () => {
        setSquareItem(Array(9).fill(null))
    }

    return (
        <>
            <div className='board'>
                {
                    whoIsWinner ?
                        <div className='winnerDiv'>
                            <p className='winnerPara'>
                                Player <span style={{ color: "#C60C30", fontSize: "3rem" }}>{whoIsWinner}</span> won the game.
                            </p>

                            <div className='playAgainBtnDiv'>
                                <button className='playAgainBtn' onClick={playAgain}>
                                    Play Again
                                </button>
                            </div>
                        </div>
                        
                        :
                        <>
                            <div className='row'>
                                {
                                    array.map((_, index) => (
                                        <Square onClick={() => handleSquareClick(index)} value={squareItem[index]} key={index} />
                                    ))
                                }
                            </div>
                        </>
                }
            </div>
        </>
    )
}

export default Board