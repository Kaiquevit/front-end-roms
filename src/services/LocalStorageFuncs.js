export const setItem = (key, value) => localStorage.setItem(key, JSON.stringify(value));

export const getItem = (key, value) => {
    return JSON.parse(localStorage.getItem(key))
}