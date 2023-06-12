import characters from '../data/characters.json';

export function getSortedCharactersData() {
    
    // Sort posts by date
    return characters.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}