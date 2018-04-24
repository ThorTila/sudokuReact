export const GET_BOARD = 'GET_BOARD';
export const SOLVE_BOARD = 'SOLVE_BOARD';
export const CHECK_BOARD = 'CHECK_BOARD';
export const RESET_BOARD = 'RESET_BOARD';
export const ADD_VALUE = 'ADD_VALUE';


export function getBoard(level = false) {
    return {
        type: GET_BOARD,
        diffLevel: level
    }
}

export function solveBoard() {
    return {
        type: SOLVE_BOARD
    }
}

export function checkBoard() {
    return {
        type: CHECK_BOARD
    }
}

export function resetBoard() {
    return {
        type: RESET_BOARD
    }
}

export function addValue(id, value) {
    return {
        type: ADD_VALUE,
        id: id,
        value: value
    }
}