import characters from '../data/characters.json';

/**
 * Get all characters data sorted by name
 * @returns 
 */
export function getSortedCharactersData() {

    // Sort characters by name
    return characters.sort((a, b) => {
        if (a.name > b.name) {
            return 1;
        } else {
            return -1;
        }
    });
}

/**
 * List of all character ids
 * @returns 
 */
export function getAllCharactersIds() {
    return characters.map((character) => {
        return {
            params: {
                id: character.id,
            },
        };
    });
}

/**
 * Get character data by id
 */
export function getCharacter(id) {
    const character = characters.filter(character => character.id === id)
  
    // Combine the data with the id
    return {
      id,
      ...character[0],
    };
  }