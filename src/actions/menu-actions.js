export const TOGGLE_MENU = 'TOGGLE_MENU';
export const HIDE_MENU = 'HIDE_MENU';

export function toggleMenu() {
  return {
    type: TOGGLE_MENU
  };
}

export function hideMenu() {
  return {
    type: HIDE_MENU
  };
}
