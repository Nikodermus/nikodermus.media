export const randomInRange = (min = 0, max = 10) =>
    Math.floor(Math.random() * (max - min + 1) + min);
