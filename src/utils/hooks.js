import { useState, useEffect } from 'react';

export const useLocalState = (key, value) => {
    const [state, setState] = useState(value);

    useEffect(() => {
        const localItem = localStorage.getItem(key);
        if (localItem) {
            setState(JSON.parse(localItem));
        } else {
            localStorage.setItem(key, JSON.stringify(value));
        }
    }, [key, value]);

    const setInnerState = (update) => {
        if (typeof update === 'function') {
            setState((prevValue) => {
                const newValue = update(prevValue);
                localStorage.setItem(key, JSON.stringify(newValue));

                return newValue;
            });
            return;
        }
        localStorage.setItem(key, JSON.stringify(update));
        setState(update);
    };

    return [state, setInnerState];
};
