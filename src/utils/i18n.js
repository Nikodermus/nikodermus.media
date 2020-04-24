import get from 'lodash.get';

import en from '../locale/en';
import es from '../locale/es';

export const availableLanguages = {
    en,
    es,
};

export const translate = (path, language) => {
    if (Array.isArray(path)) {
        return path.map((p) => get(availableLanguages[language], p));
    }

    return get(availableLanguages[language], path);
};
