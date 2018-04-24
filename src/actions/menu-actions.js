export const SHOW_MENU = 'SHOW_MENU';
export const HIDE_MENU = 'HIDE_MENU';

export function showMenu() {
    return {
        type: SHOW_MENU
    }
}

export function hideMenu() {
    return {
        type: HIDE_MENU
    }
}