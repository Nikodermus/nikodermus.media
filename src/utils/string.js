export const dumbCasing = (str = '') =>
    str
        .split('')
        .map((letter, index) =>
            letter[`to${index % 2 ? 'Upper' : 'Lower'}Case`]()
        )
        .join('');
